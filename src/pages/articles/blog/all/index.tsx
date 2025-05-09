import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { useBookmarks } from "@/contexts/bookmark-context";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
  link: string;
  categories: number[];
}

interface Category {
  id: number;
  name: string;
}

export function BlogListPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://lucianamaluf.com.br/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const wpTotalPages = response.headers.get('X-WP-TotalPages');
        setTotalPages(wpTotalPages ? parseInt(wpTotalPages) : 1);
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Erro ao carregar os posts. Por favor, tente novamente mais tarde.');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://lucianamaluf.com.br/wp-json/wp/v2/categories"
        );
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchPosts();
    fetchCategories();
  }, [currentPage]);

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || 'Sem categoria';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-6">Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Fique por dentro das últimas novidades em dermatologia e cuidados com a pele
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6f0d44]"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="h-full bg-white/50 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || '/placeholder.jpg'}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#6f0d44]/10 text-[#6f0d44] mb-2">
                          {post.categories[0] && getCategoryName(post.categories[0])}
                        </span>
                        <h2 
                          className="text-xl font-semibold text-[#6f0d44] mb-2" 
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleBookmark(post.id.toString())}
                        className="mt-[-8px]"
                      >
                        <Bookmark
                          className={`h-5 w-5 ${
                            isBookmarked(post.id.toString())
                              ? "fill-current text-[#6f0d44]"
                              : "text-gray-500"
                          }`}
                        />
                      </Button>
                    </div>
                    <div 
                      className="text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
                      </span>
                      <Link 
                        to={`/articles/blog/${post.slug}`}
                        className="group inline-flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo(0, 0);
                          navigate(`/articles/blog/${post.slug}`);
                        }}
                      >
                        <span className="text-[#6f0d44] group-hover:mr-2 transition-all">Ler mais</span>
                        <span className="text-[#6f0d44] group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="text-[#6f0d44] hover:text-[#8b1155] hover:bg-[#6f0d44]/10"
                >
                  ← Anterior
                </Button>
                <div className="flex items-center gap-2 px-4">
                  <span className="text-[#6f0d44]">
                    Página {currentPage} de {totalPages}
                  </span>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="text-[#6f0d44] hover:text-[#8b1155] hover:bg-[#6f0d44]/10"
                >
                  Próxima →
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { WordPressPost } from "@/lib/types/wordpress";

export function AllBlogPostsPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>();
  const lastPostElementRef = useRef<HTMLDivElement>(null);
  const postsPerPage = 9;

  const fetchPosts = async (pageNum: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://lucianamaluf.com.br/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${pageNum}&search=${searchQuery}`
      );
      const data = await response.json();
      const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1");
      setHasMore(pageNum < totalPages);
      
      if (pageNum === 1) {
        setPosts(data);
      } else {
        setPosts(prev => [...prev, ...data]);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const lastPostRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    fetchPosts(1);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchPosts(page);
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    setPosts([]);
    fetchPosts(1);
  }, [searchQuery]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-4">
            Todos os Artigos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Explore nossa coleção completa de artigos sobre dermatologia e bem-estar
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Pesquisar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg bg-white border-gray-200 focus:border-[#6f0d44] focus:ring-[#6f0d44]"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              ref={index === posts.length - 1 ? lastPostRef : null}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/articles/blog/${post.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "https://placehold.co/600x400"
                    }
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    {post._embedded?.author && (
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post._embedded.author[0].name}
                      </span>
                    )}
                  </div>
                  <h2
                    className="text-xl font-bold text-[#6f0d44] mb-3 line-clamp-2 group-hover:text-[#8b1155] transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <div className="flex items-center text-[#6f0d44] font-medium">
                    Ler mais
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#6f0d44]"></div>
          </div>
        )}

        {posts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Nenhum artigo encontrado {searchQuery && `para "${searchQuery}"`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

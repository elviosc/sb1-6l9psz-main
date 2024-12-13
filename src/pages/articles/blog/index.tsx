import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, User } from "lucide-react";
import { WordPressPost } from "@/lib/types/wordpress";
import { Link } from "react-router-dom";

export function BlogPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://lucianamaluf.com.br/wp-json/wp/v2/posts?_embed&per_page=3"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
    <section className="py-24 bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6f0d44] mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Fique por dentro das últimas novidades e conhecimentos em dermatologia
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6f0d44]"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {stripHtmlTags(post.excerpt.rendered)}
                      </p>
                      <div className="flex items-center text-[#6f0d44] font-medium">
                        Ler mais
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="text-center">
              <Link to="/articles/blog/all">
                <Button
                  size="lg"
                  className="bg-[#6f0d44] hover:bg-[#8b1155] text-white"
                >
                  Ver Todos os Artigos
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
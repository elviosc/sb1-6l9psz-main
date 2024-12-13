import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Calendar, ChevronLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordPressPost } from "@/lib/types/wordpress";

export function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://lucianamaluf.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const data = await response.json();
        if (data.length > 0) {
          setPost(data[0]);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6f0d44]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
        <h1 className="text-2xl font-bold text-[#6f0d44] mb-4">
          Artigo não encontrado
        </h1>
        <Link to="/articles/blog">
          <Button className="bg-[#6f0d44] hover:bg-[#8b1155] text-white">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar para o Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-[#fff5f8]">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://placehold.co/1200x800"
          }
          alt={post.title.rendered}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/articles/blog">
                <Button
                  variant="outline"
                  className="mb-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Voltar para o Blog
                </Button>
              </Link>
              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div className="flex items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {formatDate(post.date)}
                </span>
                {post._embedded?.author && (
                  <span className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {post._embedded.author[0].name}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto max-w-4xl px-4 py-12"
      >
        <div
          className="prose prose-lg max-w-none prose-headings:text-[#6f0d44] prose-a:text-[#6f0d44] hover:prose-a:text-[#8b1155]"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </motion.div>
    </article>
  );
}
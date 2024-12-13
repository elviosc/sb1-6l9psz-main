import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, ChevronLeft, User, Clock, Share2, Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordPressPost } from "@/lib/types/wordpress";
import { SEO } from "@/components/SEO";
import { useBookmarks } from "@/contexts/BookmarkContext";

export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [readingTime, setReadingTime] = useState<number>(0);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        console.log('Fetching post with slug:', slug);
        
        const response = await fetch(
          `https://lucianamaluf.com.br/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug || '')}&_embed`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        if (data && data.length > 0) {
          setPost(data[0]);
          const wordCount = data[0].content.rendered.split(/\s+/).length;
          const readingTimeMinutes = Math.ceil(wordCount / 200); 
          setReadingTime(readingTimeMinutes);
        } else {
          console.error('Post not found');
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

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title.rendered,
          text: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
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
        <p className="text-gray-600 mb-6">
          O artigo que você está procurando não foi encontrado ou pode ter sido removido.
        </p>
        <Button
          onClick={() => navigate(-1)}
          className="bg-[#6f0d44] hover:bg-[#8b1155] text-white"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Voltar para o Blog
        </Button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title.rendered} | Blog Luciana Maluf`}
        description={post.excerpt.rendered.replace(/<[^>]*>/g, '')}
        type="article"
      />
      
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
                <Button
                  onClick={() => navigate(-1)}
                  variant="outline"
                  className="mb-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Voltar para o Blog
                </Button>
                <h1
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div className="flex flex-wrap items-center gap-6 text-white/80">
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
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {readingTime} min de leitura
                  </span>
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
          <div className="flex justify-end gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handleShare}
              className="rounded-full"
              title="Compartilhar"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => toggleBookmark(post.slug)}
              className="rounded-full"
              title={isBookmarked(post.slug) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              {isBookmarked(post.slug) ? (
                <BookmarkCheck className="w-5 h-5" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#6f0d44] prose-a:text-[#6f0d44] hover:prose-a:text-[#8b1155]
                     prose-img:rounded-lg prose-img:shadow-lg
                     prose-blockquote:border-l-[#6f0d44] prose-blockquote:text-gray-700
                     prose-strong:text-[#6f0d44]"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </motion.div>
      </article>
    </>
  );
}
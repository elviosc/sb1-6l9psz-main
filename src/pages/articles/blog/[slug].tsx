import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, ChevronLeft, User, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordPressPost } from "@/lib/types/wordpress";
import { SEO } from "@/components/SEO";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [readingTime, setReadingTime] = useState<number>(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://lucianamaluf.com.br/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug || '')}&_embed`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.length > 0) {
          setPost(data[0]);
          const wordCount = data[0].content.rendered.split(/\s+/).length;
          const readingTimeMinutes = Math.ceil(wordCount / 200);
          setReadingTime(readingTimeMinutes);
          // Scroll to top after post is loaded
          window.scrollTo(0, 0);
        } else {
          throw new Error('Post not found');
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        navigate('/articles/blog/all');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, navigate]);

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
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6f0d44]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-2xl font-bold text-[#6f0d44] mb-4">
          Artigo não encontrado
        </h1>
        <p className="text-gray-600 mb-6">
          O artigo que você está procurando não foi encontrado ou pode ter sido removido.
        </p>
        <Button
          onClick={() => navigate('/articles/blog/all')}
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
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[40vh] lg:h-[50vh]">
          <img
            src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://placehold.co/1200x800"}
            alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative bg-white -mt-20 mx-auto max-w-4xl rounded-t-3xl shadow-xl">
          <div className="px-4 md:px-8 pt-8 pb-16">
            {/* Title and Meta */}
            <div className="mb-8">
              <h1
                className="text-3xl md:text-4xl font-bold text-[#6f0d44] mb-6"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
                </span>
                {post._embedded?.author && (
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post._embedded.author[0].name}
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {readingTime} min de leitura
                </span>
              </div>
            </div>

            {/* Share and Back Buttons */}
            <div className="flex justify-between items-center mb-8">
              <Button
                variant="outline"
                onClick={() => navigate('/articles/blog/all')}
                className="flex items-center gap-2 text-[#6f0d44] border-[#6f0d44] hover:bg-[#6f0d44] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
                Voltar para o Blog
              </Button>
              <Button
                variant="outline"
                onClick={handleShare}
                className="flex items-center gap-2 text-[#6f0d44] border-[#6f0d44] hover:bg-[#6f0d44] hover:text-white"
              >
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-[#6f0d44] prose-headings:font-bold
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-[#6f0d44] prose-a:no-underline hover:prose-a:text-[#8b1155]
                prose-img:rounded-lg prose-img:shadow-lg
                prose-blockquote:border-l-[#6f0d44] prose-blockquote:text-gray-700
                prose-strong:text-[#6f0d44]
                prose-li:text-gray-700
                prose-ul:text-gray-700
                prose-ol:text-gray-700
                [&>*]:relative [&>*]:z-10"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostPage;
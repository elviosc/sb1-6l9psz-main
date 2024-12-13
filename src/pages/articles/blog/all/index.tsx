import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, BookmarkCheck, ChevronRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useBookmarks } from "@/contexts/BookmarkContext";
import { useState, useEffect, useRef, useCallback } from "react";

interface BlogPost {
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
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

const POSTS_PER_PAGE = 6;

export function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();
  const observer = useRef<IntersectionObserver>();

  const lastPostElementRef = useCallback((node: HTMLDivElement | null) => {
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
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://lucianamaluf.com.br/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}&page=${page}`
        );
        const data = await response.json();
        
        // Check if we've reached the end of available posts
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
        setHasMore(page < totalPages);

        if (page === 1) {
          setPosts(data);
        } else {
          setPosts(prevPosts => [...prevPosts, ...data]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Há 1 dia";
    if (diffDays < 7) return `Há ${diffDays} dias`;
    if (diffDays < 30) return `Há ${Math.floor(diffDays / 7)} semanas`;
    if (diffDays < 365) return `Há ${Math.floor(diffDays / 30)} meses`;
    return `Há ${Math.floor(diffDays / 365)} anos`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Blog | Luciana Maluf"
        description="Confira as últimas notícias e artigos sobre tecnologia, inovação e transformação digital."
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              ref={index === posts.length - 1 ? lastPostElementRef : null}
            >
              <Link to={`/articles/blog/${post.slug}`}>
                <img
                  src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder.jpg'}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleBookmark(post.slug);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {isBookmarked(post.slug) ? (
                      <BookmarkCheck className="h-5 w-5" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <Link to={`/articles/blog/${post.slug}`}>
                  <h2
                    className="text-xl font-semibold mb-2 hover:text-blue-600"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </Link>
                <div
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link
                  to={`/articles/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Ler mais
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}

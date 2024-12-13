import { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkContextType {
  bookmarkedPosts: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarkedPosts, setBookmarkedPosts] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarkedPosts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkedPosts', JSON.stringify(bookmarkedPosts));
  }, [bookmarkedPosts]);

  const toggleBookmark = (slug: string) => {
    setBookmarkedPosts(prev => 
      prev.includes(slug)
        ? prev.filter(id => id !== slug)
        : [...prev, slug]
    );
  };

  const isBookmarked = (slug: string) => bookmarkedPosts.includes(slug);

  return (
    <BookmarkContext.Provider value={{ bookmarkedPosts, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}

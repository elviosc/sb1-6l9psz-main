import { createContext, useContext, useState, useEffect } from "react";

interface BookmarkContextType {
  bookmarks: string[];
  addBookmark: (postId: string) => void;
  removeBookmark: (postId: string) => void;
  toggleBookmark: (postId: string) => void;
  isBookmarked: (postId: string) => boolean;
}

export const BookmarkContext = createContext<BookmarkContextType>({
  bookmarks: [],
  addBookmark: () => {},
  removeBookmark: () => {},
  toggleBookmark: () => {},
  isBookmarked: () => false,
});

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (postId: string) => {
    setBookmarks((prev) => [...prev, postId]);
  };

  const removeBookmark = (postId: string) => {
    setBookmarks((prev) => prev.filter((id) => id !== postId));
  };

  const toggleBookmark = (postId: string) => {
    if (isBookmarked(postId)) {
      removeBookmark(postId);
    } else {
      addBookmark(postId);
    }
  };

  const isBookmarked = (postId: string) => {
    return bookmarks.includes(postId);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
}

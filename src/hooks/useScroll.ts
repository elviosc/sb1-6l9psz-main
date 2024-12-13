import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      
      // Determine scroll direction
      setIsScrollingDown(position > lastScrollTop);
      setLastScrollTop(position);
      
      setScrollPosition(position);
      setIsAtBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return { scrollPosition, isAtBottom, isScrollingDown };
}

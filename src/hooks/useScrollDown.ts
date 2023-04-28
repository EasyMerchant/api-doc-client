import { useState, useEffect } from 'react';

export const useScrollDown = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = (e: Event) => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll;

      if (
        direction !== scrollingDown &&
        (currentScroll - lastScroll > 10 || currentScroll - lastScroll < 10)
      ) {
        setScrollingDown(direction);
      }
      lastScroll = currentScroll > 0 ? currentScroll : 0;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollingDown]);

  return scrollingDown;
};

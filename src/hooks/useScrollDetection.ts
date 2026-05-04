import { useEffect, useState } from 'react';

interface ScrollState {
  isScrolled: boolean;
  showFloatingActions: boolean;
}

export function useScrollDetection(
  scrollThreshold = 60,
  floatingThreshold = 500,
): ScrollState {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > scrollThreshold);
      setShowFloatingActions(scrollY > floatingThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold, floatingThreshold]);

  return { isScrolled, showFloatingActions };
}
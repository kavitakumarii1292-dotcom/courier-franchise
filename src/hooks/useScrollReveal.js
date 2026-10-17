import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to automatically trigger scroll-reveal entrance animations
 * using native IntersectionObserver.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If user prefers reduced motion, make all elements immediately visible
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if (prefersReducedMotion) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);
}

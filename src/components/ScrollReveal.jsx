import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that triggers a CSS class when an element scrolls into view.
 * Returns a ref to attach to the target element and a boolean `isVisible`.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Wrapper component that animates children on scroll.
 * Supports multiple animation directions.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = 40,
  className = '',
  ...props
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable animations on mobile (< 768px) to prevent blank sections from delayed observer triggers
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { ref, isVisible } = useScrollReveal(props);

  const transforms = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  // If it's a mobile device, or if the element is visible, show it.
  const shouldShow = isMobile || isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? 'translate(0, 0)' : transforms[direction],
        transition: isMobile ? 'none' : `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isMobile ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

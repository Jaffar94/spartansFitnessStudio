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

function ScrollRevealAnimated({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = 40,
  className = '',
  ...props
}) {
  const { ref, isVisible } = useScrollReveal(props);

  const transforms = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : transforms[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export default function ScrollReveal(props) {
  // Check once on mount. If mobile/tablet, we completely skip rendering the observer.
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  if (isMobile) {
    // Render completely bare naked children on mobile (or a simple div if className was passed)
    // No IntersectionObservers, no inline styles, no lag.
    if (props.className) {
      return <div className={props.className}>{props.children}</div>;
    }
    return <>{props.children}</>;
  }

  return <ScrollRevealAnimated {...props} />;
}

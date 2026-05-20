import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade' | 'scale' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  variant = 'fade',
  delay = 0,
  duration = 600,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              {
                opacity: 0,
                transform:
                  variant === 'scale'
                    ? 'scale(0.95)'
                    : variant === 'slideUp'
                      ? 'translateY(20px)'
                      : variant === 'slideLeft'
                        ? 'translateX(-20px)'
                        : variant === 'slideRight'
                          ? 'translateX(20px)'
                          : 'none',
              },
              {
                opacity: 1,
                transform: 'translateY(0) translateX(0) scale(1)',
              },
            ],
            {
              duration,
              delay,
              easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              fill: 'forwards',
            }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [variant, delay, duration]);

  return <div ref={ref}>{children}</div>;
}
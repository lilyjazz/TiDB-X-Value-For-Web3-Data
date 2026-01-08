import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = '0ms', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animate-fade-slide-blur ${className}`}
      style={{ 
        animationDelay: delay,
        animationPlayState: isVisible ? 'running' : 'paused'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
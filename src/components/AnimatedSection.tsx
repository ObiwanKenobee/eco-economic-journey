
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
}

const AnimatedSection = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  animation = 'fade-up'
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    'fade-in': 'opacity-0 transition-opacity duration-700 ease-out',
    'scale-up': 'opacity-0 scale-95 transition-all duration-700 ease-out',
    'slide-left': 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
    'slide-right': 'opacity-0 translate-x-8 transition-all duration-700 ease-out'
  };

  const visibleClasses = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-in': 'opacity-100',
    'scale-up': 'opacity-100 scale-100',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0'
  };

  return (
    <div 
      ref={sectionRef}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

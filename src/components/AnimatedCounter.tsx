
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  startOnView?: boolean;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  startOnView = true
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(!startOnView);
  const counterRef = useRef<HTMLDivElement>(null);
  const countStarted = useRef(false);

  useEffect(() => {
    if (startOnView) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [startOnView]);

  useEffect(() => {
    if (isInView && !countStarted.current) {
      countStarted.current = true;
      
      let startTime: number | null = null;
      const startValue = 0;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = progress * (end - startValue) + startValue;
        
        setCount(currentCount);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <div 
      ref={counterRef} 
      className={cn("font-bold transition-opacity duration-500", className)}
    >
      {prefix}{count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{suffix}
    </div>
  );
};

export default AnimatedCounter;

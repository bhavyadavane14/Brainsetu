import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  startOnVisible?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 1800,
  decimals = 0,
  startOnVisible = true,
}) => {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(end);
      hasAnimatedRef.current = true;
      return;
    }

    if (!startOnVisible) {
      startCountAnimation();
      return () => {
        if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startCountAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
    };
  }, [end, duration, startOnVisible]);

  const startCountAnimation = () => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve: 1 - (1 - t)^3
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * end;

      setCount(current);

      if (progress < 1) {
        frameIdRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameIdRef.current = requestAnimationFrame(step);
  };

  const formatted = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef} className="inline-block tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
};

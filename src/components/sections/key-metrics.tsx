"use client";

import React, { useState, useEffect, useRef } from 'react';

interface Metric {
  number: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

const metricsData: Metric[] = [
  {
    number: "15",
    suffix: "+",
    label: "AI/ML Projects Completed"
  },
  {
    number: "3",
    suffix: "+",
    label: "Years of Development Experience"
  },
  {
    number: "85",
    suffix: "%",
    label: "Average Model Accuracy"
  },
  {
    number: "100",
    suffix: "%",
    label: "Project Success Rate"
  },
  {
    number: "10",
    suffix: "+",
    label: "Technologies Mastered"
  },
  {
    number: "95",
    suffix: "%",
    label: "Client Satisfaction Score"
  }
];

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
};

const useCountUp = (end: number, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

const MetricCard = ({ number, label, suffix = "", prefix = "", index }: Metric & { index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.2);
  const numericValue = parseInt(number);
  const animatedCount = useCountUp(numericValue, 2000 + index * 200, isVisible);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl p-8 text-center hover:bg-card/40 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-6 hover:scale-105 transition-all duration-700 ease-out overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-2 w-2 h-2 bg-primary/40 rounded-full blur-sm animate-ping group-hover:animate-bounce"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-primary/30 rounded-full blur-sm animate-ping delay-700 group-hover:animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/50 rounded-full blur-sm animate-ping delay-1000 group-hover:animate-bounce"></div>
      </div>
      
      {/* Pulsing border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Animated number */}
        <div className="mb-4 relative">
          <div className="font-display text-5xl md:text-6xl font-black text-primary relative group-hover:scale-110 transition-transform duration-500 animate-glow">
            <span className="inline-block">{prefix}</span>
            <span className="inline-block tabular-nums">
              {isVisible ? animatedCount : 0}
            </span>
            <span className="inline-block">{suffix}</span>
          </div>
          
          {/* Shadow effect */}
          <div className="absolute inset-0 font-display text-5xl md:text-6xl font-black text-primary/20 blur-sm group-hover:text-primary/40 transition-colors duration-500">
            <span className="inline-block">{prefix}</span>
            <span className="inline-block tabular-nums">
              {isVisible ? animatedCount : 0}
            </span>
            <span className="inline-block">{suffix}</span>
          </div>
        </div>
        
        {/* Label */}
        <p className="font-body text-sm md:text-base text-white/70 font-medium leading-tight group-hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-200">
          {label}
        </p>
        
        {/* Progress indicator */}
        <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isVisible ? `${(animatedCount / numericValue) * 100}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const KeyMetrics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, 0.1);

  return (
    <section ref={sectionRef} className="bg-black text-white py-[120px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,230,4,0.1)_0%,transparent_50%)] animate-pulse delay-500"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/8 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-primary/6 rounded-full blur-lg animate-float delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-6 hover:text-primary transition-colors duration-500 animate-glow">
            KEY<span className="text-primary animate-pulse">*</span>METRICS
          </h2>
          <p className="font-body text-lg text-white/70 max-w-3xl mx-auto hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-300">
            Quantifying excellence through measurable achievements and impactful results in AI/ML development and project delivery.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metricsData.map((metric, index) => (
            <MetricCard
              key={index}
              {...metric}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-20 animate-fade-in-up animation-delay-1000">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full animate-ping delay-200"></div>
            <div className="w-4 h-4 bg-primary/50 rounded-full animate-ping delay-400"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full animate-ping delay-600"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-ping delay-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
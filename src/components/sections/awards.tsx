"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Trophy, Star, Award, Medal } from 'lucide-react';

interface AwardData {
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const awardsData: AwardData[] = [
  {
    title: "Excellence in AI/ML Development",
    date: "Dec 15, 2024",
    description: "Recognized for outstanding performance in developing innovative machine learning solutions and deep learning models for real-world applications.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Technical Excellence"
  },
  {
    title: "Best Student Project - IIT Jodhpur",
    date: "Nov 20, 2024",
    description: "Awarded for exceptional innovation in AI-driven solutions as part of the BS AIDE program, demonstrating technical prowess and creative problem-solving.",
    icon: <Award className="w-6 h-6" />,
    category: "Academic Achievement"
  },
  {
    title: "Data Science Innovation Award",
    date: "Oct 10, 2024",
    description: "Honored for breakthrough achievements in data analytics and visualization, creating impactful dashboards and predictive models.",
    icon: <Star className="w-6 h-6" />,
    category: "Innovation"
  },
  {
    title: "Full-Stack Development Recognition",
    date: "Sep 5, 2024",
    description: "Acknowledged for exceptional skills in modern web development, creating scalable applications with cutting-edge technologies.",
    icon: <Medal className="w-6 h-6" />,
    category: "Development"
  },
  {
    title: "Research Excellence in Computer Vision",
    date: "Aug 18, 2024",
    description: "Commended for advanced research and implementation in computer vision applications, particularly in face mask detection systems.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Research"
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

const AwardCard = ({ award, index, isVisible }: { award: AwardData; index: number; isVisible: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardVisible = useIntersectionObserver(cardRef, 0.2);

  return (
    <div 
      ref={cardRef}
      className="group relative flex items-start gap-6 animate-fade-in-up"
      style={{ 
        animationDelay: `${index * 200}ms`,
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
    >
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 rounded-full group-hover:bg-primary/30 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
          <div className="text-primary group-hover:text-white transition-colors duration-300 animate-pulse">
            {award.icon}
          </div>
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping group-hover:border-primary/60"></div>
        </div>
        
        {/* Vertical line */}
        {index < awardsData.length - 1 && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-primary/50 to-primary/20 mt-4 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-1000 ease-out"
              style={{ 
                height: cardVisible ? '100%' : '0%',
                transitionDelay: `${index * 100}ms`
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 group-hover:-translate-y-2 transition-transform duration-300">
        {/* Category badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 mb-3 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-primary">{award.category}</span>
        </div>
        
        {/* Award card */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 group-hover:bg-card/50 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {/* Date */}
            <div className="text-sm text-primary font-medium mb-2 group-hover:text-primary animate-pulse">
              {award.date}
            </div>
            
            {/* Title */}
            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 animate-glow">
              {award.title}
            </h3>
            
            {/* Description */}
            <p className="font-body text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
              {award.description}
            </p>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full blur-sm animate-ping group-hover:animate-bounce"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/30 rounded-full blur-sm animate-ping delay-500 group-hover:animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Awards = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, 0.1);

  return (
    <section ref={sectionRef} className="bg-black text-white py-[120px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/8 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/6 rounded-full blur-lg animate-float delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-6 hover:text-primary transition-colors duration-500 animate-glow">
            AWARDS<span className="text-primary animate-pulse">*</span>RECOGNITION
          </h2>
          <p className="font-body text-lg text-white/70 max-w-3xl mx-auto hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-300">
            Celebrating achievements and milestones in AI/ML development, academic excellence, and innovative solution creation.
          </p>
        </div>

        {/* Awards timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {awardsData.map((award, index) => (
              <AwardCard
                key={index}
                award={award}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-20 animate-fade-in-up animation-delay-1000">
          <div className="flex items-center gap-6 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-8 py-4 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
            <Trophy className="w-5 h-5 text-primary animate-bounce" />
            <span className="font-medium text-white">Committed to excellence in every project</span>
            <Star className="w-5 h-5 text-primary animate-bounce delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
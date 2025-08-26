"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useCarousel } from '@/components/ui/carousel';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Research Director", 
    company: "Tech Innovations Lab",
    quote: "Mayank's expertise in AI/ML is exceptional. His face mask detection system achieved remarkable accuracy and was implemented seamlessly. His dedication to innovation is truly inspiring.",
    image: "https://framerusercontent.com/images/0E6LuVBVdiV0dbIF0qhgZtM4JQ.png",
    rating: 5
  },
  {
    name: "Prof. Michael Chen",
    role: "Department Head",
    company: "IIT Jodhpur",
    quote: "As a BS AIDE student, Mayank consistently demonstrates outstanding technical skills and creative problem-solving abilities. His projects showcase real-world impact and innovation.",
    image: "https://framerusercontent.com/images/CgDIctvTDOFyPeSfU5OGrX0dHSk.png",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Data Science Manager",
    company: "Analytics Pro",
    quote: "The customer churn prediction model Mayank developed exceeded our expectations. His approach to data science combines technical excellence with business understanding.",
    image: "https://framerusercontent.com/images/2hKtvu97mgKLaifFbclYx3C64.png",
    rating: 5
  },
  {
    name: "David Kumar",
    role: "CTO",
    company: "StartupTech",
    quote: "Mayank's full-stack development skills are impressive. He delivered a complete IoT solution that transformed our smart city project. Highly recommended for complex technical challenges.",
    image: "https://framerusercontent.com/images/wYHEdCwM2EtawA0fIzu2egzayU.png",
    rating: 5
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

const TestimonialCard = ({ testimonial, isActive, index }: { 
  testimonial: Testimonial; 
  isActive: boolean; 
  index: number;
}) => (
  <div 
    className={`group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 transition-all duration-700 ease-out overflow-hidden ${
      isActive 
        ? 'scale-105 bg-card/50 border-primary/50 shadow-2xl shadow-primary/20' 
        : 'scale-95 hover:scale-100 hover:bg-card/40 hover:border-primary/30'
    }`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Animated background gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
    }`}></div>
    
    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute -top-2 -left-2 w-4 h-4 bg-primary/30 rounded-full blur-sm transition-all duration-500 ${
        isActive ? 'animate-bounce' : 'animate-ping group-hover:animate-bounce'
      }`}></div>
      <div className={`absolute -bottom-2 -right-2 w-3 h-3 bg-primary/40 rounded-full blur-sm transition-all duration-500 delay-300 ${
        isActive ? 'animate-bounce' : 'animate-ping group-hover:animate-bounce'
      }`}></div>
    </div>
    
    <div className="relative z-10">
      {/* Quote icon */}
      <div className={`mb-6 transition-all duration-500 ${
        isActive ? 'text-primary scale-110' : 'text-primary/60 group-hover:text-primary group-hover:scale-105'
      }`}>
        <Quote className="w-8 h-8 animate-pulse" />
      </div>
      
      {/* Quote text */}
      <blockquote className={`font-body text-base md:text-lg leading-relaxed mb-8 transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-white/80 group-hover:text-white/95'
      }`}>
        "{testimonial.quote}"
      </blockquote>
      
      {/* Rating stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <div 
            key={i} 
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              isActive ? 'bg-primary animate-pulse' : 'bg-primary/60 group-hover:bg-primary'
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          ></div>
        ))}
      </div>
      
      {/* Author info */}
      <div className="flex items-center gap-4">
        <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-500 ${
          isActive ? 'border-primary shadow-lg shadow-primary/30' : 'border-primary/50 group-hover:border-primary'
        }`}>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Profile glow effect */}
          <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${
            isActive ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'
          }`}></div>
        </div>
        
        <div>
          <h4 className={`font-display text-lg font-bold transition-colors duration-300 ${
            isActive ? 'text-primary' : 'text-white group-hover:text-primary'
          }`}>
            {testimonial.name}
          </h4>
          <p className={`font-body text-sm transition-colors duration-300 ${
            isActive ? 'text-white/90' : 'text-white/70 group-hover:text-white/85'
          }`}>
            {testimonial.role}
          </p>
          <p className={`font-body text-sm transition-colors duration-300 ${
            isActive ? 'text-primary/80' : 'text-primary/60 group-hover:text-primary/70'
          }`}>
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, 0.1);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      ref={sectionRef} 
      className="bg-black text-white py-[120px] relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,230,4,0.05)_0%,transparent_70%)] animate-pulse delay-500"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-primary/8 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/6 rounded-full blur-lg animate-float delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-6 hover:text-primary transition-colors duration-500 animate-glow">
            CLIENT<span className="text-primary animate-pulse">*</span>TESTIMONIALS
          </h2>
          <p className="font-body text-lg text-white/70 max-w-3xl mx-auto hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-300">
            Hear what collaborators, professors, and industry professionals say about working with me on AI/ML projects and innovative solutions.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 animate-pulse"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 animate-pulse delay-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
            {testimonialsData.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
              const isNext = index === (currentIndex + 1) % testimonialsData.length;
              const isVisible = isActive || isPrev || isNext;

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
                  } ${
                    isActive ? 'lg:col-span-1' : ''
                  }`}
                  style={{ 
                    order: isActive ? 2 : isPrev ? 1 : isNext ? 3 : 4
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={isActive}
                    index={index}
                  />
                </div>
              );
            })}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-3 mt-12 animate-fade-in-up animation-delay-500">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                    : 'bg-primary/30 hover:bg-primary/60 hover:scale-110'
                }`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-20 animate-fade-in-up animation-delay-1000">
          <div className="flex items-center gap-4 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-8 py-4 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
            <Quote className="w-5 h-5 text-primary animate-bounce" />
            <span className="font-medium text-white">Trusted by professionals and academics</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
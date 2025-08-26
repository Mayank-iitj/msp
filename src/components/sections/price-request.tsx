"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

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

const ContactOption = ({ icon, title, description, action, index }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:bg-card/40 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-4 hover:scale-105 transition-all duration-500 ease-out overflow-hidden animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-ping group-hover:animate-bounce"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary/40 rounded-full blur-sm animate-ping delay-500 group-hover:animate-bounce"></div>
      </div>
      
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full mb-4 group-hover:bg-primary/20 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500 ${
          isHovered ? 'animate-bounce' : 'animate-pulse'
        }`}>
          <div className="text-primary transition-colors duration-300">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="font-body text-sm text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
        
        {/* Action */}
        <div className="text-primary text-sm font-medium group-hover:scale-105 transition-transform duration-300">
          {action}
        </div>
        
        {/* Arrow indicator */}
        <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ text, index }: { text: string; index: number }) => (
  <div 
    className="flex items-center gap-3 animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="w-6 h-6 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center animate-pulse">
      <CheckCircle className="w-4 h-4 text-primary" />
    </div>
    <span className="font-body text-white/80 hover:text-white transition-colors duration-300">
      {text}
    </span>
  </div>
);

const PriceRequestSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, 0.1);
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate active contact option
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Consultation",
      description: "Get detailed project discussion via email",
      action: "ms1591934@gmail.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Direct Message",
      description: "Quick response for urgent inquiries",
      action: "Send Message"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Schedule Call",
      description: "Book a time slot for detailed discussion",
      action: "Book Meeting"
    }
  ];

  const features = [
    "Free initial consultation",
    "Custom solution design",
    "Transparent pricing",
    "24/7 project support",
    "Scalable architecture",
    "Performance guarantee"
  ];

  return (
    <section 
      ref={sectionRef} 
      className="bg-black text-white py-[120px] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,230,4,0.1)_0%,transparent_50%)] animate-pulse delay-500"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/8 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/6 rounded-full blur-lg animate-float delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-primary animate-spin-slow" />
              <span className="font-medium text-primary">Ready to Start Your Project?</span>
              <Sparkles className="w-5 h-5 text-primary animate-spin-slow delay-500" />
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-6 hover:text-primary transition-colors duration-500 animate-glow">
              GET A<span className="text-primary animate-pulse">*</span>QUOTE
            </h2>
            
            <p className="font-body text-xl text-white/70 max-w-4xl mx-auto leading-relaxed hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-300">
              Transform your ideas into reality with cutting-edge AI/ML solutions and full-stack development. 
              Get a personalized quote tailored to your specific requirements and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Contact options */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h3 className="font-display text-3xl font-bold mb-6 text-white hover:text-primary transition-colors duration-300">
                  Let's Discuss Your Project
                </h3>
                <p className="font-body text-white/70 mb-8 leading-relaxed">
                  Whether you need AI/ML solutions, full-stack development, or data science expertise, 
                  I'm here to help bring your vision to life with innovative technology solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactOptions.map((option, index) => (
                  <div key={index} className={`transition-all duration-500 ${
                    activeIndex === index ? 'scale-105' : 'scale-100'
                  }`}>
                    <ContactOption {...option} index={index} />
                  </div>
                ))}
              </div>

              {/* Main CTA Button */}
              <div className="text-center pt-8">
                <a
                  href="mailto:ms1591934@gmail.com"
                  className="group inline-flex items-center gap-4 bg-white text-black text-lg font-bold rounded-full px-10 py-5 hover:bg-primary hover:text-black hover:shadow-2xl hover:shadow-primary/30 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-subtle"
                >
                  <Mail className="w-6 h-6 group-hover:animate-bounce" />
                  Start Your Project Today
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Right side - Features and benefits */}
            <div className="space-y-8 animate-fade-in-right">
              <div className="bg-card/20 backdrop-blur-sm border border-border/30 rounded-2xl p-8 hover:bg-card/30 hover:border-primary/30 transition-all duration-500">
                <h3 className="font-display text-2xl font-bold mb-6 text-primary animate-glow">
                  What You Get
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <FeatureItem key={index} text={feature} index={index} />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "24h", label: "Response Time" },
                  { number: "100%", label: "Satisfaction" },
                  { number: "15+", label: "Projects Done" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-xl p-4 hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="font-display text-2xl font-black text-primary animate-glow">
                      {stat.number}
                    </div>
                    <div className="font-body text-sm text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-6 animate-fade-in-up animation-delay-500">
                <h4 className="font-display text-lg font-bold text-white mb-4">Direct Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <span className="font-mono text-sm">ms1591934@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <span className="font-mono text-sm">b24bs1555@iitj.ac.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceRequestSection;
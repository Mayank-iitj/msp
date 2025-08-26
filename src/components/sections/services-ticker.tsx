"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Zap, Cpu, Brain, Code2 } from 'lucide-react';

const services = [
  { name: "AI/ML Projects", icon: <Brain className="w-4 h-4" /> },
  { name: "Data Science", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Web Development", icon: <Code2 className="w-4 h-4" /> },
  { name: "IoT Solutions", icon: <Cpu className="w-4 h-4" /> },
  { name: "Deep Learning", icon: <Zap className="w-4 h-4" /> },
  { name: "Computer Vision", icon: <Star className="w-4 h-4" /> },
  { name: "NLP", icon: <Brain className="w-4 h-4" /> },
  { name: "Mobile Apps", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Analytics Dashboards", icon: <Code2 className="w-4 h-4" /> },
  { name: "Business Intelligence", icon: <Cpu className="w-4 h-4" /> },
  { name: "API Development", icon: <Zap className="w-4 h-4" /> },
  { name: "Cloud Solutions", icon: <Star className="w-4 h-4" /> }
];

const PlusIcon = ({ index }: { index: number }) => (
  <svg 
    width="15" 
    height="15" 
    viewBox="0 0 15 15" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="flex-shrink-0 animate-spin-slow group-hover:animate-pulse transition-all duration-300"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <path d="M7.5 0V15M0 7.5H15" stroke="#9EE604" strokeWidth="1.5" />
  </svg>
);

const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group flex items-center mx-6 hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Animated background glow */}
      <div className={`absolute inset-0 bg-primary/10 rounded-full blur-lg transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
      }`}></div>
      
      {/* Icon with rotation effect */}
      <div className={`relative z-10 p-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full mr-3 group-hover:bg-primary/20 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 ${
        isHovered ? 'animate-bounce' : 'animate-pulse'
      }`}>
        <div className="text-primary transition-all duration-300 group-hover:scale-110">
          {service.icon}
        </div>
      </div>
      
      {/* Plus icon */}
      <PlusIcon index={index} />
      
      {/* Service name with typewriter effect */}
      <p className={`ml-4 font-body text-lg font-medium whitespace-nowrap transition-all duration-300 ${
        isHovered 
          ? 'text-primary scale-105 font-semibold' 
          : 'text-white group-hover:text-primary'
      }`}>
        {service.name}
      </p>
      
      {/* Trailing effect */}
      <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full transition-all duration-300 ${
        isHovered ? 'opacity-100 animate-ping' : 'opacity-0'
      }`}></div>
    </div>
  );
};

const Marquee = ({ speed = 25, direction = "left" }: { speed?: number; direction?: "left" | "right" }) => {
  return (
    <div className="relative flex overflow-x-hidden text-white">
      {/* First marquee */}
      <div 
        className="flex animate-marquee whitespace-nowrap"
        style={{ 
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal"
        }}
      >
        {services.map((service, index) => (
          <ServiceItem key={`marquee1-${index}`} service={service} index={index} />
        ))}
      </div>
      
      {/* Second marquee for seamless loop */}
      <div 
        className="absolute top-0 flex animate-marquee2 whitespace-nowrap"
        style={{ 
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal"
        }}
      >
        {services.map((service, index) => (
          <ServiceItem key={`marquee2-${index}`} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default function ServicesTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="bg-black border-y border-primary/20 py-6 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse delay-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-2 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute left-1/4 bottom-2 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/3 top-2 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute right-10 bottom-2 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Double marquee for better visual effect */}
      <div className={`relative z-10 transition-all duration-500 ${isPaused ? 'opacity-80' : 'opacity-100'}`}>
        <Marquee speed={isPaused ? 50 : 25} direction="left" />
      </div>
      
      <div className={`relative z-10 mt-4 transition-all duration-500 ${isPaused ? 'opacity-80' : 'opacity-100'}`}>
        <Marquee speed={isPaused ? 60 : 30} direction="right" />
      </div>
      
      {/* Status indicator */}
      <div className="absolute top-2 right-4 flex items-center gap-2 text-xs text-primary/60">
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
          isPaused ? 'bg-yellow-400 animate-pulse' : 'bg-primary animate-ping'
        }`}></div>
        <span className="font-mono">
          {isPaused ? 'PAUSED' : 'LIVE'}
        </span>
      </div>
      
      {/* Performance metrics */}
      <div className="absolute bottom-2 left-4 flex items-center gap-4 text-xs text-primary/40 font-mono">
        <span>SERVICES: {services.length}</span>
        <span>UPTIME: {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</span>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          <span>STATUS: OPTIMAL</span>
        </div>
      </div>
    </section>
  );
}
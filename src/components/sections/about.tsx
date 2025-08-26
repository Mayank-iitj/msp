"use client";

import React from 'react';

const aboutCards = [
  {
    number: "01",
    title: "Advanced AI/ML Solutions",
    description: "Developing cutting-edge machine learning models and AI systems using deep learning, computer vision, and natural language processing to solve real-world problems."
  },
  {
    number: "02", 
    title: "Full-Stack Development Excellence",
    description: "Creating robust web applications and mobile solutions with modern frameworks, ensuring seamless user experiences and scalable architectures."
  },
  {
    number: "03",
    title: "Data Science & Analytics",
    description: "Transforming raw data into actionable insights through advanced statistical analysis, predictive modeling, and interactive dashboard development."
  },
  {
    number: "04",
    title: "Innovation Through Research",
    description: "Constantly exploring emerging technologies and research methodologies as a BS AIDE student at IIT Jodhpur, pushing boundaries in AI applications."
  }
];

const AboutCard = ({ number, title, description, index }: {
  number: string;
  title: string;
  description: string;
  index: number;
}) => (
  <div 
    className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:bg-card/60 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 ease-out overflow-hidden animate-fade-in-up"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/20 rounded-full blur-sm animate-ping group-hover:animate-bounce"></div>
      <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary/30 rounded-full blur-sm animate-ping delay-500 group-hover:animate-bounce"></div>
    </div>
    
    <div className="relative z-10">
      {/* Animated number */}
      <div className="mb-6 relative">
        <span className="font-display text-6xl font-black text-primary/20 absolute -top-2 -left-2 group-hover:text-primary/30 transition-colors duration-300 animate-pulse">
          {number}
        </span>
        <span className="font-display text-5xl font-bold text-primary relative z-10 group-hover:scale-110 transition-transform duration-300 animate-glow">
          {number}
        </span>
      </div>
      
      {/* Title with hover effect */}
      <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 animate-fade-in-up animation-delay-100">
        {title}
      </h3>
      
      {/* Description with stagger animation */}
      <p className="font-body text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 animate-fade-in-up animation-delay-200">
        {description}
      </p>
      
      {/* Hover indicator */}
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-[120px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/8 rounded-full blur-lg animate-float delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title with stagger animation */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-6 hover:text-primary transition-colors duration-500 animate-glow">
            ABOUT<span className="text-primary animate-pulse">*</span>ME
          </h2>
          <p className="font-body text-lg text-white/70 max-w-3xl mx-auto hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-300">
            Hello! I am Mayank Sharma, a BS AIDE student at IIT Jodhpur, passionate about AI/ML technologies and their real-world applications. 
            I specialize in creating innovative solutions that bridge the gap between cutting-edge research and practical implementation.
          </p>
        </div>

        {/* Cards grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA with animation */}
        <div className="text-center mt-20 animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center gap-4 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-8 py-4 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
            <span className="font-medium text-white">Exploring the future of AI, one project at a time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
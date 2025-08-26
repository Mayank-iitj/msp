"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  demoLink?: string;
}

const projectsData: Project[] = [
  {
    title: "Face Mask Detection with Deep Learning",
    description: "Computer vision system using MobileNetV2 to detect face masks in images and video. High accuracy in classifying \"With Mask\" and \"Without Mask\".",
    demoLink: "https://msfacify.netlify.app/"
  },
  {
    title: "Customer Churn Prediction", 
    description: "ML pipeline for predicting customer churn in telecom. Used ensemble models (Random Forest, XGBoost), 85%+ accuracy, actionable business insights.",
    demoLink: "https://xlhyimcjxn0d.manus.space/"
  },
  {
    title: "Music Genre Classification",
    description: "A web app that uses deep learning (CNNs, LSTMs) to classify music genres from audio files using features like MFCCs.",
    demoLink: "https://genre-classifyer.netlify.app/"
  },
  {
    title: "E-Commerce Product Recommendation System",
    description: "A hybrid recommendation engine suggesting products based on user history and item features. Uses collaborative and content-based filtering.",
    demoLink: "https://ss-analysis-ms.netlify.app/"
  },
  {
    title: "Sentiment Analysis on Social Media",
    description: "Real-time sentiment classification of tweets with BERT. Visualizes sentiment trends for actionable marketing insights.",
    demoLink: "https://msfacify.netlify.app/"
  },
  {
    title: "Spam Mail Analyzer",
    description: "Filters emails by analyzing sender, subject, and message to keep the inbox free of spam and phishing.",
    demoLink: "https://app--cosmic-guard-30c712d6.base44.app/"
  },
  {
    title: "SmartCity IoT",
    description: "Integrates IoT data for smart city management (traffic, waste, public transport), providing real-time analytics.",
    demoLink: "https://splendid-pika-249aa2.netlify.app/"
  },
  {
    title: "Life Goal Unleashed (Life Pattern Analyzer)",
    description: "Analyzes user routines to give personalized productivity and growth insights.",
    demoLink: "https://lifexly.netlify.app/"
  },
  {
    title: "SocialStarX",
    description: "Social media automation: schedule posts, manage accounts, and analyze growth.",
    demoLink: "https://dynamic-flan-4984b0.netlify.app/#l"
  },
  {
    title: "ReactNative",
    description: "Cross-platform mobile app framework using JS and React with native-like experience.",
    demoLink: "https://reactnativeproject.lovable.app/"
  },
  {
    title: "X Analytics",
    description: "Business intelligence dashboard for market trend insights and visual analytics.",
    demoLink: "https://market-analytics.netlify.app/"
  },
  {
    title: "CredWise",
    description: "Predicts credit card eligibility and provides AI-based recommendations.",
    demoLink: "https://cardx.lovable.app/"
  },
  {
    title: "FintechAnalytics",
    description: "Data visualization and summary tool for fintech analytics and pattern discovery.",
    demoLink: "https://fintechanalytics.vercel.app/"
  },
  {
    title: "SalesAnalytics",
    description: "Sales data analytics dashboard for tracking and optimizing sales strategies.",
    demoLink: "https://stately-starship-297297.netlify.app/"
  },
  {
    title: "msGPT",
    description: "A conversational AI assistant for content generation and question answering.",
    demoLink: "https://gptbymayank.lovable.app/"
  }
];

const ProjectCard = ({ title, description, demoLink }: Project) => (
  <div className="group relative flex flex-col gap-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out overflow-hidden">
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Floating particles effect */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-xl animate-pulse group-hover:animate-bounce"></div>
      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/30 rounded-full blur-lg animate-pulse delay-300 group-hover:animate-bounce"></div>
    </div>
    
    <div className="relative z-10">
      <h3 className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 animate-fade-in-up">
        {title}
      </h3>
      <p className="font-body text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 animate-fade-in-up animation-delay-100">
        {description}
      </p>
      <div className="mt-auto pt-4">
        {demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 group-hover:animate-pulse"
          >
            Demo Link <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        ) : (
          <span className="inline-block text-white/60 px-6 py-3 rounded-full font-medium text-sm border border-white/20 hover:border-white/40 transition-colors duration-300">
            No live demo link provided
          </span>
        )}
      </div>
    </div>
  </div>
);

const Marquee = () => {
    const marqueeItems = Array(4).fill(null);
    return (
      <div className="relative flex overflow-hidden -_mx-15 py-4">
        <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around">
          {marqueeItems.map((_, i) => (
            <h2 key={`m1-${i}`} className="shrink-0 px-6 font-display text-5xl font-bold uppercase text-white whitespace-nowrap hover:text-primary transition-colors duration-300">
              MY<span className="text-primary animate-pulse">*</span>PROJECTS
            </h2>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 min-w-full shrink-0 items-center justify-around py-4">
          {marqueeItems.map((_, i) => (
            <h2 key={`m2-${i}`} className="shrink-0 px-6 font-display text-5xl font-bold uppercase text-white whitespace-nowrap hover:text-primary transition-colors duration-300">
              MY<span className="text-primary animate-pulse delay-200">*</span>PROJECTS
            </h2>
          ))}
        </div>
      </div>
    );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-[120px] flex flex-col gap-[60px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      <div className="relative z-10">
        <Marquee />

        <div className="mx-auto max-w-[1200px] px-4 md:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {projectsData.map((project, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 pt-15 px-4 animate-fade-in-up animation-delay-500">
          <h2 className="font-display text-5xl text-center font-bold uppercase max-w-4xl hover:text-primary transition-colors duration-500 animate-pulse">
            WANT TO EXPLORE MORE OF MY AI & ML PROJECTS?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="mailto:ms1591934@gmail.com" 
              className="inline-block bg-white text-black text-lg font-medium rounded-full px-8 py-4 hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-subtle"
            >
              Contact Me
            </a>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/mayyanks?igsh=MWxobDdrcDJrc2IxYg%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary hover:scale-110 transition-all duration-300"
              >
                Instagram
              </a>
              <a 
                href="http://www.linkedin.com/in/mayankiitj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary hover:scale-110 transition-all duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://x.com/mayyankks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary hover:scale-110 transition-all duration-300"
              >
                X/Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
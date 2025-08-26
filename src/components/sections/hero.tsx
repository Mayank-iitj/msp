"use client";

import React from 'react';
import Link from 'next/link';

const services = [
  "AI/ML Projects", "Data Science", "Web Development", "IoT Solutions", "Deep Learning",
  "Computer Vision", "NLP", "Mobile Apps", "Analytics Dashboards", "Business Intelligence"
];

const PlusIcon = () => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 animate-spin-slow">
        <path d="M7.5 0V15M0 7.5H15" stroke="#9EE604" />
    </svg>
);

const Marquee = () => {
    return (
        <div className="relative flex overflow-x-hidden text-white">
            <div className="flex animate-marquee whitespace-nowrap">
                {services.map((service, index) => (
                    <div key={`marquee1-${index}`} className="flex items-center mx-4 group hover:scale-105 transition-transform duration-300">
                        <PlusIcon />
                        <p className="ml-4 font-body text-lg font-medium group-hover:text-primary transition-colors duration-300">{service}</p>
                    </div>
                ))}
            </div>
            <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                 {services.map((service, index) => (
                    <div key={`marquee2-${index}`} className="flex items-center mx-4 group hover:scale-105 transition-transform duration-300">
                        <PlusIcon />
                        <p className="ml-4 font-body text-lg font-medium group-hover:text-primary transition-colors duration-300">{service}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ThreeDMSText = () => {
    return (
        <div className="relative group w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
            {/* 3D MS Text Container */}
            <div className="relative [transform-style:preserve-3d] animate-float">
                {/* Main MS Text with 3D effect */}
                <div className="relative text-8xl sm:text-9xl lg:text-[10rem] font-display font-black text-white select-none">
                    {/* Shadow layers for 3D depth */}
                    <div className="absolute inset-0 text-primary/30 [transform:translate3d(8px,8px,0)] animate-pulse">MS</div>
                    <div className="absolute inset-0 text-primary/50 [transform:translate3d(6px,6px,0)] animate-pulse delay-100">MS</div>
                    <div className="absolute inset-0 text-primary/70 [transform:translate3d(4px,4px,0)] animate-pulse delay-200">MS</div>
                    <div className="absolute inset-0 text-primary/90 [transform:translate3d(2px,2px,0)] animate-pulse delay-300">MS</div>
                    
                    {/* Main text */}
                    <div className="relative z-10 text-white group-hover:text-primary transition-colors duration-500 animate-glow">
                        MS
                    </div>
                    
                    {/* Highlight effect */}
                    <div className="absolute inset-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                        MS
                    </div>
                </div>
                
                {/* Rotating border */}
                <div className="absolute inset-[-20px] border-2 border-primary rounded-lg animate-rotate-border opacity-60"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-ping delay-500"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary rounded-full animate-ping delay-1000"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary rounded-full animate-ping delay-1500"></div>
                </div>
            </div>

            <Link href="#projects" className="btn-primary absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2 transform whitespace-nowrap px-9 py-[18px] text-lg font-medium transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/30 active:scale-95 animate-bounce-subtle">
                My Projects
            </Link>
        </div>
    );
};

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black font-body text-white overflow-hidden py-24 sm:py-32">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,230,4,0.1)_0%,transparent_50%)] animate-pulse delay-500"></div>
            
            {/* Floating background elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float delay-1000"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float delay-2000"></div>
            <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float delay-1500"></div>

            <div className="hidden lg:block absolute top-[60px] w-full z-10">
                <Marquee />
            </div>

            <div className="container mx-auto px-6 flex flex-grow items-center justify-center relative z-10">
                 <div className="grid w-full grid-cols-1 items-center gap-y-8 text-center lg:grid-cols-[1fr_auto_1fr] lg:gap-x-6 lg:text-left">
                    
                    <div className="flex flex-col items-center lg:items-end animate-fade-in-left">
                        <h1 className="font-display text-[96px] font-bold leading-none text-white sm:text-[140px] md:text-[180px] lg:text-[200px] lg:text-right hover:text-primary transition-colors duration-500 animate-glow">
                            FUSION<span className="text-primary animate-pulse">*</span>
                        </h1>
                        <p className="mt-6 max-w-sm font-body text-base text-text-secondary md:text-lg lg:text-right hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-500">
                            AI/ML Engineer and Full-Stack Developer specializing in deep learning, data science, web development, and IoT solutions. Creating innovative tech solutions with cutting-edge AI tools.
                        </p>
                    </div>

                    <div className="order-first my-8 flex w-full justify-center lg:order-none lg:my-0 animate-scale-in animation-delay-300">
                       <ThreeDMSText />
                    </div>

                    <div className="flex flex-col items-center lg:items-start animate-fade-in-right">
                        <h1 className="font-display text-[96px] font-bold leading-none text-white sm:text-[140px] md:text-[180px] lg:text-[200px] lg:text-left hover:text-primary transition-colors duration-500 animate-glow">
                            ADZ
                        </h1>
                        <p className="mt-6 font-body text-sm text-text-tertiary lg:text-left hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-700">
                            *STUDENT — BS in AIDE
                            <br />
                            IIT JODHPUR, INDIA
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
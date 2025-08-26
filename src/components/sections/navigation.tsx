"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'services', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="font-display text-2xl font-bold text-white group-hover:text-primary transition-all duration-300 animate-glow">
              FUSION<span className="text-primary animate-pulse">*</span>ADZ
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative font-medium text-sm tracking-wide transition-all duration-300 hover:text-primary group animate-fade-in-up ${
                  activeSection === item.id ? 'text-primary' : 'text-white/80'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="mailto:ms1591934@gmail.com"
            className="btn-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 animate-bounce-subtle"
          >
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative w-6 h-6 flex flex-col justify-between items-center group">
            <span className="w-full h-0.5 bg-white group-hover:bg-primary transition-colors duration-300 transform group-hover:rotate-45 group-hover:translate-y-2.5"></span>
            <span className="w-full h-0.5 bg-white group-hover:bg-primary transition-all duration-300 group-hover:opacity-0"></span>
            <span className="w-full h-0.5 bg-white group-hover:bg-primary transition-colors duration-300 transform group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
          </button>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse"></div>
    </nav>
  );
};

export default Navigation;
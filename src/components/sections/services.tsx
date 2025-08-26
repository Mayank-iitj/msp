"use client";

import React, { useRef, useState, useEffect } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  BarChart3, 
  Eye, 
  MessageSquare, 
  Cpu, 
  Globe, 
  Zap, 
  Target, 
  Lightbulb 
} from 'lucide-react';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
}

const servicesData: Service[] = [
  {
    number: "01",
    title: "Machine Learning & AI Development",
    description: "Creating intelligent systems using deep learning, neural networks, and advanced algorithms to solve complex real-world problems with high accuracy and efficiency.",
    icon: <Brain className="w-8 h-8" />,
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
  },
  {
    number: "02",
    title: "Computer Vision Solutions",
    description: "Developing sophisticated image recognition, object detection, and visual analysis systems for applications ranging from security to healthcare.",
    icon: <Eye className="w-8 h-8" />,
    technologies: ["OpenCV", "YOLO", "MobileNet", "ResNet"]
  },
  {
    number: "03",
    title: "Natural Language Processing",
    description: "Building intelligent text processing systems, chatbots, and language models for sentiment analysis, content generation, and automated communication.",
    icon: <MessageSquare className="w-8 h-8" />,
    technologies: ["BERT", "GPT", "spaCy", "NLTK"]
  },
  {
    number: "04",
    title: "Full-Stack Web Development",
    description: "Creating modern, responsive web applications with cutting-edge frameworks, ensuring optimal performance, scalability, and user experience.",
    icon: <Code className="w-8 h-8" />,
    technologies: ["React", "Next.js", "Node.js", "TypeScript"]
  },
  {
    number: "05",
    title: "Data Science & Analytics",
    description: "Transforming raw data into actionable insights through statistical analysis, predictive modeling, and interactive visualization dashboards.",
    icon: <BarChart3 className="w-8 h-8" />,
    technologies: ["Python", "R", "Pandas", "Plotly"]
  },
  {
    number: "06",
    title: "Database Architecture & Management",
    description: "Designing efficient database systems, optimizing queries, and implementing robust data storage solutions for scalable applications.",
    icon: <Database className="w-8 h-8" />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
  },
  {
    number: "07",
    title: "Mobile App Development",
    description: "Building cross-platform mobile applications with native performance, intuitive interfaces, and seamless integration with backend services.",
    icon: <Smartphone className="w-8 h-8" />,
    technologies: ["React Native", "Flutter", "Expo", "Firebase"]
  },
  {
    number: "08",
    title: "IoT & Smart Systems",
    description: "Developing Internet of Things solutions for smart cities, home automation, and industrial applications with real-time data processing.",
    icon: <Cpu className="w-8 h-8" />,
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB"]
  },
  {
    number: "09",
    title: "API Development & Integration",
    description: "Creating robust RESTful APIs and seamless third-party integrations to connect systems and enable smooth data flow between applications.",
    icon: <Globe className="w-8 h-8" />,
    technologies: ["Express.js", "FastAPI", "GraphQL", "REST"]
  },
  {
    number: "10",
    title: "Performance Optimization",
    description: "Enhancing application performance through code optimization, caching strategies, and efficient resource management for maximum speed.",
    icon: <Zap className="w-8 h-8" />,
    technologies: ["Redis", "CDN", "Webpack", "Lighthouse"]
  },
  {
    number: "11",
    title: "Business Intelligence Solutions",
    description: "Developing comprehensive BI dashboards and reporting systems to help organizations make data-driven decisions and track key metrics.",
    icon: <Target className="w-8 h-8" />,
    technologies: ["Power BI", "Tableau", "D3.js", "Chart.js"]
  },
  {
    number: "12",
    title: "Research & Innovation",
    description: "Conducting cutting-edge research in AI/ML domains, exploring new technologies, and developing innovative solutions for emerging challenges.",
    icon: <Lightbulb className="w-8 h-8" />,
    technologies: ["Jupyter", "Paper Writing", "Experimentation", "Prototyping"]
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

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl p-8 hover:bg-card/40 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 ease-out overflow-hidden animate-fade-in-up"
      style={{ 
        animationDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/20 rounded-full blur-sm animate-ping group-hover:animate-bounce"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary/30 rounded-full blur-sm animate-ping delay-500 group-hover:animate-bounce"></div>
        <div className="absolute top-1/2 right-4 w-2 h-2 bg-primary/40 rounded-full blur-sm animate-ping delay-1000 group-hover:animate-bounce"></div>
      </div>
      
      {/* Pulsing border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Service number and icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <span className="font-display text-4xl font-black text-primary/20 absolute -top-1 -left-1 group-hover:text-primary/30 transition-colors duration-300">
              {service.number}
            </span>
            <span className="font-display text-3xl font-bold text-primary relative z-10 group-hover:scale-110 transition-transform duration-300 animate-glow">
              {service.number}
            </span>
          </div>
          
          <div className={`p-3 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full group-hover:bg-primary/20 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500 ${
            isHovered ? 'animate-bounce' : 'animate-pulse'
          }`}>
            <div className="text-primary transition-colors duration-300">
              {service.icon}
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 animate-fade-in-up animation-delay-100">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="font-body text-sm text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300 animate-fade-in-up animation-delay-200">
          {service.description}
        </p>
        
        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="font-medium text-primary text-sm">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="inline-flex items-center gap-1 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index * 100) + (techIndex * 50)}ms` }}
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, 0.1);

  return (
    <section id="services" ref={sectionRef} className="bg-black text-white py-[120px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,230,4,0.08)_0%,transparent_60%)] animate-pulse delay-500"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/8 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/6 rounded-full blur-lg animate-float delay-500"></div>
      <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-primary/10 rounded-full blur-md animate-float delay-1500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-6 hover:text-primary transition-colors duration-500 animate-glow">
            SERVICES<span className="text-primary animate-pulse">*</span>EXPERTISE
          </h2>
          <p className="font-body text-lg text-white/70 max-w-4xl mx-auto hover:text-white transition-colors duration-300 animate-fade-in-up animation-delay-300">
            Comprehensive AI/ML and full-stack development services, from intelligent system design to scalable application deployment, 
            backed by cutting-edge research and practical implementation experience.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up animation-delay-1000">
          <div className="inline-flex flex-col items-center gap-6 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl px-12 py-8 hover:bg-primary/20 hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
              <span className="font-display text-xl font-bold text-white">Ready to build something amazing?</span>
              <div className="w-4 h-4 bg-primary rounded-full animate-ping delay-500"></div>
            </div>
            
            <a 
              href="mailto:ms1591934@gmail.com" 
              className="bg-white text-black text-lg font-medium rounded-full px-8 py-4 hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-subtle"
            >
              Let's Collaborate
            </a>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>✓ Free Consultation</span>
              <span>✓ Custom Solutions</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
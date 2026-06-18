import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollAnimations';
import { motion } from 'framer-motion';

// Use the 4 videos saved previously
import video1 from '../assets/0_Woman_Treadmill_1920x1080.mp4';
import video2 from '../assets/2_Gym_Fitness_1920x1080.mp4';
import video3 from '../assets/0_Gym_Fitness_1920x1080.mp4';
import video4 from '../assets/Fit-Curitiba-Itajai-1.mp4';

const RealProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    { id: 1, video: video1 },
    { id: 2, video: video2 },
    { id: 3, video: video3 },
    { id: 4, video: video4 },
  ];

  // Auto-loop effect every 4 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const positions = {
    0: { x: "-165%", scale: 0.8, opacity: 0.4, zIndex: 10 },
    1: { x: "-55%", scale: 1, opacity: 1, zIndex: 20 },
    2: { x: "55%", scale: 1, opacity: 1, zIndex: 20 },
    3: { x: "165%", scale: 0.8, opacity: 0.4, zIndex: 10 },
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-20 md:py-28 overflow-hidden relative border-t border-white/5">
      <div className="container-default">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20 px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase mb-4">
            PROJETOS REAIS. <span className="font-bold">RESULTADOS REAIS</span>
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base max-w-[600px] mx-auto">
            Alguns dos espaços fitness que já evoluíram conosco em todo o Brasil.
          </p>
        </ScrollReveal>

        {/* Carousel / Layout Area */}
        <div className="relative w-full mb-16 px-4 md:px-0">
          
          {/* Desktop Layout (Absolute Positioning for smooth glide) */}
          <div 
             className="hidden md:flex relative justify-center items-center w-full h-[450px] max-w-[1000px] mx-auto"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
          >
            {projects.map((project, i) => {
               // Calculate relative position based on activeIndex
               const p = (i - activeIndex + 4) % 4;
               const isSide = p === 0 || p === 3;
               
               return (
                 <motion.div
                   key={project.id}
                   initial={false}
                   animate={positions[p]}
                   transition={{ duration: 0.9, ease: [0.25, 1, 0.35, 1] }}
                   className="absolute w-[280px] h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
                 >
                   <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>

                    {/* Dark overlay for side items to make them blend in beautifully */}
                    <motion.div 
                      className="absolute inset-0 bg-black"
                      initial={false}
                      animate={{ opacity: isSide ? 0.6 : 0 }}
                      transition={{ duration: 0.9 }}
                    />
                    
                    {/* Bottom gradient for text readability (if you add text later) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                 </motion.div>
               );
            })}
          </div>

          {/* Mobile Layout (Horizontal Scroll) */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {projects.map((project, idx) => (
              <div key={project.id} className="flex-shrink-0 w-[80vw] h-[400px] rounded-2xl overflow-hidden relative snap-center">
                 <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <ScrollReveal className="text-center" delay={0.2}>
          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300 py-3 px-8 rounded-full font-display text-sm uppercase tracking-widest inline-flex items-center gap-2 group">
            Quero um projeto como esse
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RealProjects;

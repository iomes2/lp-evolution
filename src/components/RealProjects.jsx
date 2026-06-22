import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollAnimations';
import { motion } from 'framer-motion';

// Use the 5 mp4s requested
import video1 from '../assets/GIF BRAVA ICON_.mp4';
import video2 from '../assets/krcom_.mp4';
import video3 from '../assets/Maison la fayetle.mp4';
import video4 from '../assets/Restretto_.mp4';
import video5 from '../assets/STV NAUTIC_.mp4';

const RealProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { id: 1, media: video1 },
    { id: 2, media: video2 },
    { id: 3, media: video3 },
    { id: 4, media: video4 },
    { id: 5, media: video5 },
  ];

  // Auto-loop effect every 5.5 seconds (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const positions = {
    0: { x: "-275%", scale: 0.8, opacity: 0, zIndex: 5 },
    1: { x: "-165%", scale: 0.8, opacity: 0.4, zIndex: 10 },
    2: { x: "-55%", scale: 1, opacity: 1, zIndex: 20 },
    3: { x: "55%", scale: 1, opacity: 1, zIndex: 20 },
    4: { x: "165%", scale: 0.8, opacity: 0.4, zIndex: 10 },
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
          >
            {projects.map((project, i) => {
               // Calculate relative position based on activeIndex
               const p = (i - activeIndex + 5) % 5;
               const isSide = p === 1 || p === 4;
               
               return (
                 <motion.div
                   key={project.id}
                   initial={false}
                   animate={positions[p]}
                   transition={{ duration: 1.2, ease: [0.25, 1, 0.35, 1] }}
                   className="absolute w-[280px] h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
                 >
                   <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={project.media} type="video/mp4" />
                    </video>

                    {/* Dark overlay for side items to make them blend in beautifully */}
                    <motion.div 
                      className="absolute inset-0 bg-black"
                      initial={false}
                      animate={{ opacity: isSide ? 0.6 : 0 }}
                      transition={{ duration: 1.2 }}
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
                    <source src={project.media} type="video/mp4" />
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

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from './ScrollAnimations';
import heroVideo from '../assets/2_Gym_Fitness_Center_1920x1080.webm';

const Hero = () => {
  const { scrollY } = useScroll();
  // Parallax: video moves slower than content
  const videoY = useTransform(scrollY, [0, 600], [0, 150]);
  // Content fades out as you scroll down
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      
      {/* Background Video — Parallax */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y: videoY }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          onLoadedData={(e) => { e.target.playbackRate = 0.5; }}
          className="absolute right-0 top-0 w-full h-[120%] object-cover grayscale opacity-60"
        >
          <source src={heroVideo} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </motion.div>

      {/* Main Content Area — Fade out on scroll */}
      <motion.div
        className="relative z-10 container-default flex-1 flex items-center py-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-[750px] text-left">
          
          {/* Tagline accent */}
          <ScrollReveal direction="left" delay={0.1} duration={0.7} once>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary"></div>
              <span className="text-primary uppercase text-sm font-bold tracking-[0.25em] font-display">Evolution Fitness</span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.3} duration={0.8} once>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 uppercase text-white">
              PROJETOS COMPLETOS <br/>
              <span className="text-gray-400 font-light">DE ACADEMIAS,</span> <br className="hidden md:block"/>
              DO <span className="text-primary">PLANEJAMENTO</span> <br className="hidden md:block"/>
              À ENTREGA FINAL
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.5} duration={0.7} once>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300 font-sans max-w-[560px]">
              Planejamento técnico, equipamentos de <strong className="text-white">alta performance</strong> e suporte especializado para transformar seu espaço em referência.
            </p>
          </ScrollReveal>

          {/* Social proof strip */}
          <ScrollReveal delay={0.7} duration={0.6} once>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>+500 projetos entregues</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Presente em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Suporte completo</span>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.9} duration={0.6} once>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="group bg-primary text-white font-bold py-4 px-10 text-lg transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-primary-glow flex items-center gap-3 uppercase tracking-wide">
                Falar com um especialista
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="text-gray-400 hover:text-white font-medium py-4 px-6 text-base transition-colors border-b border-transparent hover:border-white/30">
                Conheça nossos projetos →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>

      {/* Wave divider — overlaps Hero bottom, clean transition into About */}
      <div className="absolute bottom-0 left-0 right-0 z-20 leading-[0]" style={{ transform: 'translateY(1px)' }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: '100px' }}
        >
          <defs>
            {/* Soft shadow for depth on the wave edge */}
            <filter id="waveShadow" x="-5%" y="-30%" width="110%" height="160%">
              <feDropShadow dx="0" dy="-3" stdDeviation="6" floodColor="rgba(0,0,0,0.5)" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Back layer — darkest, slight offset */}
          <path
            d="M0,85 C180,55 360,95 540,70 C720,45 900,90 1080,65 C1200,50 1320,80 1440,60 L1440,120 L0,120 Z"
            fill="#191919"
          />

          {/* Middle layer */}
          <path
            d="M0,70 C200,100 400,40 600,65 C800,90 1000,35 1200,60 C1320,72 1400,55 1440,50 L1440,120 L0,120 Z"
            fill="#1A1A1A"
          />

          {/* Front layer — main wave, with drop shadow */}
          <path
            d="M0,55 C240,95 480,25 720,60 C960,95 1200,30 1440,55 L1440,120 L0,120 Z"
            fill="#1C1C1C"
            filter="url(#waveShadow)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

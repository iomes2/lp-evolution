import React from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const TrustLogos = () => {
  const logos = [
    {
      id: 1,
      name: 'Dallo',
      render: () => (
        <span className="font-display text-3xl md:text-4xl font-black tracking-tight">
          Dallo
        </span>
      ),
    },
    {
      id: 2,
      name: 'KRCON',
      render: () => (
        <div className="flex flex-col items-center leading-none">
          <span className="font-display text-3xl md:text-4xl font-black tracking-[0.15em]">
            KRCON
          </span>
          <span className="font-display text-[10px] md:text-xs tracking-[0.35em] font-light uppercase mt-1">
            Empreendimentos
          </span>
        </div>
      ),
    },
    {
      id: 3,
      name: 'STV',
      render: () => (
        <div className="flex items-center gap-2">
          {/* Ícone geométrico estilizado */}
          <div className="flex flex-col items-center leading-none">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M14 8L20 11V17L14 20L8 17V11L14 8Z" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-3xl md:text-4xl font-black tracking-wider">
              STV
            </span>
            <span className="font-display text-[9px] md:text-[10px] tracking-[0.35em] font-light uppercase">
              Construções
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      name: 'Branco',
      render: () => (
        <div className="flex items-center gap-3">
          {/* Ícone de diamante estilizado */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="10" y="10" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-display text-3xl md:text-4xl font-black tracking-wide">
              Branco
            </span>
            <span className="font-display text-[9px] md:text-[10px] tracking-[0.3em] font-light uppercase">
              Empreendimentos
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20 md:py-28 overflow-hidden">
      {/* Headline */}
      <ScrollReveal className="container-default text-center mb-16 md:mb-20">
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-light italic tracking-[0.15em] uppercase text-gray-200">
          Eles confiam na nossa{' '}
          <span className="font-black not-italic text-white">qualidade e performance:</span>
        </h2>
      </ScrollReveal>

      {/* Logos Strip */}
      <div className="container-default">
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20 xl:gap-24" staggerDelay={0.15}>
          {logos.map((logo) => (
            <StaggerItem
              key={logo.id}
              className="text-white/50 hover:text-white transition-all duration-500 cursor-default select-none"
            >
              {logo.render()}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Subtle bottom divider */}
      <div className="mt-20 md:mt-28 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default TrustLogos;

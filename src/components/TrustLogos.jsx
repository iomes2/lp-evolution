import React from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

// Import original logos
import BrancoLogo from '../assets/_BRANCO.png';
import DalloLogo from '../assets/_DALLO.png';
import KrconLogo from '../assets/_KRCON.png';
import StvLogo from '../assets/_STV_.png';

// Import new logos
import AikonLogo from '../assets/LOGO AIKON.png';
import GrupoN1Logo from '../assets/LOGO GRUPO N1.png';
import HalstenLogo from '../assets/Logo halsten.png';
import HSantosLogo from '../assets/LOGO HSANTOS.png';
import SelentGVLogo from '../assets/LOGO SELENT GV.png';

const TrustLogos = () => {
  const logos = [
    {
      id: 1,
      name: 'Dallo',
      src: DalloLogo,
    },
    {
      id: 2,
      name: 'KRCON',
      src: KrconLogo,
    },
    {
      id: 3,
      name: 'STV',
      src: StvLogo,
    },
    {
      id: 4,
      name: 'Branco',
      src: BrancoLogo,
    },
    {
      id: 5,
      name: 'Aikon',
      src: AikonLogo,
    },
    {
      id: 6,
      name: 'Grupo N1',
      src: GrupoN1Logo,
    },
    {
      id: 7,
      name: 'Halsten',
      src: HalstenLogo,
    },
    {
      id: 8,
      name: 'HSantos',
      src: HSantosLogo,
    },
    {
      id: 9,
      name: 'Selent GV',
      src: SelentGVLogo,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20 md:py-28 overflow-hidden">
      {/* Headline */}
      <ScrollReveal className="container-default text-center mb-16 md:mb-20">
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-light italic tracking-[0.15em] uppercase text-gray-200">
          EMPRESAS QUE CONFIAM NA{' '}
          <span className="font-black not-italic text-white">EVOLUTION FITNESS</span>
        </h2>
      </ScrollReveal>

      {/* Logos Strip */}
      <div className="container-default">
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20 xl:gap-24" staggerDelay={0.15}>
          {logos.map((logo) => (
            <StaggerItem
              key={logo.id}
              className="transition-all duration-500 cursor-default select-none opacity-50 hover:opacity-100 transform hover:scale-105"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-10 md:h-12 w-auto object-contain max-w-[150px] filter brightness-0 invert" 
              />
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

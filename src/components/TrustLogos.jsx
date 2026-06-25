import React from 'react';
import { ScrollReveal } from './ScrollAnimations';

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
    { id: 1, name: 'Dallo', src: DalloLogo },
    { id: 2, name: 'KRCON', src: KrconLogo },
    { id: 3, name: 'STV', src: StvLogo },
    { id: 4, name: 'Branco', src: BrancoLogo },
    { id: 5, name: 'Aikon', src: AikonLogo },
    { id: 6, name: 'Grupo N1', src: GrupoN1Logo },
    { id: 7, name: 'Halsten', src: HalstenLogo },
    { id: 8, name: 'HSantos', src: HSantosLogo },
    { id: 9, name: 'Selent GV', src: SelentGVLogo },
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

      {/* Infinite Carousel */}
      <div className="logos-carousel-wrapper">
        <div className="logos-carousel-track">
          {/* First set */}
          {logos.map((logo) => (
            <div key={`a-${logo.id}`} className="logos-carousel-item">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain max-w-[150px] filter brightness-0 invert"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo) => (
            <div key={`b-${logo.id}`} className="logos-carousel-item">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain max-w-[150px] filter brightness-0 invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="mt-20 md:mt-28 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default TrustLogos;

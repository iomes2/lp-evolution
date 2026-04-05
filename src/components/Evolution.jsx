import React, { useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScaleReveal } from './ScrollAnimations';

import video1 from '../assets/0_Woman_Treadmill_1920x1080.mp4';
import video2 from '../assets/2_Gym_Fitness_1920x1080.mp4';
import video3 from '../assets/0_Gym_Fitness_1920x1080.mp4';
import video4 from '../assets/Fit-Curitiba-Itajai-1.mp4';
// import video5 from '../assets/ativagf.mp4';

const Evolution = () => {
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);

  const categories = [
    { id: 1, label: "CONDOMÍNIOS", video: video1 },
    { id: 2, label: "CONSTRUTORAS E\nINCORPORADORAS", video: video2 },
    { id: 3, label: "HOME GYMS DE\nALTO PADRÃO", video: video3 },
    { id: 4, label: "HOTÉIS E RESORTS", video: video4 },
    { id: 5, label: "ACADEMIAS\nPROFISSIONAIS", video: video1 },
  ];

  // Triplicamos os items para criar o loop infinito
  const tripled = [...categories, ...categories, ...categories];

  // Inicializa o scroll no meio (no segundo set de cards)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Cada card = width + gap. Calculamos a largura total de um set
    const cardWidth = el.querySelector('[data-card]')?.offsetWidth || 260;
    const gap = 20; // gap-5 = 1.25rem = 20px
    const oneSetWidth = categories.length * (cardWidth + gap);

    // Iniciar no segundo bloco (meio)
    el.scrollLeft = oneSetWidth;
  }, []);

  // Quando o scroll atinge as bordas, pula silenciosamente pro bloco do meio
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.querySelector('[data-card]')?.offsetWidth || 260;
    const gap = 20;
    const oneSetWidth = categories.length * (cardWidth + gap);

    // Se foi muito pra esquerda (começo), pula pro meio
    if (el.scrollLeft < oneSetWidth * 0.3) {
      isScrollingRef.current = true;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft += oneSetWidth;
      el.style.scrollBehavior = '';
      requestAnimationFrame(() => { isScrollingRef.current = false; });
    }
    // Se foi muito pra direita (fim), pula pro meio
    else if (el.scrollLeft > oneSetWidth * 1.7) {
      isScrollingRef.current = true;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft -= oneSetWidth;
      el.style.scrollBehavior = '';
      requestAnimationFrame(() => { isScrollingRef.current = false; });
    }
  }, [categories.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('[data-card]')?.offsetWidth || 260;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-black text-white py-20 md:py-28 overflow-hidden">
      {/* Title */}
      <ScrollReveal className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-light italic tracking-wider uppercase">
          GALERIA DE IMAGENS DAS <span className="font-black text-white not-italic">OBRAS</span> QUE REALIZAMOS
        </h2>
      </ScrollReveal>

      {/* Infinite Horizontal Scroll Cards */}
      <ScaleReveal className="relative w-full max-w-[1300px] mx-auto px-12 sm:px-16 group/nav">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#1A1A1A] hover:bg-white/10 border border-[#333] rounded-full p-2 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#1A1A1A] hover:bg-white/10 border border-[#333] rounded-full p-2 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Exact-width mask to strictly prevent partial cards */}
        <div className="mx-auto overflow-hidden rounded-2xl w-[220px] md:w-[540px] lg:w-[820px] xl:w-[1100px]">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {tripled.map((cat, index) => (
              <div
                key={`${cat.id}-${index}`}
                data-card
                className="flex-shrink-0 w-[220px] md:w-[260px] h-[360px] md:h-[420px] bg-[#1A1A1A] rounded-2xl border border-[#333] relative overflow-hidden cursor-pointer group hover:border-primary/40 transition-all duration-300 snap-start"
              >
                {/* Video Background */}
                {cat.video && (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                  >
                    <source src={cat.video} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/10 transition-colors duration-500"></div>

                {/* Label at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm md:text-base font-display font-medium uppercase tracking-wider whitespace-pre-line leading-snug text-gray-200 group-hover:text-white transition-colors">
                    {cat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScaleReveal>

      {/* Bottom CTA */}
      <ScrollReveal className="text-center mt-16 md:mt-20 px-6" delay={0.2}>
        <p className="font-display text-lg md:text-xl uppercase tracking-wider font-light italic text-gray-300 mb-10 max-w-[800px] mx-auto leading-relaxed">
          SE VOCÊ BUSCA UM PROJETO FUNCIONAL, DURÁVEL E DE ALTO PADRÃO,<br className="hidden md:block"/> VOCÊ ESTÁ NO LUGAR CERTO.
        </p>
        <button className="btn-ghost mx-auto text-sm">
          <span className="relative z-10">Falar com um especialista agora</span>
          <ArrowRight size={16} className="relative z-10" />
        </button>
      </ScrollReveal>
    </section>
  );
};

export default Evolution;

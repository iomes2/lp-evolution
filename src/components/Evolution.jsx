import React, { useRef, useEffect, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollAnimations';

// Static image imports
import img1 from '../assets/CONDOMÍNIOS.png';
import img2 from '../assets/CONSTRUTORAS E INCORPORADORAS.png';
import img3 from '../assets/HOME GYS DE ALTO PADRÃO_.png';
import img4 from '../assets/HOTÉIS E RISORTES.png';
import img5 from '../assets/ACADEMIAS PROFISSIONAIS.png';

const Evolution = () => {
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  const categories = [
    { id: 1, label: "CONDOMÍNIOS", image: img1 },
    { id: 2, label: "CONSTRUTORAS E\nINCORPORADORAS", image: img2 },
    { id: 3, label: "HOME GYMS DE\nALTO PADRÃO", image: img3 },
    { id: 4, label: "HOTÉIS E RESORTS", image: img4 },
    { id: 5, label: "ACADEMIAS\nPROFISSIONAIS", image: img5 },
  ];

  // Triplicamos para criar o loop infinito
  const tripled = [...categories, ...categories, ...categories];

  const getOneSetWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const cardWidth = el.querySelector('[data-card]')?.offsetWidth || 260;
    const gap = 20;
    return categories.length * (cardWidth + gap);
  }, [categories.length]);

  // Inicializa no segundo set
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = getOneSetWidth();
    el.scrollLeft = oneSetWidth;
  }, [getOneSetWidth]);

  // Loop infinito: ao atingir as bordas, pula silenciosamente pro meio
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;

    const oneSetWidth = getOneSetWidth();

    if (el.scrollLeft < oneSetWidth * 0.3) {
      isScrollingRef.current = true;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft += oneSetWidth;
      el.style.scrollBehavior = '';
      requestAnimationFrame(() => { isScrollingRef.current = false; });
    }
    else if (el.scrollLeft > oneSetWidth * 1.7) {
      isScrollingRef.current = true;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft -= oneSetWidth;
      el.style.scrollBehavior = '';
      requestAnimationFrame(() => { isScrollingRef.current = false; });
    }
  }, [getOneSetWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Auto-scroll contínuo — lento e suave
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5; // pixels por frame

    const tick = () => {
      if (!isPaused && !isScrollingRef.current) {
        el.scrollLeft += speed;
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(autoScrollRef.current);
  }, [isPaused]);

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
      <ScrollReveal className="text-center mb-14 px-6">
        <h2 className="font-display text-3xl md:text-4xl font-light italic tracking-wider uppercase">
          EVOLUÇÃO QUE VOCÊ PRECISA
        </h2>
      </ScrollReveal>

      {/* Full-width Infinite Carousel */}
      <div
        className="relative w-full group/nav"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm hover:bg-primary/20 border border-white/10 hover:border-primary/40 rounded-full p-2.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm hover:bg-primary/20 border border-white/10 hover:border-primary/40 rounded-full p-2.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
        >
          <ChevronRight size={22} />
        </button>

        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrollable track — full width, no container constraints */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-4 md:px-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {tripled.map((cat, index) => (
            <div
              key={`${cat.id}-${index}`}
              data-card
              className="flex-shrink-0 w-[240px] md:w-[280px] h-[360px] md:h-[420px] bg-[#1A1A1A] rounded-2xl border border-white/[0.06] relative overflow-hidden cursor-pointer group hover:border-primary/40 transition-all duration-300"
            >
              {/* Static Image Background */}
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/10 transition-colors duration-500" />

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

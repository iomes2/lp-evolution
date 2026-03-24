import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollAnimations';

const CtaBanner = () => {
  return (
    <section className="relative bg-[#111111] text-white py-14 md:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange accent — left edge strip */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary to-primary/20" />
        {/* Subtle radial glow center-left */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, rgba(255,90,0,1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-default relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
          {/* Left — Copy */}
          <div className="max-w-[600px]">
            <ScrollReveal direction="left" duration={0.7}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-primary" />
                <span className="text-primary uppercase text-xs font-bold tracking-[0.3em] font-display">PRECISA DE AJUDA PARA ESCOLHER OS EQUIPAMENTOS IDEAIS?</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} duration={0.7}>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase leading-[1.15] tracking-wide">
                <span className="font-light text-gray-300">PRECISA DE AJUDA PARA ESCOLHER</span>
                <br />
                <span className="font-black text-white italic">OS EQUIPAMENTOS IDEAIS?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} duration={0.6}>
              <p className="mt-4 text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-[480px]">
                Temos uma equipe pronta para tirar as suas dúvidas e ajudar no que for preciso.
              </p>
            </ScrollReveal>

            {/* Trust reinforcers */}
            <ScrollReveal delay={0.3} duration={0.5}>
              <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span>Fabricante direto — melhor custo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span>Entrega garantida em todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span>Suporte técnico pós-venda real</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — CTA Block */}
          <ScrollReveal direction="right" delay={0.2} duration={0.7}>
            <div className="flex flex-col items-start lg:items-center gap-5">
              <button className="btn-primary">
                <span className="relative z-10">FALAR COM UM ESPECIALISTA</span>
                <ArrowRight size={18} className="relative z-10 transition-transform duration-300" />
              </button>

              {/* Alternative — WhatsApp */}
              <button className="btn-ghost text-xs py-3 px-5">
                <MessageCircle size={14} className="relative z-10" />
                <span className="relative z-10">Ou chame pelo WhatsApp</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Top subtle line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
};

export default CtaBanner;

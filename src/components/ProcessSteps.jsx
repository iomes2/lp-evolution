import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollAnimations';
import orangeBg from '../assets/bg/orange-gradient.png';

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0); // Step 1 active by default

  const steps = [
    {
      number: '01',
      title: 'Fale com um especialista',
      description: 'Nos conta o perfil da sua academia, o espaço e o público. Sem formulários intermináveis.',
    },
    {
      number: '02',
      title: 'Proposta personalizada',
      description: 'Selecionamos os equipamentos ideais para sua necessidade e orçamento. Em até 24h.',
    },
    {
      number: '03',
      title: 'Produção e qualidade',
      description: 'Confirmado o pedido, cada equipamento passa por rigoroso controle de qualidade antes de sair da fábrica.',
    },
    {
      number: '04',
      title: 'Entrega e instalação',
      description: 'Nossa equipe entrega, instala e faz o comissionamento. Sua academia pronta para operar.',
    },
  ];

  const isActive = (i) => activeStep === i;

  return (
    <section className="relative text-white py-24 md:py-32 overflow-hidden">
      {/* Orange gradient background — subtle warm undertone */}
      <div className="absolute inset-0 z-0">
        <img
          src={orangeBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/[0.82]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* Headline */}
      <ScrollReveal className="relative z-10 container-default text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary uppercase text-xs font-bold tracking-[0.3em] font-display">Como funciona</span>
          <div className="w-8 h-[2px] bg-primary" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic tracking-[0.12em] uppercase text-gray-300">
          De parceiro a parceiro{' '}
          <span className="font-black not-italic text-white">— simples assim.</span>
        </h2>
        <p className="mt-4 text-gray-400 font-sans text-base md:text-lg max-w-[600px] mx-auto">
          Da primeira conversa até a academia equipada, estamos com você em cada etapa.
          <strong className="text-gray-200"> Você foca no seu negócio — nós cuidamos dos equipamentos.</strong>
        </p>
      </ScrollReveal>

      {/* Steps — Timeline Layout */}
      <div className="relative z-10 container-default mt-16 md:mt-20">
        <div className="max-w-[1000px] mx-auto">

          {/* Desktop: Horizontal timeline */}
          <div className="hidden md:block">
            {/* Connecting line */}
            <div className="relative">
              <div className="absolute top-[80px] left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
            </div>

            <div className="grid grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center text-center cursor-pointer"
                  onMouseEnter={() => setActiveStep(i)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Circle with glow */}
                  <div className="relative mb-6">
                    {/* Outer glow ring */}
                    <div className={`absolute -inset-3 rounded-full transition-all duration-700 blur-xl ${isActive(i) ? 'bg-primary/10' : 'bg-primary/0'}`} />

                    {/* Main circle */}
                    <div
                      className="relative w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] rounded-full flex items-center justify-center transition-transform duration-500"
                      style={{
                        background: isActive(i)
                          ? 'linear-gradient(135deg, rgba(255,90,0,0.30) 0%, rgba(255,255,255,0.08) 50%, rgba(0,0,0,0.15) 100%)'
                          : 'linear-gradient(135deg, rgba(255,90,0,0.22) 0%, rgba(255,255,255,0.09) 40%, rgba(30,30,30,0.6) 100%)',
                        boxShadow: isActive(i)
                          ? 'inset 0 1px 1px rgba(255,255,255,0.18), 0 4px 30px rgba(0,0,0,0.3), 0 0 40px rgba(255,90,0,0.15)'
                          : 'inset 0 1px 2px rgba(255,255,255,0.14), 0 4px 20px rgba(0,0,0,0.25)',
                        transform: isActive(i) ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.5s ease',
                      }}
                    >
                      {/* Border */}
                      <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-500 ${isActive(i) ? 'border-primary/60' : 'border-white/30'}`} />
                      {/* Conic gradient border */}
                      <div
                        className={`absolute inset-0 rounded-full transition-opacity duration-500 ${isActive(i) ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,90,0,0.3) 25%, transparent 50%, rgba(255,90,0,0.15) 75%, transparent 100%)',
                          mask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))',
                          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))',
                        }}
                      />

                      {/* Number */}
                      <span className={`font-display text-4xl lg:text-5xl font-black transition-colors duration-500 select-none ${isActive(i) ? 'text-primary/70' : 'text-white/45'}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Small dot connector */}
                    <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-500 ${isActive(i) ? 'bg-primary shadow-[0_0_12px_rgba(255,90,0,0.6)]' : 'bg-primary/40'}`} />
                  </div>

                  {/* Text content */}
                  <h3 className={`font-display text-sm lg:text-base font-bold uppercase tracking-wider mb-2 transition-colors duration-300 ${isActive(i) ? 'text-primary' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs lg:text-sm font-sans leading-relaxed max-w-[200px] transition-colors duration-300 ${isActive(i) ? 'text-gray-300' : 'text-gray-500'}`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden">
            <div className="relative pl-16">
              {/* Vertical connecting line */}
              <div className="absolute left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40" />

              <div className="flex flex-col gap-12">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    className="relative flex items-start gap-6"
                    onClick={() => setActiveStep(i)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {/* Circle on the line */}
                    <div
                      className={`absolute -left-16 top-0 w-[56px] h-[56px] rounded-full flex items-center justify-center border transition-all duration-500 ${isActive(i) ? 'border-primary/40 shadow-[0_0_20px_rgba(255,90,0,0.15)]' : 'border-white/15'}`}
                      style={{
                        background: isActive(i)
                          ? 'linear-gradient(135deg, rgba(255,90,0,0.25) 0%, rgba(0,0,0,0.4) 100%)'
                          : 'linear-gradient(135deg, rgba(255,90,0,0.15) 0%, rgba(0,0,0,0.4) 100%)',
                      }}
                    >
                      <span className={`font-display text-lg font-black transition-colors duration-300 ${isActive(i) ? 'text-primary' : 'text-primary/60'}`}>{step.number}</span>
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className={`font-display text-base font-bold uppercase tracking-wider mb-1 transition-colors duration-300 ${isActive(i) ? 'text-primary' : 'text-white'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm font-sans leading-relaxed transition-colors duration-300 ${isActive(i) ? 'text-gray-300' : 'text-gray-400'}`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Block — Conversion push */}
      <ScrollReveal className="relative z-10 text-center mt-16 md:mt-24 px-6" delay={0.3}>
        <p className="font-display text-base md:text-lg text-gray-400 italic mb-2">
          Sem complicação. Sem surpresas de prazo.
        </p>
        <p className="font-display text-lg md:text-xl text-white font-bold uppercase tracking-wide mb-8">
          Seu espaço equipado com quem entende de academia.
        </p>
        <button className="group bg-primary text-white font-bold py-4 px-10 text-lg transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-primary-glow flex items-center gap-3 uppercase tracking-wide mx-auto">
          Quero um orçamento
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
        <span className="block mt-3 text-xs text-gray-500 tracking-wide">Proposta personalizada em até 24h</span>
      </ScrollReveal>
    </section>
  );
};

export default ProcessSteps;

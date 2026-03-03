import React from 'react';
import { Headphones, ClipboardList, Dumbbell, Truck, PhoneCall } from 'lucide-react';
import { StaggerContainer, StaggerItem, ScrollReveal } from './ScrollAnimations';

const Benefits = () => {
  const items = [
    {
      icon: <Headphones className="w-7 h-7" />,
      title: 'Atendimento humano e consultivo',
      description: 'Especialistas reais que entendem seu projeto — sem robôs, sem respostas genéricas.',
    },
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: 'Projetos personalizados',
      description: 'Cada espaço é único. Desenvolvemos layouts sob medida para o perfil de uso real.',
    },
    {
      icon: <Dumbbell className="w-7 h-7" />,
      title: 'Equipamentos tecnológicos e duráveis',
      description: 'Máquinas de alta performance, construídas para uso intenso e longa vida útil.',
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: 'Entrega rápida em todo o Brasil',
      description: 'Logística própria com rastreamento, montagem inclusa e prazo garantido.',
    },
    {
      icon: <PhoneCall className="w-7 h-7" />,
      title: 'Pós-venda e suporte técnico',
      description: 'Não abandonamos você após a entrega. Suporte contínuo para seu investimento.',
    },
  ];

  return (
    <section className="bg-black text-white py-20 md:py-28">
      {/* Optional headline */}
      <ScrollReveal className="container-default text-center mb-14">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic tracking-[0.12em] uppercase text-gray-300">
          Por que escolher a{' '}
          <span className="font-black not-italic text-white">Evolution Fitness</span>
        </h2>
      </ScrollReveal>

      {/* Pill cards */}
      <div className="container-default max-w-[800px]">
        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group relative flex items-center gap-5 md:gap-6 px-6 md:px-8 py-5 md:py-6 rounded-2xl bg-[#1A1A1A] border border-white/[0.06] cursor-default transition-all duration-400 hover:bg-[#222] hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,90,0,0.06)]">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/[0.08] transition-all duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm md:text-base font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-sans mt-1 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Subtle right arrow on hover */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary/40">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Benefits;

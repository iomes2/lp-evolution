import React from 'react';
import { ArrowRight, LayoutDashboard, Dumbbell, Truck, Headphones, UserRound } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const Benefits = () => {
  const items = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: 'Projetos personalizados para o perfil real de uso',
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Equipamentos profissionais, robustos e duráveis',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Entrega rápida em todo o Brasil',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Suporte técnico antes, durante e após a entrega',
    },
    {
      icon: <UserRound className="w-8 h-8" />,
      title: 'Falar com um especialista agora',
      isCta: true,
    },
  ];

  return (
    <section className="bg-[#2A2A2A] text-white py-20 md:py-28">
      <div className="container-default">

        {/* Top row: Title + Description left, CTA right */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14">
          <div className="max-w-[600px]">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight tracking-wide text-white mb-5">
              SOMOS ESPECIALISTAS EM PROJETOS{' '}
              <br className="hidden md:block" />
              DE <span className="font-black text-primary">ESPAÇOS FITNESS PROFISSIONAIS</span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-[520px] font-sans">
              Atuamos desde a concepção até a entrega e montagem final, atendendo academias, condomínios, construtoras, hotéis e empresas em todo o Brasil, com foco em performance, durabilidade e sofisticação.
            </p>
          </div>

          <div className="flex-shrink-0 md:pt-2">
            <button className="btn-ghost text-sm">
              <span className="relative z-10">Falar com um especialista agora</span>
              <ArrowRight size={16} className="relative z-10" />
            </button>
          </div>
        </ScrollReveal>

        {/* Icon Cards Grid — 3 top + 2 bottom centered */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.08}
        >
          {items.map((item, i) => (
            <StaggerItem
              key={i}
              className={`
                group relative bg-[#333333] border border-white/[0.06] rounded-lg p-8 md:p-10
                flex flex-col items-center text-center gap-5
                hover:border-primary/30 hover:bg-[#3a3a3a]
                transition-all duration-300 cursor-default
                ${item.isCta ? 'sm:col-span-2 lg:col-span-1 cursor-pointer hover:border-primary/50' : ''}
              `}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-white/[0.06] flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:bg-primary/[0.08] transition-all duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <p className={`font-sans text-sm md:text-base leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300 max-w-[220px] ${item.isCta ? 'font-semibold text-white' : ''}`}>
                {item.title}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Benefits;

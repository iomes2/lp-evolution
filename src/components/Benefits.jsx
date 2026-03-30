import React from 'react';
import { Factory, Dumbbell, Shield, Truck, Headphones } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './ScrollAnimations';

const Benefits = () => {
  const items = [
    {
      icon: <Headphones className="w-7 h-7" />,
      title: 'Atendimento humano e consultivo',
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: 'Projetos personalizados',
    },
    {
      icon: <Dumbbell className="w-7 h-7" />,
      title: 'Equipamentos tecnológicos e duráveis',
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: 'Entrega rápida em todo o Brasil',
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Pós-venda e suporte técnico',
    },
  ];

  return (
    <section className="bg-black text-white py-20 md:py-28">

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
                  <h3 className="font-display text-sm md:text-base font-medium text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
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

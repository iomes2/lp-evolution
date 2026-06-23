import React from 'react';
import { Dumbbell, Bike, Truck, Headset } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './ScrollAnimations';

const points = [
  {
    icon: Dumbbell,
    title: 'Projetos Personalizados',
    desc: 'Para o perfil real de uso do seu espaço',
  },
  {
    icon: Bike,
    title: 'Equipamentos Profissionais',
    desc: 'Robustos, duráveis e de alta performance',
  },
  {
    icon: Truck,
    title: 'Entrega Nacional',
    desc: 'Logística rápida para todo o Brasil',
  },
  {
    icon: Headset,
    title: 'Suporte Completo',
    desc: 'Antes, durante e após a entrega',
  },
];

const ObjectionPoints = () => {
  return (
    <section className="bg-[#1C1C1C] text-white pb-16 md:pb-20">
      <div className="container-default">
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-0"
          staggerDelay={0.12}
        >
          {points.map((point, index) => {
            const Icon = point.icon;
            const num = String(index + 1).padStart(2, '0');
            return (
              <StaggerItem
                key={index}
                distance={30}
                className="group relative px-6 md:px-8 py-10 md:py-12 cursor-default transition-transform duration-500 hover:-translate-y-1"
              >
                {/* Vertical divider on left (except first on each row) */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
                )}
                {/* Mobile: divider for odd items */}
                {index % 2 !== 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:hidden" />
                )}

                {/* Soft background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/[0.02] group-hover:via-primary/[0.04] group-hover:to-transparent transition-all duration-700 rounded-xl pointer-events-none" />

                {/* Number watermark */}
                <span className="absolute top-4 right-6 font-display text-[52px] md:text-[64px] font-black text-white/[0.025] leading-none select-none pointer-events-none group-hover:text-primary/[0.04] transition-colors duration-700">
                  {num}
                </span>

                {/* Content */}
                <div className="relative flex flex-col gap-4">
                  {/* Icon with accent line */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="text-gray-500 group-hover:text-primary/80 transition-all duration-500 group-hover:scale-110 transform"
                      />
                      {/* Soft glow behind icon on hover */}
                      <div className="absolute -inset-3 bg-primary/0 group-hover:bg-primary/10 blur-2xl rounded-full transition-all duration-700 pointer-events-none" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent group-hover:from-primary/20 group-hover:to-transparent transition-all duration-700" />
                  </div>

                  {/* Text */}
                  <h4 className="font-display font-bold text-[13px] md:text-sm uppercase tracking-wider text-white/90 leading-tight group-hover:text-white transition-colors duration-500">
                    {point.title}
                  </h4>
                  <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
                    {point.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ObjectionPoints;

import React from 'react';
import { Dumbbell, Bike, Truck, Headset } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const points = [
  {
    icon: Dumbbell,
    text: 'Projetos personalizados para o perfil real de uso',
  },
  {
    icon: Bike,
    text: 'Equipamentos profissionais, robustos e duráveis',
  },
  {
    icon: Truck,
    text: 'Entrega rápida em todo o Brasil',
  },
  {
    icon: Headset,
    text: 'Suporte técnico antes, durante e após a entrega',
  },
];

const ObjectionPoints = () => {
  return (
    <section className="bg-[#1C1C1C] text-white pb-20 md:pb-24">
      <div className="container-default">
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06] border border-white/[0.06] rounded-sm overflow-hidden"
          staggerDelay={0.15}
        >
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <StaggerItem 
                key={index} 
                distance={40}
                className="group bg-[#161616] p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4 hover:bg-gradient-to-b hover:from-[#161616] hover:to-primary/10 relative transition-all duration-500"
              >
                {/* Orange line at bottom on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                
                <div className="text-white group-hover:text-primary transition-colors duration-300 mb-2 group-hover:scale-110 transform">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <p className="font-display font-medium text-sm lg:text-[15px] leading-snug tracking-wide text-gray-200 group-hover:text-white transition-colors duration-300">
                  {point.text}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ObjectionPoints;

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const audiences = [
  'Condomínios', 'Construtoras', 'Home Gyms',
  'Hotéis & Resorts', 'Academias', 'Corporativo',
];

const About = () => {
  return (
    <section className="bg-[#1C1C1C] text-white py-20 md:py-24">
      <div className="container-default">

        {/* ── Topo compacto ───────────────── */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary uppercase text-[10px] font-bold tracking-[0.35em] font-display">A EVOLUTION É A ESCOLHA CERTA</span>
            </div>
            <h2 className="font-display font-black text-xl md:text-2xl uppercase tracking-wide text-white leading-tight">
              A EVOLUTION É A{' '}
              <span className="text-primary">ESCOLHA CERTA</span>
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
            Equipamentos de alta performance para o seu treino.
          </p>
        </ScrollReveal>

        {/* ── Bento Grid ──────────────────── */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-3"
          staggerDelay={0.07}
        >

          {/* 1 — Stat grande | 2 cols */}
          <StaggerItem className="col-span-2 md:col-span-1 bg-[#161616] border border-white/[0.06] p-6 flex flex-col justify-center gap-3 rounded-sm group hover:border-primary/20 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold">Equipamentos vendidos</span>
            <span className="font-display font-black text-5xl lg:text-6xl text-primary leading-none">100k<span className="text-3xl">+</span></span>
          </StaggerItem>

          {/* 2 — Anos */}
          <StaggerItem className="col-span-1 bg-[#161616] border border-white/[0.06] p-6 flex flex-col justify-center gap-3 rounded-sm hover:border-primary/20 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold">Anos de mercado</span>
            <span className="font-display font-black text-4xl lg:text-5xl text-white leading-none">15<span className="text-2xl text-primary">+</span></span>
          </StaggerItem>

          {/* 3 — Brasil */}
          <StaggerItem className="col-span-1 bg-primary/10 border border-primary/20 p-6 flex flex-col justify-center gap-3 rounded-sm hover:bg-primary/15 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-semibold">Pontos de venda</span>
            <span className="font-display font-black text-4xl lg:text-5xl text-white leading-none">300<span className="text-2xl text-primary">+</span></span>
          </StaggerItem>

          {/* 4 — Promessa Projeto 48h | tall */}
          <StaggerItem className="col-span-2 md:col-span-1 row-span-2 bg-[#141414] border border-white/[0.06] p-6 lg:p-8 flex flex-col justify-center gap-10 rounded-sm hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <span className="text-primary font-black text-xs">1</span>
              </div>
              <h3 className="font-display font-black text-sm uppercase tracking-wider text-white mb-2">Tecnologia Nacional</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Produzidos no Brasil, nossos equipamentos têm peças acessíveis e assistência técnica ágil — sem a burocracia da importação.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <span className="text-primary font-black text-xs">2</span>
              </div>
              <h3 className="font-display font-black text-sm uppercase tracking-wider text-white mb-2">Entrega para todo o Brasil</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Do Oiapoque ao Chuí, entregamos com agilidade, segurança e prazo garantido.
              </p>
            </div>
          </StaggerItem>

          {/* 5 — Audiences */}
          <StaggerItem className="col-span-2 md:col-span-2 bg-[#161616] border border-white/[0.06] p-6 rounded-sm hover:border-primary/20 transition-all duration-300">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold mb-5">Quem atendemos</p>
            <div className="flex flex-wrap gap-2.5">
              {audiences.map((a) => (
                <span
                  key={a}
                  className="text-[11px] font-display font-bold uppercase tracking-wide px-3 py-1.5 border border-white/10 text-gray-400 hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
          </StaggerItem>

          {/* 6 — Anti-objeção + CTA */}
          <StaggerItem className="col-span-2 md:col-span-2 bg-[#111111] border border-white/[0.06] p-7 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-2.5">
              <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
                <span className="text-white font-semibold">UMA EMPRESA COM DNA INOVADOR,</span>{' '}
                FOCADA EM RESULTADOS.
              </p>
            </div>
            <button className="group shrink-0 flex items-center gap-2 text-xs font-display font-black uppercase tracking-widest text-primary hover:text-white transition-colors duration-300 whitespace-nowrap">
              ASSISTIR VÍDEO COMPLETO
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 duration-300" />
            </button>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;

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
              <span className="text-primary uppercase text-[10px] font-bold tracking-[0.35em] font-display">Por que a Evolution?</span>
            </div>
            <h2 className="font-display font-black text-xl md:text-2xl uppercase tracking-wide text-white leading-tight">
              Do rascunho à entrega —{' '}
              <span className="text-primary">sem terceiros.</span>
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
            Projeto, equipamentos e montagem em uma única empresa. Sem retrabalho, sem surpresas no orçamento.
          </p>
        </ScrollReveal>

        {/* ── Bento Grid ──────────────────── */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-3"
          staggerDelay={0.07}
        >

          {/* 1 — Stat grande | 2 cols */}
          <StaggerItem className="col-span-2 md:col-span-1 bg-[#161616] border border-white/[0.06] p-7 flex flex-col justify-between gap-8 rounded-sm group hover:border-primary/20 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold">Projetos entregues</span>
            <span className="font-display font-black text-6xl text-primary leading-none">500<span className="text-3xl">+</span></span>
          </StaggerItem>

          {/* 2 — Anos */}
          <StaggerItem className="col-span-1 bg-[#161616] border border-white/[0.06] p-7 flex flex-col justify-between gap-8 rounded-sm hover:border-primary/20 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold">De mercado</span>
            <span className="font-display font-black text-5xl text-white leading-none">10<span className="text-2xl text-primary">+</span></span>
          </StaggerItem>

          {/* 3 — Brasil */}
          <StaggerItem className="col-span-1 bg-primary/10 border border-primary/20 p-7 flex flex-col justify-between gap-8 rounded-sm hover:bg-primary/15 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-semibold">Cobertura</span>
            <span className="font-display font-black text-5xl text-white leading-none">BR</span>
          </StaggerItem>

          {/* 4 — Promessa Projeto 48h | tall */}
          <StaggerItem className="col-span-2 md:col-span-1 row-span-2 bg-[#141414] border border-white/[0.06] p-7 flex flex-col justify-between rounded-sm hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <span className="text-primary font-black text-xs">1</span>
              </div>
              <h3 className="font-display font-black text-sm uppercase tracking-wider text-white mb-3">Projeto em 48h</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Você envia o espaço, a gente devolve projeto completo em 2 dias úteis. Zero enrolação.
              </p>
            </div>
            <div>
              <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <span className="text-primary font-black text-xs">2</span>
              </div>
              <h3 className="font-display font-black text-sm uppercase tracking-wider text-white mb-3">Montagem inclusa</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Entregamos e montamos em qualquer estado. Sem você precisar contratar mais ninguém.
              </p>
            </div>
          </StaggerItem>

          {/* 5 — Audiences */}
          <StaggerItem className="col-span-2 bg-[#161616] border border-white/[0.06] p-7 rounded-sm hover:border-primary/20 transition-all duration-300">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold mb-4">Quem atendemos</p>
            <div className="flex flex-wrap gap-2">
              {audiences.map((a) => (
                <span
                  key={a}
                  className="text-[11px] font-display font-bold uppercase tracking-wide px-3 py-1 border border-white/10 text-gray-400 hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
          </StaggerItem>

          {/* 6 — Anti-objeção + CTA */}
          <StaggerItem className="col-span-2 bg-[#111111] border border-white/[0.06] p-7 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-2.5">
              <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                <span className="text-white font-semibold">Preocupado com o orçamento?</span>{' '}
                Fazemos uma proposta antes de qualquer compromisso.
              </p>
              <div className="flex flex-wrap gap-4 text-[11px] text-gray-500">
                {['Sem custos ocultos', 'Proposta grátis', 'Garantia de entrega'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <button className="group shrink-0 flex items-center gap-2 text-xs font-display font-black uppercase tracking-widest text-primary hover:text-white transition-colors duration-300 whitespace-nowrap">
              Quero meu projeto
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 duration-300" />
            </button>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;

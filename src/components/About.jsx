import React from 'react';
import { ArrowRight } from 'lucide-react';
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
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          {/* Left ≈ 50% — headline */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary uppercase text-[10px] font-bold tracking-[0.35em] font-display">A EVOLUTION É A ESCOLHA CERTA</span>
            </div>
            <h2 className="font-display font-black text-xl md:text-2xl uppercase tracking-wide text-white leading-tight">
              SOMOS ESPECIALISTAS EM PROJETOS{' '}
              <br className="hidden md:block" />
              DE <span className="text-primary">ESPAÇOS FITNESS PROFISSIONAIS</span>
            </h2>
          </div>
          {/* Right ≈ 50% — desc → aligns with col-start-3 do grid abaixo */}
          <div className="md:w-1/2">
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              Atuamos desde a concepção até a entrega e montagem final, atendendo academias, condomínios, construtoras, hotéis e empresas em todo o Brasil, com foco em performance, durabilidade e sofisticação.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Bento Grid (4 cols) ─────────────────────────────────────────
            Layout (md):
            row 1: [100k: col1-2] [tall: col3-4, rowspan2]
            row 2: [15+: col1]  [300+: col2] [tall continues]
            row 3: [audiences: col1-2]  [empty: col3-4]
            row 4: [CTA: col1-4 full]
        ─────────────────────────────────────────────────────────────── */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          staggerDelay={0.07}
        >

          {/* 1 — 100k+ | col1-2 */}
          <StaggerItem className="col-span-2 md:col-span-2 md:col-start-1 md:row-start-1 bg-[#161616] border border-white/[0.06] p-6 flex flex-col justify-center gap-3 rounded-sm group hover:border-primary/20 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold">Equipamentos vendidos</span>
            <span className="font-display font-black text-5xl lg:text-6xl text-primary leading-none">100k<span className="text-3xl">+</span></span>
          </StaggerItem>

          {/* 2 — Card tall | col3-4, rows 1-2 */}
          <StaggerItem className="col-span-2 md:col-span-2 md:col-start-3 md:row-start-1 md:row-span-2 bg-[#141414] border border-white/[0.06] p-6 lg:p-8 flex flex-col justify-center gap-10 rounded-sm hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <span className="text-primary font-black text-xs">1</span>
              </div>
              <h3 className="font-display font-black text-sm uppercase tracking-wider text-white mb-2">Projetos Personalizados</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Do planejamento à entrega final — desenvolvemos projetos sob medida para o perfil real de uso do seu espaço.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <span className="text-primary font-black text-xs">2</span>
              </div>
              <h3 className="font-display font-black text-sm uppercase tracking-wider text-white mb-2">Entrega para todo o Brasil</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Entregamos e montamos com equipe especializada em todo o Brasil, com foco em performance, durabilidade e sofisticação.
              </p>
            </div>
          </StaggerItem>

          {/* 3 — 15+ | col1, row2 */}
          <StaggerItem className="col-span-1 md:col-start-1 md:row-start-2 bg-[#161616] border border-white/[0.06] p-6 flex flex-col justify-center gap-3 rounded-sm hover:border-primary/20 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold">Anos de mercado</span>
            <span className="font-display font-black text-4xl lg:text-5xl text-white leading-none">15<span className="text-2xl text-primary">+</span></span>
          </StaggerItem>

          {/* 4 — 300+ | col2, row2 */}
          <StaggerItem className="col-span-1 md:col-start-2 md:row-start-2 bg-primary/10 border border-primary/20 p-6 flex flex-col justify-center gap-3 rounded-sm hover:bg-primary/15 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-semibold">Pontos de venda</span>
            <span className="font-display font-black text-4xl lg:text-5xl text-white leading-none">300<span className="text-2xl text-primary">+</span></span>
          </StaggerItem>

          {/* 5 — Quem Atendemos | col1-2, row3 */}
          <StaggerItem className="col-span-2 md:col-span-2 md:col-start-1 md:row-start-3 bg-[#161616] border border-white/[0.06] p-6 rounded-sm hover:border-primary/20 transition-all duration-300">
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

          {/* 6 — CTA bottom | full width, row4 */}
          <StaggerItem className="col-span-2 md:col-span-4 md:row-start-4 bg-[#111111] border border-white/[0.06] p-7 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">+ 15 anos no mercado</span>{' '}
              — referência em equipamentos de fitness de alto nível, fabricação e vendas.
            </p>
            <button className="btn-ghost shrink-0 text-xs py-3 px-5">
              <span className="relative z-10">Falar com um especialista agora</span>
              <ArrowRight size={14} className="relative z-10" />
            </button>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;

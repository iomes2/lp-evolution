import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const sections = [
  { id: 'hero', label: '01' },
  { id: 'about', label: '02' },
  { id: 'evolution', label: '03' },
  { id: 'trust', label: '04' },
  { id: 'process', label: '05' },
  { id: 'benefits', label: '06' },
  { id: 'cta', label: '07' },
  { id: 'contact', label: '08' },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-6 xl:left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      {/* Vertical track */}
      <div className="relative flex flex-col items-center py-2">
        {/* Track line — ultra thin */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/[0.06]" />

        {/* Animated progress glow line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] origin-top"
          style={{
            scaleY: progress,
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255,90,0,0.6), rgba(255,90,0,0.15))',
            boxShadow: '0 0 6px rgba(255,90,0,0.3)',
          }}
        />

        {/* Section markers */}
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center cursor-pointer"
            style={{ padding: '18px 0' }}
            aria-label={`Seção ${section.label}`}
          >
            {/* Marker */}
            <div className="relative z-10 flex items-center">
              {/* Active pulse ring */}
              {activeSection === i && (
                <motion.div
                  className="absolute -inset-2 rounded-full border border-primary/30"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}

              {/* Dash / dot hybrid */}
              <motion.div
                className="rounded-full"
                animate={{
                  width: activeSection === i ? 6 : 4,
                  height: activeSection === i ? 6 : 4,
                  backgroundColor: activeSection === i
                    ? '#FF5A00'
                    : i < activeSection
                      ? 'rgba(255,90,0,0.35)'
                      : 'rgba(255,255,255,0.12)',
                  boxShadow: activeSection === i
                    ? '0 0 12px rgba(255,90,0,0.5), 0 0 4px rgba(255,90,0,0.8)'
                    : '0 0 0px transparent',
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            {/* Number label — shows on hover, always visible for active */}
            <motion.span
              className="absolute left-full ml-4 font-display text-[10px] tracking-[0.3em] uppercase"
              animate={{
                opacity: activeSection === i ? 1 : 0,
                x: activeSection === i ? 0 : -6,
                color: activeSection === i ? '#FF5A00' : 'rgba(255,255,255,0.3)',
              }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {section.label}
            </motion.span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;

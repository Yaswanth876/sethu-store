import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { RevealWrapper } from '@/components/common/RevealWrapper';

const stats = [
  { 
    value: 48, suffix: '+', 
    label: 'Years of Heritage', 
    description: 'Serving local families since 1975 with consistent quality.',
    color: 'from-[#faf9f7] to-[#efeeec]',
    accent: 'bg-black'
  },
  { 
    value: 48, suffix: 'k', 
    label: 'Families Served', 
    description: 'Loyal patrons across Madurai who trust us every day.',
    color: 'from-[#111] to-[#222]',
    accent: 'bg-white',
    dark: true
  },
  { 
    value: 100, suffix: '%', 
    label: 'Ethical Sourcing', 
    description: 'Every product vetted for quality and authenticity.',
    color: 'from-[#faf9f7] to-[#efeeec]',
    accent: 'bg-black'
  },
  { 
    value: 0, suffix: '', 
    label: 'Compromise', 
    description: 'On quality, freshness, or the trust of our community.',
    color: 'from-[#faf9f7] to-[#efeeec]',
    accent: 'bg-black'
  },
];

function AnimatedCounter({ target, suffix, dark }: { target: number; suffix: string; dark?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || target === 0) { setCount(target); return; }
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className={`font-headline font-extrabold leading-none tabular-nums ${dark ? 'text-white' : 'text-black'}`}
      style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const slider = scrollRef.current;
        const cardWidth = window.innerWidth * 0.7; // 70vw card
        const gap = 16; // gap-4

        // If at the end of the scroll container, instantly reset to the start
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: 'instant' });
        } else {
          slider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }
    }, 3500); // Extended to strictly pause 2-3 sec to allow thorough reading of the card
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 md:py-36 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <RevealWrapper delay={0.05}>
          <div className="flex items-center gap-6 mb-16 md:mb-24">
            <div className="h-px flex-1 bg-black/5" />
            <span className="font-headline font-bold text-[10px] uppercase tracking-[0.3em] text-black/30">
              By the Numbers
            </span>
            <div className="h-px flex-1 bg-black/5" />
          </div>
        </RevealWrapper>

        {/* Stats Grid / Mobile Carousel */}
        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-8 md:pb-0 -mx-6 md:mx-0 px-[15vw] md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch relative smooth-scroll transition-all">
          {[...stats, ...stats, ...stats].map((stat, i) => (
            <motion.div 
              key={`${stat.label}-${i}`}
              initial={{ scale: 0.85, opacity: 0.4 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ margin: "0px -15% 0px -15%", amount: "some" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`h-full shrink-0 snap-center w-[70vw] sm:w-[60vw] md:w-auto ${i >= stats.length ? 'md:hidden' : ''}`}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-br ${stat.color} 
                  border ${stat.dark ? 'border-white/5' : 'border-black/[0.04]'} 
                  overflow-hidden group cursor-pointer flex flex-col justify-between h-full min-h-[220px] md:min-h-0
                  ${stat.dark ? 'shadow-[0_20px_50px_rgba(0,0,0,0.18)]' : 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]'}
                  hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500
                `}
              >
                {/* ── Continuous Micro-interaction: Glass sweep ── */}
                <motion.div 
                  animate={{ x: ['-200%', '300%'] }}
                  transition={{ duration: 4 + (i % stats.length) * 0.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className={`absolute inset-y-0 w-24 bg-gradient-to-r from-transparent ${stat.dark ? 'via-white/[0.05]' : 'via-black/[0.02]'} to-transparent skew-x-[25deg] z-0 pointer-events-none`}
                />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Accent dot — continuous pulse on mobile */}
                  <div className="mb-6 md:mb-10 flex items-center gap-2">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: stat.dark ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className={`w-2.5 h-2.5 rounded-full ${stat.accent}`} 
                    />
                  </div>

                  {/* Animated Number */}
                  <div className="mb-2 md:mb-4">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} dark={stat.dark} />
                  </div>

                  {/* Label */}
                  <h3 className={`font-headline font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] mb-3
                    ${stat.dark ? 'text-white/60' : 'text-black/50'}
                    group-hover:${stat.dark ? 'text-white/90' : 'text-black/90'} transition-colors duration-500`}>
                    {stat.label}
                  </h3>

                  {/* Description — visible on mobile, reveal on hover for desktop */}
                  <p className={`font-body text-xs md:text-sm leading-relaxed transition-all duration-500 overflow-hidden mt-auto
                    opacity-80 max-h-24 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-24
                    ${stat.dark ? 'text-white/70 group-hover:text-white/80' : 'text-[#404944]/90 group-hover:text-[#404944]'}`}>
                    {stat.description}
                  </p>
                </div>

                {/* Decorative radial glow top-right */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700
                  ${stat.dark ? 'bg-white/10' : 'bg-black/5'}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom brand quote */}
        <RevealWrapper delay={0.5}>
          <div className="mt-20 md:mt-28 text-center">
            <p className="font-body italic text-2xl md:text-3xl text-black/25 max-w-2xl mx-auto leading-relaxed">
              "Numbers tell stories. Ours is one of trust, quality, and an unwavering commitment to Madurai's families."
            </p>
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}

import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Users, Store } from 'lucide-react';
import { RevealWrapper } from '@/components/common/RevealWrapper';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const slider = scrollRef.current;
        const cardWidth = window.innerWidth * 0.7; // 70vw card
        const gap = 16; // gap-4 

        // If at the end of the scroll container, instantly reset to start to strictly avoid visual backtracking
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
    <section id="why-us" className="py-32 px-6 bg-[#f4f3f1]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <RevealWrapper delay={0.05}>
            <span className="font-headline font-bold text-black tracking-[0.16em] uppercase text-[11px] mb-4 block">
              The Standard
            </span>
          </RevealWrapper>
          <RevealWrapper delay={0.12}>
            <h2 className="font-headline font-bold text-black tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Uncompromising Curation
            </h2>
          </RevealWrapper>
        </div>

        {/* ── Bento Grid (Desktop & Tablet) ── */}
        <div className="hidden md:grid md:grid-cols-12 gap-5">

          {/* Card 1: Large — Chemical-Free Ethos */}
          <RevealWrapper delay={0.1} className="md:col-span-8">
            <motion.div 
              whileHover="hover"
              className="group bg-white p-8 sm:p-10 lg:p-12 rounded-[2rem] flex flex-col justify-between min-h-[320px] sm:min-h-[380px] h-full shadow-card overflow-hidden relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                variants={{ hover: { scale: 1.1, rotate: 5 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10"
              >
                <ShieldCheck className="w-12 h-12 lg:w-14 lg:h-14 text-black mb-6 sm:mb-8" strokeWidth={1.5} />
              </motion.div>
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-black text-3xl lg:text-4xl mb-3 sm:mb-4 md:group-hover:-translate-y-1 transition-transform duration-500">
                  Uncompromised Quality
                </h3>
                <p className="text-lg lg:text-xl text-[#404944] editorial-text max-w-lg md:group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                  Every item, from spices to household soaps, is vetted for authentic quality.
                  If it's not good enough for our home, it never enters our store.
                </p>
              </div>
            </motion.div>
          </RevealWrapper>

          {/* Black card — In-Store Experience */}
          <RevealWrapper delay={0.18} className="md:col-span-4">
            <motion.div 
              whileHover="hover"
              className="group bg-black text-white p-8 sm:p-10 lg:p-12 rounded-[2rem] flex flex-col justify-between min-h-[280px] sm:min-h-[380px] h-full relative overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-shadow duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 md:group-hover:scale-150 transition-transform duration-700 ease-out" />
              
              <div className="bg-white/10 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-6 sm:mb-8 relative z-10 md:group-hover:scale-110 md:group-hover:bg-white/20 transition-all duration-300">
                <Store className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline font-bold text-3xl leading-tight relative z-10 md:group-hover:text-white/90 transition-colors">
                Flagship Walk-in Experience
              </h3>
            </motion.div>
          </RevealWrapper>

          {/* Card 3: Gold-tinted — Community Sourcing */}
          <RevealWrapper delay={0.24} className="md:col-span-4">
            <motion.div 
              whileHover="hover"
              className="group bg-[#553d00] text-[#dca400] p-8 sm:p-10 lg:p-12 rounded-[2rem] flex flex-col justify-between min-h-[240px] sm:min-h-[280px] h-full relative overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(85,61,0,0.15)] md:hover:shadow-[0_20px_40px_rgba(85,61,0,0.25)] transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                variants={{ hover: { x: 5, y: -5 } }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative z-10"
              >
                <Users className="w-12 h-12 lg:w-14 lg:h-14 text-[#dca400] mb-6 sm:mb-8" strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-headline font-bold text-2xl text-white relative z-10 md:group-hover:-translate-y-1 transition-transform duration-300">
                Community-First Sourcing
              </h3>
            </motion.div>
          </RevealWrapper>

          {/* Card 4: The Trust Factor */}
          <RevealWrapper delay={0.3} className="md:col-span-8">
            <motion.div 
              whileHover="hover"
              className="group bg-[#efeeec] p-8 sm:p-10 lg:p-12 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 lg:gap-14 overflow-hidden min-h-[240px] sm:min-h-[280px] h-full cursor-pointer border border-[#e3e2e0] hover:border-[#dca400]/30 transition-colors duration-500 relative"
            >
              <div className="flex-1 relative z-20">
                <h3 className="font-headline font-bold text-black text-2xl lg:text-3xl mb-3 sm:mb-4 md:group-hover:text-black/80 transition-colors duration-300">
                  The Trust Factor
                </h3>
                <p className="text-lg lg:text-xl text-[#404944] editorial-text md:group-hover:text-black transition-colors duration-300 max-w-sm">
                  Serving 3 generations of loyal patrons in Madurai with consistent quality
                  since 1975.
                </p>
              </div>
              
              <motion.div 
                variants={{
                  hover: { rotate: 15, scale: 1.05, boxShadow: "0 30px 60px -12px rgba(26, 28, 27, 0.15)" }
                }}
                className="relative w-36 h-36 md:w-40 md:h-40 xl:w-48 xl:h-48 bg-white/50 rounded-full flex-shrink-0 backdrop-blur-md flex items-center justify-center shadow-ambient z-10 md:group-hover:bg-white/60 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/70 rounded-full opacity-60" />
                <span className="font-headline font-bold text-black/90 text-3xl md:text-4xl relative z-10">1975</span>
              </motion.div>
            </motion.div>
          </RevealWrapper>
        </div>

        {/* ── Mobile Native Snap Carousel ── */}
        <RevealWrapper delay={0.2}>
          <div ref={scrollRef} className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-[15vw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch relative z-10 transition-all">
            {[0, 1, 2].map((loopIndex) => (
              <React.Fragment key={`feature-loop-${loopIndex}`}>
                {/* Mobile Card 1: Ethos */}
                <motion.div 
                  initial={{ scale: 0.85, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ root: null, margin: "0px -15% 0px -15%", amount: "some" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileTap={{ scale: 0.98 }}
                  className="snap-center shrink-0 w-[70vw] max-w-[320px] bg-white p-8 rounded-[2.5rem] flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 min-h-[340px]"
                >
                  <motion.div animate={{ scale: [1, 1.08, 1], rotate: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <ShieldCheck className="w-10 h-10 text-black mb-10" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                      <h3 className="font-headline font-bold text-black text-[1.35rem] mb-3 leading-tight">Uncompromised Quality</h3>
                      <p className="text-[13px] text-[#404944] editorial-text leading-relaxed">
                        Every single item is rigorously vetted for authentic purity. If it doesn't meet the standards of our own home, it never enters our aisles.
                      </p>
                  </div>
                </motion.div>

                {/* Mobile Card 2: Walk-In */}
                <motion.div 
                  initial={{ scale: 0.85, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ root: null, margin: "0px -15% 0px -15%", amount: "some" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileTap={{ scale: 0.98 }}
                  className="snap-center shrink-0 w-[70vw] max-w-[320px] bg-black text-white p-8 rounded-[2.5rem] flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)] relative overflow-hidden min-h-[340px]"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <motion.div 
                    animate={{ boxShadow: ['0 0 0px rgba(255,255,255,0.1)', '0 0 20px rgba(255,255,255,0.4)', '0 0 0px rgba(255,255,255,0.1)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-10 relative z-10"
                  >
                    <Store className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div className="relative z-10 w-full">
                    <h3 className="font-headline font-bold text-[1.35rem] leading-[1.1] mb-3">Flagship Walk-in Experience</h3>
                    <p className="text-[13px] text-white/70 editorial-text leading-relaxed">
                      Discover a flawlessly organized, premium retail environment where traditional essence meets impeccable modern curation.
                    </p>
                  </div>
                </motion.div>

                {/* Mobile Card 3: Community */}
                <motion.div 
                  initial={{ scale: 0.85, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ root: null, margin: "0px -15% 0px -15%", amount: "some" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileTap={{ scale: 0.98 }}
                  className="snap-center shrink-0 w-[70vw] max-w-[320px] bg-[#553d00] text-[#dca400] p-8 rounded-[2.5rem] flex flex-col justify-between shadow-[0_15px_40px_rgba(85,61,0,0.2)] relative overflow-hidden min-h-[340px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
                    <Users className="w-10 h-10 mb-10 relative z-10" strokeWidth={1.5} />
                  </motion.div>
                  <div className="relative z-10 w-full">
                    <h3 className="font-headline font-bold text-[1.35rem] text-white leading-[1.1] mb-3">Community-First Sourcing</h3>
                    <p className="text-[13px] text-white/80 editorial-text leading-relaxed">
                      We actively support local artisans and master farmers throughout Madurai to bring you the freshest, absolute finest native produce.
                    </p>
                  </div>
                </motion.div>

                {/* Mobile Card 4: Trust */}
                <motion.div 
                  initial={{ scale: 0.85, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ root: null, margin: "0px -15% 0px -15%", amount: "some" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileTap={{ scale: 0.98 }}
                  className="snap-center shrink-0 w-[70vw] max-w-[320px] bg-[#efeeec] p-8 pb-0 rounded-[2.5rem] flex flex-col justify-between border border-[#e3e2e0] overflow-hidden min-h-[340px] relative"
                >
                  <div className="relative z-20 mb-6">
                    <h3 className="font-headline font-bold text-black text-[1.35rem] mb-3">The Trust Factor</h3>
                    <p className="text-[13px] text-[#404944] editorial-text leading-relaxed w-full">
                      Built upon half a century of unbroken dedication. Three generations of Madurai families rely entirely on our unwavering standards.
                    </p>
                  </div>
                  
                  <div className="w-32 h-32 bg-white/60 rounded-tl-full rounded-tr-[3rem] shrink-0 backdrop-blur-md flex items-center justify-center shadow-ambient relative z-10 self-end mt-auto -mr-8 border border-white translate-y-6">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/70 rounded-full opacity-60" />
                    <motion.span 
                      animate={{ rotate: [-5, 2, -5], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="font-headline font-bold text-black/90 text-[1.8rem] rotate-[-5deg] relative z-20 -translate-x-2 -translate-y-2 block"
                    >
                      1975
                    </motion.span>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

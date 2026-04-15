import React from 'react';
import { motion } from 'framer-motion';
import { EASE_PREMIUM, RevealWrapper } from '@/components/common/RevealWrapper';

export function LegacySection() {
  return (
    <section id="legacy" className="py-32 px-6 bg-[#f4f3f1]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left: Photo + floating quote ── */}
        <RevealWrapper delay={0.1} className="relative">
          {/* Main image */}
          <motion.div 
            whileHover="hover"
            className="aspect-[4/5] bg-white rounded-[1rem] overflow-hidden shadow-ambient-lg hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-shadow duration-700 relative cursor-pointer group"
          >
            <motion.img
              variants={{ hover: { scale: 1.05 } }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              src="/store-photos/sethustore6.jpeg"
              alt="Inside Sethu Store — heritage grocery"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark gray overlay tint */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply opacity-100 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
          </motion.div>

          {/* Floating quote card — highly interactive */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            whileHover={{ y: -10, rotate: -2, scale: 1.05, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
            className="absolute -bottom-8 -right-4 lg:-bottom-10 lg:-right-8 bg-white/95 backdrop-blur-md p-8 rounded-[1rem] shadow-float max-w-[18rem] hidden sm:block border border-black/5 cursor-pointer z-10"
          >
            <div className="absolute -top-3 -left-3 text-6xl text-[#dca400] opacity-30 font-editorial leading-none">"</div>
            <p className="font-body italic text-[17px] text-black leading-relaxed relative z-10">
              The smell of fresh lentils and pure ghee has greeted three generations of Vinayaga Nagar families.
            </p>
          </motion.div>
        </RevealWrapper>

        {/* ── Right: Text content ── */}
        <div className="space-y-7 lg:space-y-8">
          <RevealWrapper delay={0.15}>
            <span className="font-headline font-bold text-black tracking-[0.16em] uppercase text-[11px]">
              Our Provenance
            </span>
          </RevealWrapper>

          <RevealWrapper delay={0.22}>
            <h2 className="font-headline font-bold text-black tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              The Art of Sourcing
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.3} className="space-y-5 text-xl text-[#404944] editorial-text">
            <p>
              Founded in 1975 as a small community granary, Sethu Store began with a simple
              promise: to treat food as an heirloom. We believe that what goes into your
              family's kitchen should be nothing short of perfect.
            </p>
            <p>
              Today, we combine that near-century of sensory knowledge with modern curation,
              selecting only the finest goods and daily essentials from trusted sources who 
              share our obsessive devotion to quality.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.38}>
            <motion.button
              whileHover="hover"
              className="relative font-headline font-bold text-black group transition-colors duration-300 flex items-center gap-2 mt-4"
            >
              Read our full story
              <motion.span 
                variants={{ hover: { x: 5 } }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                →
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-500 ease-out group-hover:w-full" />
            </motion.button>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

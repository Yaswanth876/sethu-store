import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper } from '@/components/common/RevealWrapper';
import { Phone, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 px-6 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.15)]">

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />
        </div>

        <div className="relative z-10 py-24 px-8 md:px-20 lg:px-32 text-center text-white">
          <RevealWrapper delay={0.05}>
            <motion.span 
              animate={{ opacity: [0.3, 0.6, 0.3], letterSpacing: ['0.3em', '0.35em', '0.3em'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-headline font-bold text-white tracking-[0.3em] uppercase text-[10px] sm:text-[11px] mb-8 block"
            >
              Established 1975
            </motion.span>
          </RevealWrapper>

          <RevealWrapper delay={0.12}>
            <h2
              className="font-headline font-bold tracking-tight mb-8 leading-[1.0]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              { "Serving Madurai Families".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + (i * 0.1), duration: 0.8 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden md:block" />
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-white/60 block md:inline"
              >
                With Quality Since 1975
              </motion.span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-16">
              {['Fresh Products', 'Fair Price', 'Trusted Service'].map((item, i) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" },
                    opacity: { delay: 0.4 + (i * 0.1) },
                    scale: { delay: 0.4 + (i * 0.1) },
                  }}
                  className="flex items-center gap-3 cursor-default"
                >
                  {i !== 0 && <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />}
                  <span className="font-headline font-bold text-xs sm:text-sm uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.28}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
              {/* Glowing Aura behind button */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/10 blur-3xl rounded-full z-0 pointer-events-none"
              />

              <motion.a
                href="tel:+919865930753"
                whileHover="hover"
                whileTap={{ scale: 0.92, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative z-10 inline-flex items-center gap-6 bg-white text-black px-10 md:px-12 py-5 md:py-6 rounded-full font-headline font-bold text-lg overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition-shadow duration-500 hover:shadow-[0_40px_80px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Magnetic-like Button Shimmer */}
                <motion.div 
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-black/[0.04] to-transparent skew-x-[30deg] pointer-events-none"
                />

                <motion.div 
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                  className="bg-black/5 p-3 rounded-full"
                >
                  <Phone className="w-5 h-5 fill-black" />
                </motion.div>
                
                <span className="text-[17px] tracking-wide">Call Us Today</span>
                
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 relative overflow-hidden">
                  <motion.div
                    variants={{
                      hover: { x: [0, 30, -30, 0] }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  {/* Static arrow for default state */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                     <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.a>
              
              <RevealWrapper delay={0.5}>
                <p className="font-body italic text-white/40 text-sm max-w-[200px] text-center sm:text-left mt-6 sm:mt-0 leading-tight">
                  For bulk orders or direct home delivery inquiries.
                </p>
              </RevealWrapper>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

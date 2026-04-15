import React from 'react';
import { MapPin, Clock, ArrowUpRight, Phone } from 'lucide-react';
import { RevealWrapper } from '@/components/common/RevealWrapper';
import { motion } from 'framer-motion';

export function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <RevealWrapper delay={0.05}>
              <span className="font-headline font-bold text-black/40 tracking-[0.2em] uppercase text-[10px] sm:text-[11px] mb-4 block">
                The Flagship Experience
              </span>
            </RevealWrapper>
            <RevealWrapper delay={0.12}>
              <h2 className="font-headline font-bold text-black tracking-tight leading-[0.95]"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Visit the <br className="hidden md:block" />Sethu Store
              </h2>
            </RevealWrapper>
          </div>
          
          <RevealWrapper delay={0.2} className="hidden md:block">
            <p className="text-xl text-[#404944] editorial-text max-w-[320px] pb-2 border-l-2 border-black/5 pl-8 italic">
              "Where three generations of heritage meet modern curation."
            </p>
          </RevealWrapper>
        </div>

        {/* ── DESKTOP & TABLET LAYOUT (Hidden on Mobile) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ── Left: Detailed Info Cards ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
            <RevealWrapper delay={0.2} className="flex-1">
              <motion.div 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#faf9f7] p-10 rounded-[2.5rem] border border-black/[0.03] h-full flex flex-col justify-between group overflow-hidden relative cursor-default"
              >
                {/* Glass Shimmer Effect */}
                <motion.div 
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[20deg] z-0 pointer-events-none"
                />
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,0,0,0.02),transparent_40%)] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 12 }}
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-10 transition-transform duration-500 shadow-lg"
                  >
                    <MapPin className="w-5 h-5" strokeWidth={2} />
                  </motion.div>
                  <h3 className="font-headline font-bold text-2xl text-black mb-4 lg:group-hover:translate-x-2 transition-transform duration-500">Our Coordinates</h3>
                  <p className="font-body text-xl text-[#404944] leading-relaxed lg:group-hover:translate-x-2 transition-transform duration-500 delay-[50ms]">
                    Vinayagar Nagar, Pasumalai,<br />
                    Madurai, Tamil Nadu 625004
                  </p>
                </div>
                
                <motion.a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Sethu+Store+Madurai"
                  target="_blank"
                  whileHover={{ x: 8 }}
                  className="mt-12 inline-flex items-center gap-3 font-headline font-bold text-sm tracking-widest uppercase text-black group/link relative z-10 w-max"
                >
                  <span className="relative">
                    Get Directions
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 lg:group-hover/link:w-full" />
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center lg:group-hover/link:bg-black lg:group-hover/link:text-white transition-all duration-300 shadow-sm lg:group-hover/link:shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.a>
              </motion.div>
            </RevealWrapper>

            <RevealWrapper delay={0.3} className="flex-1">
              <motion.div 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-black p-10 rounded-[2.5rem] text-white h-full flex flex-col justify-between group shadow-ambient relative overflow-hidden cursor-default"
              >
                {/* Intense Dark Glass Shimmer */}
                <motion.div 
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                  className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[25deg] z-0 pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: -12 }}
                    className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-10 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <Clock className="w-5 h-5" strokeWidth={2} />
                  </motion.div>
                  <h3 className="font-headline font-bold text-2xl mb-6 lg:group-hover:translate-x-2 transition-transform duration-500">Active Hours</h3>
                  
                  <div className="space-y-4 font-headline text-lg">
                    {[
                      { label: 'Mon — Sat', time: '6:30 AM — 10 PM' },
                      { label: 'Sunday', time: '6:30 AM — 2 PM' }
                    ].map((row, i) => (
                      <motion.div 
                        key={row.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex justify-between items-center border-b border-white/10 pb-4 px-3 rounded-xl transition-all duration-300 lg:hover:x-8 lg:hover:bg-white/5 cursor-pointer"
                      >
                        <span className="opacity-50 text-xs uppercase tracking-[0.2em] font-bold">{row.label}</span>
                        <span className="font-bold tracking-tight text-white">{row.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] relative z-10">
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Phone className="w-3.5 h-3.5 text-white/80" />
                  </motion.div>
                  <span className="lg:group-hover:text-white/60 transition-colors duration-500">Available for in-store pickup</span>
                </div>
              </motion.div>
            </RevealWrapper>

          </div>

          {/* ── Right: Store photo + Map stacked ── */}
          <div className="lg:col-span-7 flex flex-col gap-5 relative h-full">

            {/* Store photo banner */}
            <RevealWrapper delay={0.35}>
              <motion.div
                whileHover="hover"
                className="group relative w-full h-[200px] lg:h-[240px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] cursor-pointer flex-shrink-0"
              >
                <motion.img
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src="/store-photos/sethustore9.png"
                  alt="Sethu Store — front view"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-7 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)] animate-pulse" />
                  <span className="font-headline font-bold text-white text-sm tracking-wide">Sethu Store, Vinayagar Nagar</span>
                </div>
              </motion.div>
            </RevealWrapper>

            {/* Map */}
            <RevealWrapper delay={0.45} className="flex-1 min-h-[300px]">
              <motion.div 
                whileHover={{ scale: 1.02, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border-[12px] border-[#faf9f7] relative min-h-[300px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4827002982465!2d78.07729607507663!3d9.89369489020635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb90ccfb68f%3A0x558a7f9e3124a35f!2sSethu%20Store!5e0!3m2!1sen!2sin!4v1776162501550!5m2!1sen!2sin"
                  className="w-full h-full absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="absolute bottom-6 right-6 z-10 pointer-events-auto hidden sm:block"
                >
                  <div className="glass px-5 py-3 rounded-2xl border border-black/5 shadow-ambient flex items-center gap-3 bg-white/90 backdrop-blur-md">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse" />
                    <span className="font-headline font-bold text-xs uppercase tracking-widest text-black">Visit us today</span>
                  </div>
                </motion.div>
              </motion.div>
            </RevealWrapper>

            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#faf9f7] rounded-full -z-10 blur-3xl opacity-50" />
          </div>
        </div>

        {/* --- EXCLUSIVE MOBILE APP-STYLE LAYOUT --- */}
        <div className="lg:hidden flex flex-col mt-4">
          <RevealWrapper delay={0.2}>
            <motion.div 
              className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/[0.04] overflow-hidden relative flex flex-col"
            >
              {/* Store photo strip */}
              <div className="w-full h-[180px] relative overflow-hidden">
                <img
                  src="/store-photos/sethustore9.png"
                  alt="Sethu Store front"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                <div className="absolute bottom-3 left-5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.7)] animate-pulse" />
                  <span className="font-headline font-bold text-white text-[10px] tracking-widest uppercase">Vinayagar Nagar, Madurai</span>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="w-full h-[240px] relative bg-[#f4f3f1]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4827002982465!2d78.07729607507663!3d9.89369489020635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb90ccfb68f%3A0x558a7f9e3124a35f!2sSethu%20Store!5e0!3m2!1sen!2sin!4v1776162501550!5m2!1sen!2sin"
                    className="w-full h-full absolute inset-0 mix-blend-multiply opacity-90 grayscale-[0.2]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Pulsing overlay status */}
                  <div className="absolute top-4 left-4 glass px-3.5 py-2 rounded-[1rem] border border-black/5 shadow-sm flex items-center gap-2 bg-white/95 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                    <span className="font-headline font-bold text-[9px] uppercase tracking-[0.2em] text-black">Visit us today</span>
                  </div>
              </div>

              {/* Overlapping Floating Action Button (FAB) */}
              <div className="absolute top-[232px] right-6 z-20 pointer-events-auto shadow-xl rounded-full">
                <motion.a 
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  href="https://www.google.com/maps/dir/?api=1&destination=Sethu+Store+Madurai"
                  target="_blank"
                  className="w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center text-white border-4 border-white cursor-pointer group"
                >
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>

              {/* Bottom Half: Stacked Info rows */}
              <div className="p-6 pt-9 flex flex-col gap-6 bg-white z-10 overflow-hidden">
                {/* Coordinates Row */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileTap={{ scale: 0.98 }} 
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileInView={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1, delay: 0.3 }}
                    className="w-[42px] h-[42px] rounded-full bg-[#faf9f7] border border-black/[0.04] flex items-center justify-center shrink-0"
                  >
                    <MapPin className="w-4 h-4 text-black" strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h4 className="font-headline font-bold text-black text-[1.1rem] mb-1 leading-none">Coordinates</h4>
                    <p className="font-body text-[#404944] text-[13px] leading-relaxed opacity-90">
                      Vinayagar Nagar, Pasumalai,<br />Madurai, Tamil Nadu 625004
                    </p>
                  </div>
                </motion.div>
                
                <div className="w-full h-px bg-gradient-to-r from-black/5 via-black/5 to-transparent" />

                {/* Hours Row */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileTap={{ scale: 0.98 }} 
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileInView={{ rotate: [0, -15, 0] }} transition={{ duration: 1, delay: 0.4 }}
                    className="w-[42px] h-[42px] rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-md"
                  >
                    <Clock className="w-4 h-4" strokeWidth={2} />
                  </motion.div>
                  <div className="flex-1 w-full relative">
                    <h4 className="font-headline font-bold text-black text-[1.1rem] mb-3 leading-none">Active Hours</h4>
                    
                    <div className="space-y-2 w-full pr-4">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-black/50 text-[10px] uppercase tracking-[0.15em] font-bold">Mon — Sat</span>
                        <span className="font-bold text-black text-[13px]">6:30 AM — 10 PM</span>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <span className="text-black/50 text-[10px] uppercase tracking-[0.15em] font-bold">Sunday</span>
                        <span className="font-bold text-[#D93025] text-[13px]">6:30 AM — 2 PM</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </RevealWrapper>
        </div>

      </div>
    </section>
  );
}

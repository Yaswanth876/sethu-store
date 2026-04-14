import React from 'react';
import { motion } from 'framer-motion';
import { Star, Globe, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';
import { RevealWrapper } from '@/components/common/RevealWrapper';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#050505] text-white relative overflow-hidden pt-24 pb-16 px-6 md:px-12 font-body rounded-t-[4rem] border-t border-white/10">
      
      {/* ── Background Waabi-Style Depth Detail ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* The Central Depth Portal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] border border-white/[0.03] rounded-[3rem] pointer-events-none overflow-hidden hidden lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]" />
      </motion.div>

      {/* Background Logo Watermark (Reduced Size + Motion) */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden"
      >
        <motion.h2 
          whileHover={{ scale: 1.05, x: -20 }}
          className="font-headline font-black text-[15vw] leading-none text-white/[0.03] tracking-tighter"
        >
          SETHU
        </motion.h2>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Top Section: High Impact Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Left: Waabi-Headline Block (Reduced Font Size) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-10"
          >
            <h3 className="font-headline font-bold text-4xl md:text-5xl leading-tight tracking-tight max-w-xl">
              Sethu Store
            </h3>
            
            <div className="space-y-6">
              <p className="text-white/70 text-base md:text-lg font-medium max-w-sm">
                Partnering with heritage since 1975. Discover quality groceries that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm md:text-base font-bold">
                <motion.a 
                  whileHover={{ x: 5, color: '#fff' }}
                  href="mailto:veerakumarsethu@gmail.com" 
                  className="flex items-center gap-2 text-white/60 transition-colors"
                >
                  <Mail className="w-4 h-4" /> veerakumarsethu@gmail.com
                </motion.a>
                <motion.a 
                  whileHover={{ x: 5, color: '#fff' }}
                  href="tel:+919865930753" 
                  className="flex items-center gap-2 text-white/60 transition-colors"
                >
                  <Phone className="w-4 h-4" /> +91 98659 30753
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Center-Right: Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-8"
          >
            <h4 className="font-headline font-bold text-[10px] uppercase tracking-[0.4em] text-white/30">About us</h4>
            <nav className="flex flex-col gap-5">
              {['Home', 'Legacy', 'Products', 'Why Us', 'Location'].map((item, i) => (
                <motion.a 
                  key={item} 
                  whileHover={{ x: 10, color: '#fff' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/60 text-lg md:text-xl tracking-tight transition-all font-bold w-fit"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Right: Contact & Mini Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-10"
          >
            <div className="flex lg:justify-end gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, backgroundColor: '#fff', color: '#000', rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all shadow-xl"
              >
                <Star className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            </div>

            <div className="space-y-6 lg:text-right">
              <div className="space-y-2">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Location</p>
                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  Pasumalai, Madurai, TN 625004
                </p>
              </div>

              {/* Reduced size Embed Map */}
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.3)' }}
                className="w-full h-32 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group/map transition-colors"
              >
                <div className="absolute inset-0 bg-white/5 group-hover/map:opacity-0 transition-opacity pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4827002982465!2d78.07729607507663!3d9.89369489020635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb90ccfb68f%3A0x558a7f9e3124a35f!2sSethu%20Store!5e0!3m2!1sen!2sin!4v1776162501550!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>

              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919865930753" 
                className="inline-flex items-center gap-2 bg-[#25D366] text-black px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-black" /> WhatsApp Contact
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Bar ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="pt-10 md:pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-0"
        >
          <div className="space-y-4 w-full md:w-auto flex flex-col items-center md:items-start">
            <p className="text-white/50 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-center md:text-left">
              © {currentYear} Sethu Store Madurai.
            </p>
            <div className="flex justify-center md:justify-start gap-8 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase w-full">
              <motion.a whileHover={{ color: '#fff' }} href="#" className="transition-colors">Privacy</motion.a>
              <motion.a whileHover={{ color: '#fff' }} href="#" className="transition-colors">Terms</motion.a>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:items-end">
            <div className="flex items-center justify-center md:justify-end gap-3 text-white/40 font-bold uppercase tracking-[0.25em] text-[10px] sm:text-[11px] mb-3 w-full">
              <Globe className="w-3.5 h-3.5" /> Heritage Quality
            </div>
            <p className="text-white/50 text-[11px] sm:text-xs font-medium tracking-wide text-center md:text-right">
              Curated with integrity in Madurai, India.
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

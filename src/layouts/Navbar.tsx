import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Store, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Legacy',    href: '#legacy' },
  { name: 'Products',  href: '#products' },
  { name: 'Why Us',    href: '#why-us' },
  { name: 'Location',  href: '#location' },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Section Tracking
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            const link = navLinks.find(l => l.href === `#${id}`);
            if (link) setActiveLink(link.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections mentioned in navLinks
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-[60]"
        style={{ scaleX }}
      />

      <header className={cn(
        'fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ease-in-out',
        scrolled ? 'top-2' : 'top-6',
      )}>
        {/* Pill nav container */}
        <div className={cn(
          'w-[94%] max-w-7xl flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500',
          scrolled
            ? 'glass border border-black/10 shadow-ambient-md'
            : 'bg-white/40 backdrop-blur-md border border-white/20 shadow-ambient',
        )}>

          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Store className="w-5 h-5 text-black" strokeWidth={2.5} />
            </motion.div>
            <span
              className="font-headline font-bold text-[1.25rem] tracking-tighter text-black"
            >
              Sethu Store
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={cn(
                  'relative font-headline font-semibold text-[13px] uppercase tracking-wider transition-colors duration-300 group',
                  activeLink === link.name
                    ? 'text-black'
                    : 'text-black/50 hover:text-black',
                )}
              >
                {link.name}
                <motion.span 
                  className={cn(
                    'absolute -bottom-1 left-0 h-[1.5px] bg-black',
                    activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => window.open('https://www.google.com/search?q=Sethu+Store+Madurai', '_blank')}
                className="rounded-full bg-black hover:bg-[#222222] text-white px-7 py-2.5 font-headline font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-ambient hover:shadow-ambient-md"
                size="sm"
              >
                Visit Store
              </Button>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-1 text-black hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[calc(100%+0.75rem)] left-4 right-4 glass border border-black/10 shadow-ambient-lg rounded-[2rem] overflow-hidden flex flex-col p-8 gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 font-headline font-bold text-xl text-black/70 border-b border-black/5 last:border-0 hover:text-black transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <Store className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  onClick={() => window.open('https://www.google.com/search?q=Sethu+Store+Madurai', '_blank')}
                  className="mt-6 w-full rounded-full bg-black hover:bg-[#222222] text-white py-7 font-headline font-bold text-sm tracking-widest uppercase shadow-ambient"
                >
                  Visit Store
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}


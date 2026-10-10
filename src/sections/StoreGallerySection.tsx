import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowUpRight, Camera } from 'lucide-react';
import { RevealWrapper, EASE_PREMIUM } from '@/components/common/RevealWrapper';

/* ─── Photo manifest ─────────────────────────────────────────────── */
const PHOTOS = [
  { src: '/store-photos/sethustore9.webp',   alt: 'Sethu Store — flagship front view',    hero: true },
  { src: '/store-photos/sethustore1.webp',  alt: 'Store interior — fully stocked shelves' },
  { src: '/store-photos/sethustore2.webp',  alt: 'Fresh groceries & daily essentials' },
  { src: '/store-photos/sethustore3.webp',  alt: 'Spices, snacks & household goods' },
  { src: '/store-photos/sethustore6.webp',  alt: 'Sethu Store exterior — Pasumalai' },
  { src: '/store-photos/sethustore10.webp', alt: 'Daily essentials and grocery shelves' },
  { src: '/store-photos/sethustore4.webp',  alt: 'Wide variety of branded products' },
  { src: '/store-photos/sethustore.webp',    alt: 'Sethu Store storefront signage' },
  { src: '/store-photos/sethustore8.webp',  alt: 'Customer-favourite products' },
];

type Photo = typeof PHOTOS[0];

/* ─── Tile component with 3D Tilt ────────────────────────────────── */
interface TileProps {
  photo: Photo;
  index: number;
  delay?: number;
  className?: string;
  onClick: (i: number) => void;
  objectPos?: string;
}

function Tile({ photo, index, delay = 0, className = '', onClick, objectPos = 'center' }: TileProps) {
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Physics
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });
  
  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHov(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.65, delay, ease: EASE_PREMIUM }}
      onMouseEnter={() => setHov(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(index)}
      style={{ perspective: 1200 }}
      className={`relative cursor-pointer select-none bg-stone-200 rounded-2xl overflow-hidden ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full h-full relative"
      >
        {/* Photo */}
        <motion.img
          animate={{ scale: hov ? 1.08 : 1 }}
          transition={{ duration: 0.72, ease: EASE_PREMIUM }}
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ objectPosition: objectPos }}
        />

        {/* Persistent subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 bg-black/22 pointer-events-none"
        />

        {/* Subtle glint on hover */}
        <motion.div
          animate={hov ? { opacity: 0.75, x: '130%' } : { opacity: 0, x: '-30%' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="absolute -top-8 -left-24 h-[160%] w-14 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none z-20 rotate-[18deg]"
        />

        {/* Zoom badge (pop-up effect using z-translation) */}
        <motion.div
          animate={hov ? { opacity: 1, scale: 1, z: 20 } : { opacity: 0, scale: 0.7, z: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-lg z-30 pointer-events-none"
        >
          <ZoomIn className="w-3.5 h-3.5 text-black" />
        </motion.div>

        {/* Caption slide-up */}
        <motion.div
          animate={hov ? { opacity: 1, y: 0, z: 10 } : { opacity: 0, y: 10, z: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 bg-gradient-to-t from-black/68 to-transparent z-30 pointer-events-none"
        >
          <p className="font-headline font-bold text-white text-[11px] tracking-[0.18em] uppercase leading-tight line-clamp-1">
            {photo.alt}
          </p>
        </motion.div>

        {/* Bottom accent bar */}
        <motion.div
          animate={hov ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/50 origin-left pointer-events-none z-30"
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero banner with Magnetic Cursor ──────────────────────────── */
function HeroBanner({ onClick }: { onClick: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true });
  const [hov, setHov] = useState(false);

  // Magnetic cursor for the arrow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Magnetic pull is stronger closer to the button (bottom right)
    const btnX = rect.left + rect.width - 60;
    const btnY = rect.top + rect.height - 60;
    
    const maxDistance = 300;
    const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);
    
    if (distance < maxDistance) {
      // Pull button towards cursor
      const pull = 1 - Math.pow(distance / maxDistance, 2);
      mouseX.set((e.clientX - btnX) * 0.4 * pull);
      mouseY.set((e.clientY - btnY) * 0.4 * pull);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <div ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE_PREMIUM }}
        onMouseEnter={() => setHov(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setHov(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        onClick={onClick}
        className="relative w-full overflow-hidden cursor-pointer bg-stone-200 group rounded-[1.6rem]"
        style={{ height: 'clamp(280px, 48vw, 560px)' }}
      >
        {/* Full Image */}
        <motion.img
          animate={{ scale: hov ? 1.05 : 1 }}
          transition={{ duration: 1, ease: EASE_PREMIUM }}
          src={PHOTOS[0].src}
          alt={PHOTOS[0].alt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

        {/* Ambient glow pulse */}
        <motion.div
          animate={{ opacity: [0.12, 0.24, 0.12], scale: [1, 1.05, 1] }}
          transition={{ duration: 5.2, ease: 'easeInOut', repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 70% 25%, rgba(255,255,255,0.2), transparent 55%)',
          }}
        />

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2.5 bg-black/45 backdrop-blur-md px-4 py-2 hover:bg-black/60 transition-colors rounded-full z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.55, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]"
          />
          <span className="font-headline font-bold text-white text-[10px] sm:text-xs tracking-[0.2em] uppercase">Open Today</span>
        </motion.div>

        {/* Photo count */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.65, type: 'spring', stiffness: 240, damping: 18 }}
          className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/18 px-3.5 py-2 hover:bg-white/20 transition-colors rounded-full z-10"
        >
          <Camera className="w-3 h-3 text-white/80" />
          <span className="font-headline font-bold text-white text-[10px] sm:text-xs tracking-widest uppercase">
            {PHOTOS.length} Photos
          </span>
        </motion.div>

        {/* Bottom caption row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between z-10"
        >
          <div>
            <p className="font-headline font-bold text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.24em] mb-2 md:mb-3">
              The Flagship Store
            </p>
            <h3
              className="font-headline font-bold text-white leading-[1.05] tracking-tight group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-all"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3.2rem)' }}
            >
              Sethu Store,&nbsp;Vinayagar Nagar
            </h3>
          </div>

          {/* Magnetic Animated arrow */}
          <motion.div
            style={{ x: springX, y: springY }}
            animate={hov
              ? { scale: 1.15, backgroundColor: 'rgba(255,255,255,0.22)', borderColor: 'rgba(255,255,255,0.7)' }
              : { scale: 1,    backgroundColor: 'rgba(255,255,255,0.09)', borderColor: 'rgba(255,255,255,0.28)' }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex w-14 h-14 min-w-[56px] min-h-[56px] rounded-full border-2 items-center justify-center backdrop-blur-sm shrink-0 ml-6 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <motion.div animate={hov ? { rotate: 45 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
              <ZoomIn className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom line wipe */}
        <motion.div
          animate={hov ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/60 origin-left pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

/* ─── Lightbox ────────────────────────────────────────────────────── */
function Lightbox({
  idx, onClose, onPrev, onNext,
}: { idx: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  const photo = PHOTOS[idx];

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   onPrev();
      if (e.key === 'ArrowRight')  onNext();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
    >
      {/* Image card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity:0, scale: 0.92, y: -12 }}
          transition={{ duration: 0.36, ease: EASE_PREMIUM }}
          onClick={e => e.stopPropagation()}
          className="relative max-w-5xl w-full rounded-[1.75rem] overflow-hidden shadow-[0_48px_120px_rgba(0,0,0,0.85)]"
          style={{ maxHeight: '86vh' }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full object-contain bg-[#080808]"
            style={{ maxHeight: '86vh' }}
          />

          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
            <span className="font-headline font-bold text-white/60 text-[10px] tracking-[0.22em] uppercase">
              {idx + 1} / {PHOTOS.length}
            </span>
            <motion.button
              whileHover={{ rotate: 90, scale: 1.12 }}
              whileTap={{ scale: 0.88 }}
              transition={{ duration: 0.22 }}
              onClick={onClose}
              className="w-9 h-9 bg-white/12 hover:bg-white/24 rounded-full flex items-center justify-center text-white pointer-events-auto transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Caption */}
          <motion.div
            key={photo.alt}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 px-8 pt-14 pb-6 bg-gradient-to-t from-black/85 to-transparent pointer-events-none"
          >
            <p className="font-headline font-bold text-white text-sm md:text-[17px] tracking-wide">{photo.alt}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next */}
      {[{ dir: 'prev', Icon: ChevronLeft, action: onPrev, side: 'left-3 md:left-6' },
        { dir: 'next', Icon: ChevronRight, action: onNext, side: 'right-3 md:right-6' }].map(({ dir, Icon, action, side }) => (
        <motion.button
          key={dir}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          onClick={e => { e.stopPropagation(); action(); }}
          className={`absolute ${side} top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/22 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-colors pointer-events-auto z-10 shadow-lg`}
        >
          <Icon className="w-5 h-5" />
        </motion.button>
      ))}

      {/* Dot strip */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
        {PHOTOS.map((_, i) => (
          <motion.div
            key={i}
            animate={{ width: i === idx ? 18 : 6, opacity: i === idx ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            className="h-1.5 rounded-full bg-white"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── CTA bar ─────────────────────────────────────────────────────── */
function CTABar() {
  const [hov, setHov] = useState(false);
  return (
    <RevealWrapper delay={0.15}>
      <motion.div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        animate={hov ? { scale: 1.008, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : { scale: 1, boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        className="relative flex flex-col sm:flex-row items-center justify-between gap-4 bg-black rounded-2xl px-8 md:px-12 py-7 overflow-hidden mt-2"
      >
        {/* Moving shimmer bg */}
        <motion.div
          animate={{ x: hov ? '100%' : '-100%' }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent pointer-events-none"
        />
        <p className="font-headline font-bold text-white text-xl md:text-2xl tracking-tight relative z-10 w-full text-center sm:text-left">
          Come experience it in person.
        </p>
        <motion.a
          href="https://www.google.com/maps/dir/?api=1&destination=Sethu+Store+Madurai"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 5 }}
          className="inline-flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto font-headline font-bold text-[13px] uppercase tracking-widest text-white/75 hover:text-white transition-colors shrink-0 relative z-10"
        >
          Get Directions
          <motion.div
            animate={hov
              ? { rotate: 45, borderColor: 'rgba(255,255,255,0.8)', scale: 1.12, backgroundColor: 'rgba(255,255,255,0.1)' }
              : { rotate: 0,  borderColor: 'rgba(255,255,255,0.18)', scale: 1, backgroundColor: 'rgba(255,255,255,0)' }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>
    </RevealWrapper>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */
export function StoreGallerySection() {
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  const open  = useCallback((i: number) => setLbIdx(i), []);
  const close = useCallback(() => setLbIdx(null), []);
  const prev  = useCallback(() => setLbIdx(i => i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length), []);
  const next  = useCallback(() => setLbIdx(i => i === null ? null : (i + 1) % PHOTOS.length), []);

  return (
    <section id="gallery" className="py-24 md:py-32 px-4 sm:px-6 bg-[#f4f3f1] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 md:mb-10">
          <div>
            <RevealWrapper delay={0.05}>
              <span className="font-headline font-bold text-black/40 tracking-[0.22em] uppercase text-[10px] sm:text-[11px] mb-3 block">
                A Peek Inside
              </span>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h2
                className="font-headline font-extrabold text-black tracking-tight leading-[0.95]"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
              >
                Our Gallery
              </h2>
            </RevealWrapper>
          </div>
          <RevealWrapper delay={0.14} className="hidden md:block">
            <p className="font-body text-[#555] text-[17px] max-w-[280px] leading-relaxed pb-1 border-l-2 border-black/10 pl-6 italic relative top-2">
              Serving Vinayagar Nagar with pride since&nbsp;1975.
            </p>
          </RevealWrapper>
        </div>

        <div className="overflow-hidden">
          {/* ① Hero — full width flagship photo */}
          <RevealWrapper delay={0.1}>
            <HeroBanner onClick={() => open(0)} />
          </RevealWrapper>

          {/* ② Three equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
            {PHOTOS.slice(1, 4).map((p, i) => (
              <Tile
                key={p.src} photo={p} index={1 + i}
                delay={0.07 + i * 0.09}
                onClick={open}
                className="h-[240px] md:h-[300px]"
              />
            ))}
          </div>

          {/* ③ Two-image row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
            <Tile
              photo={PHOTOS[4]} index={4}
              delay={0.07}
              onClick={open}
              objectPos="top center"
              className="h-[300px] lg:h-[380px]"
            />
            <Tile
              photo={PHOTOS[5]} index={5}
              delay={0.14}
              onClick={open}
              className="h-[260px] lg:h-[380px]"
            />
          </div>

          {/* ④ Final trio — balanced close */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
            <Tile photo={PHOTOS[6]} index={6} delay={0.06} onClick={open} className="h-[240px] lg:h-[320px]" />
            <Tile photo={PHOTOS[7]} index={7} delay={0.13} onClick={open} className="h-[240px] lg:h-[320px]" />
            <Tile photo={PHOTOS[8]} index={8} delay={0.2} onClick={open} className="h-[240px] lg:h-[320px]" />
          </div>
        </div>

        {/* ⑤ CTA */}
        <RevealWrapper delay={0.1}>
          <CTABar />
        </RevealWrapper>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lbIdx !== null && (
          <Lightbox idx={lbIdx} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </section>
  );
}

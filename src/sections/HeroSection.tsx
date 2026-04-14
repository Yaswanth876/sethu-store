import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { EASE_PREMIUM } from '@/components/common/RevealWrapper';

// Floating collage cards data
const collageCards = [
  {
    id: 'grains',
    label: 'Legacy Grains',
    caption: 'Pure Rice',
    rotate: '-6deg',
    position: 'top-[5%] -left-[15%] md:top-[8%] md:left-[3%]',
    size: 'w-28 md:w-44',
    imgH: 'h-20 md:h-36',
    delay: 0.4,
    src: '/products/Rice.jpg',
    visibility: 'block',
  },
  {
    id: 'spices',
    label: 'Pure Spices',
    caption: 'Hand-Milled',
    rotate: '3deg',
    position: 'bottom-[12%] -left-[10%] md:bottom-[12%] md:left-[8%]',
    size: 'w-32 md:w-52',
    imgH: 'h-24 md:h-44',
    delay: 0.55,
    src: '/products/Turmeric powder .jpg',
    visibility: 'block',
  },
  {
    id: 'oils',
    label: 'Pure Oils',
    caption: 'Wood-Pressed',
    rotate: '10deg',
    position: 'top-[15%] -right-[15%] md:top-[12%] md:right-[4%]',
    size: 'w-32 md:w-48',
    imgH: 'h-24 md:h-40',
    delay: 0.5,
    src: '/products/Groundnut oil .webp',
    visibility: 'block',
  },
  {
    id: 'household',
    label: 'Essentials',
    caption: 'Heritage Care',
    rotate: '-10deg',
    position: 'bottom-[8%] -right-[12%] md:bottom-[6%] md:right-[10%]',
    size: 'w-28 md:w-44',
    imgH: 'h-20 md:h-36',
    delay: 0.6,
    src: '/products/Agarbatti.jpg',
    visibility: 'block',
  },
  {
    id: 'snacks',
    label: 'Snacks',
    caption: 'Traditional Bites',
    rotate: '-5deg',
    position: 'top-[40%] left-[1%]',
    size: 'w-36 md:w-40',
    imgH: 'h-28 md:h-32',
    delay: 0.75,
    src: '/products/Biscuits.jpg',
    visibility: 'hidden lg:block',
  },
  {
    id: 'sweets',
    label: 'Sweets',
    caption: 'Pure Jaggery',
    rotate: '12deg',
    position: 'bottom-[30%] right-[3%]',
    size: 'w-32 md:w-36',
    imgH: 'h-24 md:h-28',
    delay: 0.8,
    src: '/products/Jaggery.jpg',
    visibility: 'hidden lg:block',
  },
];

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6"
    >

      {/* ── Subtle warm background tint ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.04),transparent)] pointer-events-none" />

      {/* ── Floating Collage Cards (Responsive) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60 md:opacity-100">
        {collageCards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              rotate: card.rotate,
              x: useTransform(springX, (v) => v * (1 + i * 0.15)),
              y: useTransform(springY, (v) => v * (1 + i * 0.15)),
            }}
            transition={{ duration: 1, delay: card.delay, ease: EASE_PREMIUM }}
            className={`absolute ${card.position} ${card.size} ${card.visibility} pointer-events-auto group/card`}
          >
            {/* Added an inner motion div for ambient floating independent of entry animation */}
            <motion.div
              animate={{ y: [0, -8 + (i % 3) * 4, 0] }}
              transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92, rotate: parseFloat(card.rotate) > 0 ? -5 : 5 }}
              className="bg-white rounded-[1rem] p-2 md:p-3.5 collage-float shadow-card cursor-pointer w-full h-full"
            >
              <div className={`w-full ${card.imgH} rounded-lg overflow-hidden mb-2 bg-[#faf9f7]`}>
                <motion.img
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                  src={card.src}
                  alt={card.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-headline text-[7px] md:text-[8px] font-bold text-black uppercase tracking-[0.2em] line-clamp-1">
                {card.label}
              </p>
              <p className="font-body italic text-[9px] md:text-[11px] text-[#404944] opacity-70 line-clamp-1">{card.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-[-5dvh]">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
          className="font-headline font-bold text-black tracking-[0.25em] uppercase text-[10px] mb-8 block opacity-60"
        >
          Since 1975 • Quality Traditions
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.08 } }
          }}
          className="font-headline font-extrabold text-black tracking-tighter leading-[0.9] mb-8"
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
        >
          {['Sethu', 'Store'].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE_PREMIUM }}
          className="font-body text-[#404944] text-xl md:text-2xl max-w-xl mx-auto editorial-text mb-12 opacity-80"
        >
          Pure essentials for the modern household. Curated with heritage and sourced for quality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE_PREMIUM }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="#products"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-10 py-4 rounded-full font-headline font-bold text-[15px] tracking-wide shadow-ambient-md transition-shadow"
          >
            Shop the Collection
          </motion.a>
          <motion.a
            href="#legacy"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="relative font-headline font-bold text-black text-[15px] group flex items-center gap-2"
          >
            Explore Our Heritage
            <motion.span
              className="absolute -bottom-px left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
            />
            <motion.span
              variants={{
                initial: { x: 0 },
                hover: { x: 5 }
              }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-black/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-black/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

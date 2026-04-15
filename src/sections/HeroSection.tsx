import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { EASE_PREMIUM } from '@/components/common/RevealWrapper';

// Floating collage cards — now featuring real store photos
const collageCards = [
  {
    id: 'store-front',
    label: 'Our Store',
    caption: 'Est. 1975',
    rotate: '-6deg',
    position: 'top-[5%] -left-[15%] md:top-[8%] md:left-[3%]',
    size: 'w-28 md:w-44',
    imgH: 'h-20 md:h-36',
    delay: 0.4,
    src: '/store-photos/sethustore.png',
    visibility: 'block',
  },
  {
    id: 'store-interior',
    label: 'Inside the Store',
    caption: 'Fresh Daily',
    rotate: '3deg',
    position: 'bottom-[12%] -left-[10%] md:bottom-[12%] md:left-[8%]',
    size: 'w-32 md:w-52',
    imgH: 'h-24 md:h-44',
    delay: 0.55,
    src: '/store-photos/sethustore1.jpeg',
    visibility: 'block',
  },
  {
    id: 'store-shelves',
    label: 'Our Shelves',
    caption: 'Always Stocked',
    rotate: '10deg',
    position: 'top-[15%] -right-[15%] md:top-[12%] md:right-[4%]',
    size: 'w-32 md:w-48',
    imgH: 'h-24 md:h-40',
    delay: 0.5,
    src: '/store-photos/sethustore2.jpeg',
    visibility: 'block',
  },
  {
    id: 'store-products',
    label: 'Daily Essentials',
    caption: 'Quality Curated',
    rotate: '-10deg',
    position: 'bottom-[8%] -right-[12%] md:bottom-[6%] md:right-[10%]',
    size: 'w-28 md:w-44',
    imgH: 'h-20 md:h-36',
    delay: 0.6,
    src: '/store-photos/sethustore3.jpeg',
    visibility: 'block',
  },
  {
    id: 'store-4',
    label: 'Wide Selection',
    caption: 'Premium Quality',
    rotate: '-5deg',
    position: 'top-[40%] left-[1%]',
    size: 'w-36 md:w-40',
    imgH: 'h-28 md:h-32',
    delay: 0.75,
    src: '/store-photos/sethustore4.jpeg',
    visibility: 'hidden lg:block',
  },
  {
    id: 'store-5',
    label: 'Heritage Space',
    caption: 'Since 1975',
    rotate: '12deg',
    position: 'bottom-[30%] right-[3%]',
    size: 'w-32 md:w-36',
    imgH: 'h-24 md:h-28',
    delay: 0.8,
    src: '/store-photos/sethustore5.jpeg',
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

      {/* ── Store photo background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* The real store photo */}
        <img
          src="/store-photos/sethustore.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm cream wash — keeps text readable */}
        <div className="absolute inset-0 bg-[#faf9f7]/80" />
        {/* Soft vignette at top & bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.06),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f7] to-transparent" />
      </div>

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
        {/* Store Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: EASE_PREMIUM }}
          className="mb-6"
        >
          <img
            src="/store-photos/sethustore-logo1.png"
            alt="Sethu Store Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto drop-shadow-md"
          />
        </motion.div>

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

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { RevealWrapper, EASE_PREMIUM } from '@/components/common/RevealWrapper';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'milk',
    title: '🥛 Milk Products',
    subtitle: 'Fresh Dairy & Ghee',
    badge: 'Fresh Daily',
    src: '/products/Ghee.jpg',
    description: 'Pure, farm-fresh milk, curd, and artisanal ghee for your daily needs.'
  },
  {
    id: 'spices',
    title: '🌶️ Spices & Masala',
    subtitle: 'Pure Hand-Milled Blends',
    badge: 'Artisan',
    src: '/products/Chilli powder .jpg',
    description: 'Unadulterated spices that bring the authentic taste of heritage to your kitchen.'
  },
  {
    id: 'snacks',
    title: '🍪 Snacks & Biscuits',
    subtitle: 'Traditional & Modern Bites',
    badge: 'Best Selection',
    src: '/products/Biscuits.jpg',
    description: 'A curated collection of crispy savories and premium tea-time biscuits.'
  },
  {
    id: 'beverages',
    title: '🥤 Beverages',
    subtitle: 'Tea, Coffee & Juices',
    badge: 'Refreshment',
    src: '/products/Tea.png',
    description: 'From aromatic filter coffee to refreshing fruit blends and standard soft drinks.'
  },
  {
    id: 'personal-care',
    title: '🧼 Soaps & Care',
    subtitle: 'Personal & Body Care',
    badge: 'Premium Care',
    src: '/products/Soap.jpg',
    description: 'Trusted personal care brands and artisanal bathing essentials.'
  },
  {
    id: 'hygiene',
    title: '🪥 Hygiene Essentials',
    subtitle: 'Toothpaste & Oral Care',
    badge: 'Daily Essential',
    src: '/products/Toothpaste .jpg',
    description: 'Complete oral hygiene solutions for every member of the family.'
  },
  {
    id: 'washing',
    title: '🧺 Washing Liquids',
    subtitle: 'Detergents & Cleaners',
    badge: 'Home Care',
    src: '/products/Detergent liquid .jpg',
    description: 'Powerful washing liquids and detergents for a spotless household.'
  },
  {
    id: 'household',
    title: '🏠 Household Goods',
    subtitle: 'Household Requirements',
    badge: 'Pantry Staple',
    src: '/products/Sugar.jpg',
    description: 'Everything else required to keep your modern household running smoothly.'
  },
];

export function CategoriesSection() {
  return (
    <section id="products" className="relative py-32 px-6 bg-[#faf9f7] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(0,0,0,0.04),transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <RevealWrapper delay={0.05}>
              <span className="font-headline font-bold text-black tracking-[0.16em] uppercase text-[11px] mb-4 block text-center md:text-left">
The Collections
</span>
</RevealWrapper>
<RevealWrapper delay={0.12}>
<h2 className="font-headline font-bold text-black tracking-tight text-center md:text-left"
style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
Curated Pantry Essentials
</h2>
</RevealWrapper>
</div>
<RevealWrapper delay={0.2} className="w-full md:w-auto">
<Button variant="outline" className="w-full md:w-auto font-headline font-bold text-black border-black/20 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full whitespace-nowrap hover:bg-white transition-all duration-300 hover:shadow-ambient">
View Entire Catalog
</Button>
          </RevealWrapper>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <RevealWrapper key={product.id} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover="hover"
                initial="initial"
                className="group relative rounded-[1.5rem] overflow-hidden aspect-[3/4.2] cursor-pointer border border-[#bfc9c2]/35 shadow-card bg-white"
              >
                {/* Background Image with Zoom */}
                <motion.div 
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={product.src}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
                </motion.div>

                {/* Glare Effect */}
                <motion.div 
                  variants={{
                    initial: { x: '-100%', opacity: 0 },
                    hover: { x: '100%', opacity: 0.3 }
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white to-transparent skew-x-12 z-10 pointer-events-none"
                />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/95 backdrop-blur-md text-black border border-white/80 px-4 py-1.5 rounded-full text-[10px] tracking-[0.15em] uppercase font-headline font-bold shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Hover Arrow Icon */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, scale: 0.8, rotate: -45, x: -10, y: 10 },
                    hover: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }
                  }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute top-6 right-6 z-20 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-float"
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 h-full flex flex-col justify-end p-8 lg:p-10 text-white">
                  <motion.div
                    variants={{
                      initial: { y: 24 },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                  >
                    <h3 className="font-headline font-bold mb-2 text-white/90 group-hover:text-white transition-colors"
                        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                      {product.title}
                    </h3>
                    
                    <p className="font-body italic text-[1.1rem] text-white/70 leading-snug mb-4 group-hover:text-white/90 transition-colors">
                      {product.subtitle}
                    </p>

                    {/* Hidden on initial, revealed on hover */}
                    <motion.div
                      variants={{
                        initial: { opacity: 0, height: 0, marginTop: 0 },
                        hover: { opacity: 1, height: 'auto', marginTop: 16 }
                      }}
                      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm font-body text-white/70 editorial-text max-w-[90%] group-hover:text-white/80 transition-colors">
                        {product.description}
                      </p>
                      <div className="mt-8 flex items-center gap-3 text-[10px] sm:text-xs font-headline font-bold uppercase tracking-widest text-[#dca400]">
                        Explore Collection <div className="w-10 h-px bg-[#dca400]/50" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Soft Outline on Hover */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0, scale: 0.95 },
                    hover: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-[4px] border border-white/20 pointer-events-none rounded-[1.2rem] z-20"
                />
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}


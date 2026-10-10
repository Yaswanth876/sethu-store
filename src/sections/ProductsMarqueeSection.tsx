import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper } from '@/components/common/RevealWrapper';

const allProducts = [
  { name: 'Rice', src: '/optimized/products/Rice.webp' },
  { name: 'Wheat Flour', src: '/optimized/products/Wheat flour.webp' },
  { name: 'Maida', src: '/optimized/products/Maida.webp' },
  { name: 'Rava', src: '/optimized/products/Rava.webp' },
  { name: 'Sugar', src: '/optimized/products/Sugar.webp' },
  { name: 'Salt', src: '/optimized/products/salt.webp' },
  { name: 'Jaggery', src: '/optimized/products/Jaggery.webp' },
  { name: 'Toor Dal', src: '/optimized/products/Toor dal.webp' },
  { name: 'Urad Dal', src: '/optimized/products/Urad dal.webp' },
  { name: 'Moong Dal', src: '/optimized/products/Moong dal.webp' },
  { name: 'Channa', src: '/optimized/products/Channa.webp' },
  { name: 'Cooking Oil', src: '/optimized/products/Cooking oil.webp' },
  { name: 'Groundnut Oil', src: '/optimized/products/Groundnut oil .webp' },
  { name: 'Ghee', src: '/optimized/products/Ghee.webp' },
  { name: 'Turmeric Powder', src: '/optimized/products/Turmeric powder.webp' },
  { name: 'Chilli Powder', src: '/optimized/products/Chilli powder.webp' },
  { name: 'Coriander Seeds', src: '/optimized/products/Coriander seeds.webp' },
  { name: 'Garam Masala', src: '/optimized/products/Garam masala.webp' },
  { name: 'Pepper', src: '/optimized/products/Pepper.webp' },
  { name: 'Jeera', src: '/optimized/products/Jeera.webp' },
  { name: 'Jeera Powder', src: '/optimized/products/Jeera power.webp' },
  { name: 'Mustard Seeds', src: '/optimized/products/Mustard seed.webp' },
  { name: 'Coffee', src: '/optimized/products/Coffee.webp' },
  { name: 'Milk', src: '/optimized/products/Milk.webp' },
  { name: 'Curd', src: '/optimized/products/Curd.webp' },
  { name: 'Butter', src: '/optimized/products/Butter.webp' },
  { name: 'Paneer', src: '/optimized/products/Paneer.webp' },
  { name: 'Bread', src: '/optimized/products/Bread.webp' },
  { name: 'Bun', src: '/optimized/products/Bun.webp' },
  { name: 'Biscuits', src: '/optimized/products/Biscuits.webp' },
  { name: 'Chocolate', src: '/optimized/products/Chocolate.webp' },
  { name: 'Candy', src: '/optimized/products/Candy.webp' },
  { name: 'Chips', src: '/optimized/products/Chips.webp' },
  { name: 'Mixture', src: '/optimized/products/Mixture.webp' },
  { name: 'Murukku', src: '/optimized/products/Murukku.webp' },
  { name: 'Noodles', src: '/optimized/products/Noodles.webp' },
  { name: 'Pasta', src: '/optimized/products/Pasta.webp' },
  { name: 'Soft Drink', src: '/optimized/products/Soft drink.webp' },
  { name: 'Water Bottle', src: '/optimized/products/Water bottle.webp' },
  { name: 'Soap', src: '/optimized/products/Soap.webp' },
  { name: 'Shampoo', src: '/optimized/products/Shampoo.webp' },
  { name: 'Hair Oil', src: '/optimized/products/Hair oil.webp' },
  { name: 'Toothpaste', src: '/optimized/products/Toothpaste.webp' },
  { name: 'Toothbrush', src: '/optimized/products/Toothbrush.webp' },
  { name: 'Detergent Powder', src: '/optimized/products/Detergent powder.webp' },
  { name: 'Detergent Liquid', src: '/optimized/products/Detergent liquid.webp' },
  { name: 'Dish Wash Liquid', src: '/optimized/products/Dish wash liquid.webp' },
  { name: 'Floor Cleaner', src: '/optimized/products/Floor cleaner.webp' },
  { name: 'Toilet Cleaner', src: '/optimized/products/Toilet cleaner.webp' },
  { name: 'Glass Cleaner', src: '/optimized/products/Glass cleaner.webp' },
  { name: 'Phenyl', src: '/optimized/products/Phenyl.webp' },
  { name: 'Sanitary Napkins', src: '/optimized/products/Sanitary napkins.webp' },
  { name: 'Baby Diapers', src: '/optimized/products/Baby diapers.webp' },
  { name: 'Mosquito Coil', src: '/optimized/products/Mosquito coil.webp' },
  { name: 'Agarbatti', src: '/optimized/products/Agarbatti.webp' },
  { name: 'Match Box', src: '/optimized/products/Match box.webp' },
  { name: 'Candles', src: '/optimized/products/Candles.webp' },
  { name: 'Battery', src: '/optimized/products/Battery.webp' },
  { name: 'Coconut', src: '/optimized/products/Coconut.webp' }
];

export function ProductsMarqueeSection() {
  return (
    <section id="products" className="py-24 bg-[#faf9f7] overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="font-headline font-bold text-black tracking-[0.2em] uppercase text-[11px] mb-4 block opacity-60">
            Premium Inventory
          </span>
          <h2 className="font-headline font-bold text-black tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>
            Our Daily Essentials
          </h2>
        </div>
      </div>

      {/* Single Row Product Marquee - CSS optimized version */}
      <div className="relative pause-marquee-on-hover">
        {/* Soft edge masking for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-[#faf9f7] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-[#faf9f7] to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden py-10">
          <div className="animate-marquee flex gap-8 px-4 whitespace-nowrap">
            {/* Double the list for a perfect seamless infinite loop */}
            {[...allProducts, ...allProducts].map((item, i) => (
              <div 
                key={i} 
                className="w-28 md:w-32 shrink-0 flex flex-col gap-4 group cursor-pointer"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-all duration-300 ease-out group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 lg:group-hover:scale-[1.02] transform-gpu">
                   {/* Overlay for depth */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                   
                   <img 
                     src={item.src} 
                     alt={item.name} 
                     width={128}
                     height={128}
                     loading="lazy"
                     decoding="async"
                     className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500 ease-out transform-gpu" 
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://placehold.co/400x400/f5f5f5/a3a3a3?text=${item.name.replace(/\s+/g, '+')}`;
                     }}
                    />
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="font-headline font-bold text-[11px] md:text-xs text-center text-black/40 group-hover:text-black transition-colors duration-200 tracking-wide uppercase">
                    {item.name}
                  </span>
                  <div className="h-0.5 w-1/2 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 mt-1 opacity-20 transform-gpu" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <RevealWrapper delay={0.5}>
          <p className="font-headline text-[10px] text-black/20 tracking-[0.3em] uppercase">
            Curated For Quality • Sourced Since 1993 • Heritage Excellence
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper } from '@/components/common/RevealWrapper';

const allProducts = [
  { name: 'Rice', src: '/products/Rice.jpg' },
  { name: 'Wheat Flour', src: '/products/Wheat flour .jpg' },
  { name: 'Maida', src: '/products/Maida.jpg' },
  { name: 'Rava', src: '/products/Rava.jpg' },
  { name: 'Sugar', src: '/products/Sugar.jpg' },
  { name: 'Salt', src: '/products/salt.jpg' },
  { name: 'Jaggery', src: '/products/Jaggery.jpg' },
  { name: 'Toor Dal', src: '/products/Toor dal.jpg' },
  { name: 'Urad Dal', src: '/products/Urad dal.jpg' },
  { name: 'Moong Dal', src: '/products/Moong dal.jpg' },
  { name: 'Channa', src: '/products/Channa.jpg' },
  { name: 'Cooking Oil', src: '/products/Cooking oil.jpg' },
  { name: 'Groundnut Oil', src: '/products/Groundnut oil .webp' },
  { name: 'Ghee', src: '/products/Ghee.jpg' },
  { name: 'Turmeric Powder', src: '/products/Turmeric powder .jpg' },
  { name: 'Chilli Powder', src: '/products/Chilli powder .jpg' },
  { name: 'Coriander Seeds', src: '/products/Coriander seeds .jpg' },
  { name: 'Garam Masala', src: '/products/Garam masala.jpg' },
  { name: 'Pepper', src: '/products/Pepper.jpg' },
  { name: 'Jeera', src: '/products/Jeera.jpg' },
  { name: 'Jeera Powder', src: '/products/Jeera power.jpg' },
  { name: 'Mustard Seeds', src: '/products/Mustard seed.jpg' },
  { name: 'Tea', src: '/products/Tea.png' },
  { name: 'Coffee', src: '/products/Coffee.jpg' },
  { name: 'Milk', src: '/products/Milk.jpeg' },
  { name: 'Curd', src: '/products/Curd.jpg' },
  { name: 'Butter', src: '/products/Butter.jpg' },
  { name: 'Paneer', src: '/products/Paneer.jpg' },
  { name: 'Bread', src: '/products/Bread.jpg' },
  { name: 'Bun', src: '/products/Bun.jpg' },
  { name: 'Biscuits', src: '/products/Biscuits.jpg' },
  { name: 'Chocolate', src: '/products/Chocolate .jpg' },
  { name: 'Candy', src: '/products/Candy.jpg' },
  { name: 'Chips', src: '/products/Chips.jpg' },
  { name: 'Mixture', src: '/products/Mixture.jpg' },
  { name: 'Murukku', src: '/products/Murukku.jpg' },
  { name: 'Noodles', src: '/products/Noodles .jpg' },
  { name: 'Pasta', src: '/products/Pasta.jpg' },
  { name: 'Soft Drink', src: '/products/Soft drink.jpg' },
  { name: 'Water Bottle', src: '/products/Water bottle.jpg' },
  { name: 'Soap', src: '/products/Soap.jpg' },
  { name: 'Shampoo', src: '/products/Shampoo.jpg' },
  { name: 'Hair Oil', src: '/products/Hair oil.jpg' },
  { name: 'Toothpaste', src: '/products/Toothpaste .jpg' },
  { name: 'Toothbrush', src: '/products/Toothbrush .jpg' },
  { name: 'Detergent Powder', src: '/products/Detergent powder .jpg' },
  { name: 'Detergent Liquid', src: '/products/Detergent liquid .jpg' },
  { name: 'Dish Wash Liquid', src: '/products/Dish wash liquid .jpg' },
  { name: 'Floor Cleaner', src: '/products/Floor cleaner .jpg' },
  { name: 'Toilet Cleaner', src: '/products/Toilet cleaner .jpg' },
  { name: 'Glass Cleaner', src: '/products/Glass cleaner .jpg' },
  { name: 'Phenyl', src: '/products/Phenyl .jpg' },
  { name: 'Sanitary Napkins', src: '/products/Sanitary napkins .jpg' },
  { name: 'Baby Diapers', src: '/products/Baby diapers .jpg' },
  { name: 'Mosquito Coil', src: '/products/Mosquito coil.jpg' },
  { name: 'Agarbatti', src: '/products/Agarbatti.jpg' },
  { name: 'Match Box', src: '/products/Match box.jpg' },
  { name: 'Candles', src: '/products/Candles.jpg' },
  { name: 'Battery', src: '/products/Battery .jpg' },
  { name: 'Coconut', src: '/products/Coconut .jpg' }
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

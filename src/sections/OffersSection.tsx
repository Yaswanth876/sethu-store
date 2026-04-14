import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper, EASE_PREMIUM } from '@/components/common/RevealWrapper';
import { ShoppingBag } from 'lucide-react';

const offers = [
  {
    id: 'breakfast-kit',
    badge: 'Available Now',
    badgeColor: 'bg-black text-white',
    title: 'The Heritage Breakfast Kit',
    subtitle: 'A curation of hand-pounded poha, artisanal honey, and traditional nuts.',
    price: '₹1,249',
    priceClass: 'text-black',
    ctaLabel: 'Secure Kit',
    ctaClass: 'bg-black text-white',
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    comingSoon: false,
  },
  {
    id: 'monsoon-spices',
    badge: 'Coming Soon',
    badgeColor: 'bg-[#392800] text-white',
    title: 'Spices of the Monsoon',
    subtitle: 'Limited reserve of whole spices sourced directly from mountain estates.',
    price: '₹899',
    priceClass: 'text-[#404944] opacity-50',
    ctaLabel: 'Join Waitlist',
    ctaClass: 'bg-[#e3e2e0] text-black',
    src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    comingSoon: true,
  },
];

export function OffersSection() {
  return (
    <section className="py-32 px-6 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto">

        {/* Divider header */}
        <RevealWrapper delay={0.05} className="flex items-center gap-5 mb-16">
          <div className="h-px bg-[#bfc9c2] flex-1" />
          <span className="font-headline font-bold text-black tracking-[0.16em] uppercase text-[11px] whitespace-nowrap">
            Limited Edition Drops
          </span>
          <div className="h-px bg-[#bfc9c2] flex-1" />
        </RevealWrapper>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {offers.map((offer, i) => (
            <RevealWrapper key={offer.id} delay={0.1 + i * 0.15}>
              <motion.div 
                whileHover="hover" 
                initial="initial"
                className="group cursor-pointer"
              >

                {/* Image Container with Hover Effects */}
                <div className="rounded-[1.25rem] overflow-hidden mb-8 aspect-[16/10] bg-[#efeeec] relative shadow-ambient transition-shadow duration-500 group-hover:shadow-ambient-md">
                  <motion.div
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                    className="w-full h-full"
                  >
                    <img
                      src={offer.src}
                      alt={offer.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Badge */}
                  <span className={`absolute top-6 left-6 ${offer.badgeColor} px-5 py-1.5 rounded-full text-[10px] font-headline font-bold uppercase tracking-widest shadow-lg`}>
                    {offer.badge}
                  </span>

                  {/* Icon floating on hover */}
                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0.5, y: 10 },
                      hover: { opacity: 1, scale: 1, y: 0 }
                    }}
                    className="absolute center inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl text-black">
                      <ShoppingBag size={24} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-2">
                  <h3 className="font-headline font-bold text-black group-hover:text-[#222222] transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>
                    {offer.title}
                  </h3>
                  <p className="font-body italic text-xl text-[#404944] leading-relaxed max-w-lg transition-colors group-hover:text-[#1a1c1b]">
                    {offer.subtitle}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-headline font-bold text-black/40 uppercase tracking-widest mb-1">Price</span>
                      <span className={`font-headline font-bold text-3xl ${offer.priceClass}`}>
                        {offer.price}
                      </span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${offer.ctaClass} px-10 py-4 rounded-full font-headline font-bold text-sm tracking-wide shadow-ambient group-hover:shadow-ambient-md transition-all duration-300`}
                    >
                      {offer.ctaLabel}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}


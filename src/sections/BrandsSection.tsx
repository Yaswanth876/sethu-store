import React from 'react';
import { motion } from 'framer-motion';
import { RevealWrapper } from '@/components/common/RevealWrapper';

const brands = [
  'Aavin',
  'Aachi',
  'Sakthi Masala',
  'Narasus Coffee',
  'Gold Winner',
  'Hatsun',
  'Britannia',
  'Colgate',
  'Surf Excel',
  'Tata Salt',
  'Harpic',
  'Lizol',
  'Colin',
  'Vim',
  'Exo',
  'Domex',
  'Pril',
  'Rin',
  'Pepsodent',
  'Clinic Plus',
  'Sunsilk',
  'Dove',
  'Pantene',
  'Head & Shoulders',
  'Meera',
  'Vatika',
  'Himalaya',
  'Closeup',
  'Dabur Red',
  'Sensodyne',
  'Oral-B',
  'Ariel',
  'Tide',
  'Lux',
  'Santoor',
  'Pears',
  'Hamam',
  'Cinthol',
  'Lifebuoy',
  'Dettol',
  'Coca-Cola',
  'Pepsi',
  'Maggi',
  'Yippee',
  'Top Ramen',
  'Knorr',
  'Sprite',
  'Parle',
  'Sunfeast',
  'ITC',
  'Haldiram’s',
  'Lay’s',
  'Kurkure',
  'Fanta',
  'Thums Up',
  'Maaza',
  'Slice',
  'Tropicana',
  'Tata Tea',
  '3 Roses',
  'Bru',
  'Nescafé',
  'Continental Coffee',
  'Fortune',
  'Amul',
  'Heritage',
  'Milky Mist',
  'Saffola',
  'Nestlé Everyday',
  'Britannia Dairy'
];

export function BrandsSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <RevealWrapper delay={0.1}>
          <div className="text-center mb-16">
            <span className="font-headline font-bold text-black tracking-[0.16em] uppercase text-[11px] mb-4 block">
              Trusted Partners
            </span>
            <h2 className="font-headline font-bold text-black tracking-tight"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Popular Brands Available
            </h2>
          </div>
        </RevealWrapper>

        {/* Brand Scrolling Marquee or Grid */}
        <div className="relative group">
          {/* Subtle gradient fades for the edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Animation */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
              className="flex items-center gap-20 py-4 whitespace-nowrap"
            >
              {[...brands, ...brands].map((brand, i) => (
                <span 
                  key={i} 
                  className="font-headline font-extrabold text-3xl md:text-5xl text-black/10 hover:text-black transition-colors duration-500 cursor-default px-4"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence,type PanInfo } from 'framer-motion';
import { RevealWrapper } from '@/components/common/RevealWrapper';

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    quote: "Sethu Store is one of the best local grocery shops in the area. The store offers fresh vegetables, quality groceries, and all daily essentials at reasonable prices. The shop is neat, well-organized, and the service is friendly and quick.",
    author: "m Lalithaa",
    reviews: "5 reviews",
    initials: "M",
    colors: "from-[#1A73E8] to-[#0d52af]",
    accent: "text-[#1A73E8]",
    quoteColor: "group-hover:text-[#1A73E8]/20"
  },
  {
    id: 2,
    rating: 5,
    quote: "Great place for fresh groceries with friendly staff and fair prices. It's always a pleasant shopping experience! Highly recommended for all your daily needs. 😊",
    author: "Suriya Prakash",
    reviews: "3 reviews",
    initials: "S",
    colors: "from-[#D93025] to-[#a82017]",
    accent: "text-[#D93025]",
    quoteColor: "group-hover:text-[#D93025]/20"
  },
  {
    id: 3,
    rating: 5,
    quote: "Sethu Store isn't just where I buy my rice; it's where I feel part of a tradition. The quality is consistent, but the trust is what keeps us coming back. Absolutely fantastic selection of products.",
    author: "Anand R.",
    reviews: "12 reviews",
    initials: "A",
    colors: "from-[#34A853] to-[#25803d]",
    accent: "text-[#34A853]",
    quoteColor: "group-hover:text-[#34A853]/20"
  }
];

// Helper to render the shared card UI
function ReviewCardContent({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <>
      <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="bg-[#fbbc04]/10 border border-[#fbbc04]/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <div className="flex text-[#fbbc04] gap-0.5">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} fill="currentColor" color="currentColor" className="w-3.5 h-3.5" />
            ))}
          </div>
        </div>
        <Quote size={28} className={`text-black/5 transform -scale-x-100 ${review.quoteColor} transition-colors duration-500`} />
      </div>
      
      <p className="font-body text-black text-[1.05rem] md:text-[1.15rem] leading-relaxed flex-grow mb-6 md:mb-8 font-medium opacity-90">
        "{review.quote}"
      </p>
      
      <div className="h-px bg-black/5 w-full mb-6 group-hover:bg-black/10 transition-colors duration-500" />
      
      <div className="flex items-center gap-4">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.colors} flex items-center justify-center font-headline font-bold text-xl text-white flex-shrink-0 shadow-sm`}
        >
          {review.initials}
        </motion.div>
        <div>
          <h4 className={`font-headline font-bold text-base text-black leading-tight group-hover:${review.accent.split(' ')[0]} transition-colors duration-300`}>
            {review.author}
          </h4>
          <p className="font-body text-[#404944] text-[11px] uppercase tracking-wider mt-1 opacity-70">{review.reviews}</p>
        </div>
      </div>
    </>
  );
}

type DeckItem = 
  | { type: 'review'; id: string; data: typeof REVIEWS[0] }
  | { type: 'action'; id: string; data?: never };

export function TestimonialsSection() {
  // Append a special action card at the end of the deck
  const DECK_ITEMS: DeckItem[] = [
    ...REVIEWS.map(r => ({ type: 'review' as const, id: r.id.toString(), data: r })),
    { type: 'action' as const, id: 'action-card' }
  ];

  // State for mobile stacked deck
  const [cards, setCards] = useState(DECK_ITEMS);

  // Swipe logic for the deck
  const handleDragEnd = (_: any, info: PanInfo) => {
    // If swiped far enough left or right
    if (Math.abs(info.offset.x) > 50 || Math.abs(info.velocity.x) > 500) {
      // Cycle the deck: move the first item to the back
      setCards((prev) => {
        const newCards = [...prev];
        const frontCard = newCards.shift();
        if (frontCard) newCards.push(frontCard);
        return newCards;
      });
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[#faf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header content... */}
        <div className="flex flex-col items-center mb-16 text-center">
          <RevealWrapper delay={0.05}>
            <span className="font-headline font-bold text-black tracking-[0.16em] uppercase text-[11px] mb-6 block">
              Community Voices
            </span>
          </RevealWrapper>
          
          <RevealWrapper delay={0.1}>
            <div className="flex items-center gap-5">
              <span className="text-6xl md:text-7xl font-headline font-bold text-black tracking-tighter leading-none">5.0</span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex text-[#fbbc04]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" color="currentColor" className="w-5 h-5 md:w-6 md:h-6" />
                  ))}
                </div>
                <span className="font-body text-[#404944] text-[13px] md:text-base font-medium flex items-center gap-1.5 opacity-80 mt-0.5">
                  <img src="https://img.icons8.com/color/48/google-logo.png" className="w-4 h-4 object-contain inline-block" alt="Google" />
                  44 reviews
                </span>
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* --- DESKTOP GRID DIRECTORY (Hidden on Mobile) --- */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {REVIEWS.map((review, i) => (
            <RevealWrapper key={review.id} delay={0.2 + (i * 0.1)} className="h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] flex flex-col h-full relative group hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                <ReviewCardContent review={review} />
              </motion.div>
            </RevealWrapper>
          ))}
        </div>

        {/* --- MOBILE STACKED DECK (Hidden on Desktop) --- */}
        <div className="md:hidden relative h-[450px] w-full flex items-center justify-center mb-8">
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => {
              // Calculate deck stacking physics
              const isFront = index === 0;
              const yOffset = index * 16;
              const scale = 1 - index * 0.05;
              const zIndex = DECK_ITEMS.length - index;
              const opacity = index > 2 ? 0 : 1; // max 3 visible cards

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ 
                    opacity, 
                    scale, 
                    y: yOffset,
                    zIndex
                  }}
                  exit={{ opacity: 0, x: -200, scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25,
                    opacity: { duration: 0.2 }
                  }}
                  drag={isFront ? "x" : false} // Only top card is swipable
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={handleDragEnd}
                  whileTap={isFront ? { cursor: "grabbing" } : {}}
                  className={`absolute w-[88vw] h-full bg-white rounded-[2rem] p-8 shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-black/[0.03] flex flex-col group ${isFront ? 'cursor-grab' : ''}`}
                  style={{
                     transformOrigin: "top center"
                  }}
                >
                  {card.type === 'action' ? (
                    // --- Special Action Card UI ---
                    <div className="flex flex-col items-center justify-center text-center h-full gap-4 flex-grow">
                      <div className="w-20 h-20 bg-[#fbbc04]/10 rounded-full flex items-center justify-center mb-2">
                        <img src="https://img.icons8.com/color/48/google-logo.png" className="w-10 h-10 object-contain" alt="Google" />
                      </div>
                      <h3 className="font-headline font-bold text-2xl text-black">Read 44+ Reviews</h3>
                      <p className="font-body text-[#404944] text-[13px] opacity-80 mb-4 px-2 leading-relaxed">
                        Discover what the Madurai community is saying about our fresh products and service.
                      </p>
                      
                      <motion.a 
                        whileTap={{ scale: 0.95 }}
                        href="https://www.google.com/search?sca_esv=fa300c1ed4c4332d&biw=1536&bih=776&sxsrf=ANbL-n5e9dTUthZMCxw1VWhOQazIlntElg%3A1776163949494&q=Sethu%20Store&stick=H4sIAAAAAAAAAONgU1I1qDBOMjBITkuyNEgGkmYWaVYGFaamFonmaZapxoZGJonGpmmLWLmDU0syShWCS_KLUgFcrr3pNwAAAA&mat=CZrPZtJcKAe1&ved=2ahUKEwiit5aqlu2TAxXZTGwGHQTCFCQQrMcEegQIMhAC#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-headline font-bold text-base hover:shadow-xl transition-shadow duration-300 w-full justify-center pointer-events-auto"
                        // Stop drag propagation so the button works correctly instead of swiping the card 
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        Read on Google
                      </motion.a>
                    </div>
                  ) : (
                    // --- Standard Review Card UI ---
                    <ReviewCardContent review={card.data!} />
                  )}
                  
                  {/* Subtle hint that card is swipable on top */}
                  {isFront && card.type !== 'action' && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-40">
                      <ChevronRight className="w-4 h-4 rotate-180 animate-pulse" />
                      <span className="font-body text-[10px] uppercase tracking-widest font-bold">Swipe</span>
                      <ChevronRight className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                  {isFront && card.type === 'action' && (
                     <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-40">
                      <ChevronRight className="w-4 h-4 -translate-x-1 rotate-180 animate-pulse" />
                      <span className="font-body text-[10px] uppercase tracking-widest font-bold text-center">Swipe to restart</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Action Button (Desktop Only since Mobile has it in the deck) */}
        <div className="hidden md:flex justify-center">
          <RevealWrapper delay={0.5}>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.google.com/search?sca_esv=fa300c1ed4c4332d&biw=1536&bih=776&sxsrf=ANbL-n5e9dTUthZMCxw1VWhOQazIlntElg%3A1776163949494&q=Sethu%20Store&stick=H4sIAAAAAAAAAONgU1I1qDBOMjBITkuyNEgGkmYWaVYGFaamFonmaZapxoZGJonGpmmLWLmDU0syShWCS_KLUgFcrr3pNwAAAA&mat=CZrPZtJcKAe1&ved=2ahUKEwiit5aqlu2TAxXZTGwGHQTCFCQQrMcEegQIMhAC#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white border border-black/10 text-black rounded-full font-headline font-bold text-lg shadow-[0_10px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              {/* Shine effect on hover */}
              <motion.div 
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-black/[0.04] to-transparent skew-x-[30deg]"
              />

              <motion.img 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                src="https://img.icons8.com/color/48/google-logo.png" 
                className="w-5 h-5 object-contain" 
                alt="Google" 
              />
              Read More on Google
            </motion.a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

// Shared premium easing
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// Reusable variants
export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_PREMIUM },
  }),
};

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
  once?: boolean;
}

export function RevealWrapper({
  children,
  delay = 0,
  className = '',
  yOffset = 28,
  once = true,
}: RevealWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: EASE_PREMIUM }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: 'primary' | 'tertiary';
  withArrow?: boolean;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = 'primary', className, withArrow, ...props }, ref) => {
    
    if (variant === 'tertiary') {
      return (
        <motion.button
          ref={ref}
          whileHover="hover"
          className={cn(
            "relative inline-flex items-center gap-2 group font-headline font-medium text-[#5d5e61] text-[15px]",
            className
          )}
          {...props}
        >
          {children}
          {withArrow && <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          <motion.div
            className="absolute -bottom-1 left-0 h-[2px] bg-secondary"
            initial={{ width: '40%' }}
            variants={{
              hover: { width: '100%' }
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </motion.button>
      );
    }
    
    // Primary Variant
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, filter: 'brightness(1.05)' }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[24px]",
          "text-surface bg-gradient-to-br from-primary to-primary-container",
          "font-headline font-bold text-sm tracking-wide shadow-ambient",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {withArrow && <ChevronRight className="w-5 h-5 relative -right-1" />}
      </motion.button>
    );
  }
);
AnimatedButton.displayName = 'AnimatedButton';

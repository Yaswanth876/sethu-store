import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function IconCard({ icon: Icon, title, description, className }: IconCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'bg-[#f4f3f1] rounded-[1rem] p-8 md:p-10',
        'flex flex-col gap-6',
        className,
      )}
    >
      <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center text-black">
        <Icon className="w-7 h-7" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-headline font-semibold text-xl text-[#1a1c1b] mb-3">{title}</h3>
        <p className="text-[#404944] leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}


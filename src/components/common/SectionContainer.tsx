import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Skip the inner padding wrapper (for full-bleed sections) */
  flush?: boolean;
}

export function SectionContainer({
  children,
  className,
  id,
  flush = false,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn('w-full', className)}>
      {flush ? (
        children
      ) : (
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 w-full">
          {children}
        </div>
      )}
    </section>
  );
}

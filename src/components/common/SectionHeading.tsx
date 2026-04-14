import React from 'react';
import { cn } from '@/lib/utils';
import { RevealWrapper } from './RevealWrapper';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleColor?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  titleColor = 'black',
  className,
}: SectionHeadingProps) {
  return (
    <RevealWrapper className={cn(align === 'center' ? 'text-center' : '', className)}>
      {subtitle && (
        <span className="font-headline font-bold uppercase tracking-[0.16em] text-[11px] mb-4 block"
              style={{ color: titleColor }}>
          {subtitle}
        </span>
      )}
      <h2
        className="font-headline font-bold tracking-tight leading-[1.05]"
        style={{ color: titleColor, fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
      >
        {title}
      </h2>
    </RevealWrapper>
  );
}

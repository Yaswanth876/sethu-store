import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-black/30',
  {
    variants: {
      variant: {
        default: 'bg-black text-white shadow-xs hover:bg-[#222222]',
        destructive: 'bg-[#ba1a1a] text-white shadow-xs hover:bg-[#93000a]',
        outline: 'border border-[#bfc9c2] bg-white hover:bg-[#f4f3f1] text-black',
        secondary: 'bg-[#efeeec] text-black hover:bg-[#e3e2e0]',
        ghost: 'hover:bg-[#efeeec] text-black',
        link: 'text-black underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
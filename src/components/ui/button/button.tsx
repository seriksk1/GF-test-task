import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center tracking-normal font-bold rounded-[4px] w-fit h-fit transition-colors cursor-pointer disabled:cursor-not-allowed gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 text-base-white hover:bg-brand-700 disabled:bg-grey-200 disabled:text-grey-600',
        outline:
          'text-grey-900 outline-1 outline-grey-300 bg-base-white hover:bg-grey-50 hover:outline-grey-400 disabled:bg-base-white disabled:outline-grey-200 disabled:text-grey-600',
        text: 'bg-transparent text-brand-500 hover:text-brand-600 disabled:text-grey-600',
      },
      size: {
        medium: 'py-1.5 px-4 text-sm leading-5',
        small: 'py-1 px-3 text-(length:--text-button-small) leading-5',
        large: 'py-2 px-4 text-base leading-6',
        icon: 'size-7 p-1 text-(length:--text-button-small) leading-5 [&>svg]:w-full [&>svg]:h-full',
      },
      destructive: {
        on: '',
        off: '',
      },
    },
    compoundVariants: [
      {
        destructive: 'on',
        variant: 'primary',
        class: 'bg-red-500 hover:bg-red-600',
      },
      {
        destructive: 'on',
        variant: 'outline',
        class: 'outline-red-300 text-red-600 hover:outline-red-400 hover:bg-base-white',
      },
      {
        destructive: 'on',
        variant: 'text',
        class: 'text-red-600 hover:text-red-700',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      destructive: 'off',
    },
  }
);

function Button({
  className,
  variant,
  size,
  destructive,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, destructive, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

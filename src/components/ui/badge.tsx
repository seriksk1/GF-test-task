import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { CloseIcon } from '../icons';

const badgeVariants = cva(
  'inline-flex items-center gap-x-1 py-0.5 rounded-[4px] font-medium',
  {
    variants: {
      variant: {
        default: 'bg-grey-50 border-1 border-grey-300 text-grey-800',
        success: 'bg-green-50 border-1 border-green-300 text-green-800',
        warning: 'bg-orange-50 border-1 border-orange-300 text-orange-800',
        error: 'bg-red-50 border-1 border-red-300 text-red-800',
      },
      size: {
        small: 'caption px-1.5',
        medium: 'body2 px-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

function Badge({
  className,
  variant,
  size,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { showCloseButton?: boolean }) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <CloseIcon className="size-3 cursor-pointer hover:opacity-75" />
      )}
    </span>
  );
}

export { Badge, badgeVariants };

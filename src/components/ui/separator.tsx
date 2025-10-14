import { cn } from '@/lib/utils';
import React, { HTMLProps } from 'react';

export function Separator({ className }: HTMLProps<HTMLDivElement>) {
  return <div className={cn('border-b-1 border-grey-200 w-full', className)} />;
}

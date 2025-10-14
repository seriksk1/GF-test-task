import React from 'react';
import { DefaultIconProps } from '../types';
import { ChevronRightIcon } from './chevron-right-icon';
import { cn } from '@/lib/utils';

export function ChevronLeftIcon({ className, ...props }: DefaultIconProps) {
  return <ChevronRightIcon className={cn('rotate-180', className)} {...props} />;
}

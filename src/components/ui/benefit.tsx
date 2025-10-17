import React, { HTMLProps, PropsWithChildren } from 'react';

import { CircleCheckFilledIcon } from '../icons';

import { ParagraphSmall } from './typography';

import { cn } from '@/lib/utils';

export function BenefitItem({ children }: PropsWithChildren) {
  return (
    <li className="flex gap-x-2">
      <CircleCheckFilledIcon className="size-5" />
      <ParagraphSmall className="text-grey-600 font-medium flex-1">
        {children}
      </ParagraphSmall>
    </li>
  );
}

export function BenefitsList({ children, className }: HTMLProps<HTMLUListElement>) {
  return <ul className={cn('flex flex-col gap-y-2', className)}>{children}</ul>;
}

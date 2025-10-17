import React from 'react';

import { DefaultIconProps } from '../types';

export function ChevronRightIcon({
  className,
  stroke = '#384250',
  ...props
}: DefaultIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      className={className}
      {...props}
    >
      <path
        d="M9 6L15 12L9 18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

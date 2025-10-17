import React from 'react';

import { DefaultIconProps } from '../types';

export function PlusIcon({ className, stroke = '#384250', ...props }: DefaultIconProps) {
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
        d="M12 5V19M5 12H19"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

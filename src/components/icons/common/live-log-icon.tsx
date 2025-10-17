import React from 'react';

import { DefaultIconProps } from '../types';

export function LiveLogIcon({ className, fill = '#00B67A', ...props }: DefaultIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="6" fill={fill} fillOpacity="0.2" />
      <circle cx="12" cy="12" r="2.5" fill={fill} />
    </svg>
  );
}

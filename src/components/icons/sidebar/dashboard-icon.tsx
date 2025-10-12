import React from 'react';
import { DefaultIconProps } from '../types';

export function DashboardIcon({
  className,
  stroke = '#384250',
  ...props
}: DefaultIconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4H10V12H4V4Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16H10V20H4V16Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12H20V20H14V12Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4H20V8H14V4Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

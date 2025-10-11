import React from 'react';

import { cn } from '@/lib/utils';

export function Heading1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('font-default h1 tracking-[-1px] font-normal', className)}
      {...props}
    />
  );
}

export function Heading2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn('font-default h2 tracking-[-0.5px] font-normal', className)}
      {...props}
    />
  );
}

export function Heading3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('font-default h3 tracking-normal font-normal', className)}
      {...props}
    />
  );
}

export function Heading4({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn('font-default h4 tracking-normal font-semibold', className)}
      {...props}
    />
  );
}

export function Heading5({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn('font-default h5 tracking-normal font-semibold', className)}
      {...props}
    />
  );
}

export function Heading6({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      className={cn('font-default h6 tracking-normal font-semibold', className)}
      {...props}
    />
  );
}

export function Subtitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn('font-default subtitle1 tracking-[0.2px] font-semibold', className)}
      {...props}
    />
  );
}

export function SubtitleSmall({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn('font-default subtitle2 tracking-[0.2px] font-semibold', className)}
      {...props}
    />
  );
}

export function Paragraph({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('font-default body1 tracking-normal font-semibold', className)}
      {...props}
    />
  );
}

export function ParagraphSmall({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('font-default body2 tracking-normal font-normal', className)}
      {...props}
    />
  );
}

export function Caption({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('font-default caption tracking-[0.2px] font-normal', className)}
      {...props}
    />
  );
}

export function OverlineText({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'font-default text-concept-black typography-overline tracking-[0.7px] font-semibold uppercase',
        className
      )}
      {...props}
    />
  );
}

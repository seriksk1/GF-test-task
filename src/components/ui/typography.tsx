import React from 'react';

import { cn } from '@/lib/utils';

export function Heading1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'font-default text-size-h1 leading-h1 tracking-[-1px] font-normal',
        className
      )}
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
      className={cn(
        'font-default text-size-h2 leading-h2 tracking-[-0.5px] font-normal',
        className
      )}
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
      className={cn(
        'font-default text-size-h3 leading-h3 tracking-normal font-normal',
        className
      )}
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
      className={cn(
        'font-default text-size-h4 leading-h4 tracking-normal font-semibold',
        className
      )}
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
      className={cn(
        'font-default text-size-h5 leading-h5 tracking-normal font-semibold',
        className
      )}
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
      className={cn(
        'font-default text-size-h6 leading-h6 tracking-normal font-semibold',
        className
      )}
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
      className={cn(
        'font-default text-size-subtitle1 leading-subtitle1 tracking-[0.2px] font-semibold',
        className
      )}
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
      className={cn(
        'font-default text-size-subtitle2 leading-subtitle2 tracking-[0.2px] font-semibold',
        className
      )}
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
      className={cn(
        'font-default text-size-body1 leading-body1 tracking-normal font-semibold',
        className
      )}
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
      className={cn(
        'font-default text-size-body2 leading-body2 tracking-normal font-normal',
        className
      )}
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
      className={cn(
        'font-default text-size-caption tracking-[0.2px] leading-caption font-normal',
        className
      )}
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
        'font-default text-concept-black text-size-overline tracking-[0.7px] leading-overline font-semibold uppercase',
        className
      )}
      {...props}
    />
  );
}

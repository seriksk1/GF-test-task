import React from 'react';

import { cn } from '@/lib/utils';

export function Heading1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('font-default h1 font-normal', className)} {...props} />;
}

export function Heading2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('font-default h2 font-normal', className)} {...props} />;
}

export function Heading3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('font-default h3 font-normal', className)} {...props} />;
}

export function Heading4({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn('font-default h4 font-semibold', className)} {...props} />;
}

export function Heading5({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn('font-default h5 font-semibold', className)} {...props} />;
}

export function Heading6({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h6 className={cn('font-default h6 font-semibold', className)} {...props} />;
}

export function Subtitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn('font-default subtitle1 font-semibold', className)} {...props} />
  );
}

export function SubtitleSmall({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn('font-default subtitle2 font-semibold', className)} {...props} />
  );
}

export function Paragraph({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-default body1 font-semibold', className)} {...props} />;
}

export function ParagraphSmall({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-default body2 font-normal', className)} {...props} />;
}

export function Caption({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-default caption font-normal', className)} {...props} />;
}

export function OverlineText({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'font-default text-concept-black typography-overline font-semibold uppercase',
        className
      )}
      {...props}
    />
  );
}

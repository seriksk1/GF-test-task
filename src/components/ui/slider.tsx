'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';
import { FourDotsIcon } from '../icons';
import { Paragraph } from './typography';

function Slider({
  className,
  defaultValue,
  value,
  tooltip,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & { tooltip?: string }) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          'bg-grey-100 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full'
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            'bg-brand-400 absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn(
            'relative flex bg-base-white cursor-grab h-fit w-fit p-1.5 border-1 border-brand-500 rounded-[3px]',
            'active:cursor-grabbing active:border-brand-900 active:outline-none',
            'focus-visible:border-brand-900 focus-visible:border-1 focus-visible:outline-none'
          )}
        >
          <FourDotsIcon className={cn('size-2.5')} />
          {tooltip && (
            <>
              <div className="absolute whitespace-nowrap translate-x-[-50%] left-1/2 bottom-[calc(30px)] bg-brand-500 py-1 px-2 rounded-[4px]">
                <Paragraph className="text-base-white">{tooltip}</Paragraph>
              </div>
              <div
                className={cn(
                  'absolute translate-x-[-50%] left-1/2 bottom-[calc(22px)] bg-brand-500 w-2.5 h-2',
                  'after:absolute after:inline-flex after:top-0 after:left-[7px] after:size-[7px] after:rounded-full after:bg-base-white',
                  'before:absolute before:inline-flex before:top-0 before:right-[7px] before:size-[7px] before:rounded-full before:bg-base-white'
                )}
              ></div>
            </>
          )}
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };

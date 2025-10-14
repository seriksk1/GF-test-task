'use client';

import * as React from 'react';
import { Slider } from '@/components/ui/slider';
import { ParagraphSmall } from './ui';

export function QuantitySlider({
  value,
  tooltip,
  quantitySteps,
  onChange,
}: {
  value: number;
  tooltip?: string;
  quantitySteps: number[];
  onChange: (value: number) => void;
}) {
  const index = React.useMemo(() => {
    const i = quantitySteps.findIndex((v) => v === value);
    return i === -1 ? 0 : i;
  }, [value, quantitySteps]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Slider
        min={0}
        max={quantitySteps.length - 1}
        step={1}
        value={[index]}
        tooltip={tooltip}
        onValueChange={(v) => onChange(quantitySteps[v[0]])}
      />
      <div className="relative flex justify-between">
        {quantitySteps.map((quantity, i) => (
          <ParagraphSmall
            key={quantity}
            className="absolute text-grey-500 font-medium tracking-[-0.2px] translate-x-[-50%]"
            style={{
              left: `calc(${(i / (quantitySteps.length - 1)) * 100}% + ${11.69 + i * -2.52}px)`,
            }}
          >
            {quantity}
          </ParagraphSmall>
        ))}
      </div>
    </div>
  );
}

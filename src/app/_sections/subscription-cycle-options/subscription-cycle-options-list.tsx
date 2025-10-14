import React from 'react';
import { SubscriptionCycleOption } from './types';
import { SubscriptionCycleOptionItem } from './subscription-cycle-option-item';
import { RadioGroup } from '@/components/ui';

export interface SubscriptionCycleOptionsListProps {
  options: SubscriptionCycleOption[];
  selectedOption: SubscriptionCycleOption;
  onOptionSelect: (option: SubscriptionCycleOption) => void;
}

export function SubscriptionCycleOptionsList({
  options,
  selectedOption,
  onOptionSelect,
}: SubscriptionCycleOptionsListProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <RadioGroup value={selectedOption.period}>
        {options.map((option) => (
          <SubscriptionCycleOptionItem
            key={option.period}
            option={option}
            isSelected={selectedOption.period === option.period}
            onOptionSelect={onOptionSelect}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

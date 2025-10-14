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
      <RadioGroup defaultValue={options[0].text}>
        {options.map((option) => (
          <SubscriptionCycleOptionItem
            key={option.text}
            option={option}
            isSelected={selectedOption.text === option.text}
            onOptionSelect={onOptionSelect}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

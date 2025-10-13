'use client';

import { SubtitleSmall } from '@/components/ui';
import React from 'react';
import { SubscriptionCycleOption } from './types';
import { SubscriptionCycleOptionsList } from './subscription-cycle-options-list';

export interface SubscriptionCycleOptionsProps {
  options: SubscriptionCycleOption[];
}

export function SubscriptionCycleOptions({ options }: SubscriptionCycleOptionsProps) {
  const [selectedOption, setSelectedOptions] = React.useState(options[1]);

  function onOptionSelect(option: SubscriptionCycleOption) {
    setSelectedOptions(option);
  }

  return (
    <div className="flex flex-col gap-y-2">
      <SubtitleSmall>Select subscription cycle</SubtitleSmall>
      <SubscriptionCycleOptionsList
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={onOptionSelect}
      />
    </div>
  );
}

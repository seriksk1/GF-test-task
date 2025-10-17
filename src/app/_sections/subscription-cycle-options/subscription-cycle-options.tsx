'use client';

import React from 'react';

import { SubscriptionCycleOptionsList } from './subscription-cycle-options-list';
import { SubscriptionCycleOption } from './types';

import { SubtitleSmall } from '@/components';
import { useOrder } from '@/contexts/order-context';

interface SubscriptionCycleOptionsProps {
  options: SubscriptionCycleOption[];
}

export default function SubscriptionCycleOptions({
  options,
}: SubscriptionCycleOptionsProps) {
  const { changeOrder, subscription } = useOrder();

  function onOptionSelect(option: SubscriptionCycleOption) {
    changeOrder({ subscription: option });
  }

  return (
    <div className="flex flex-col gap-y-2">
      <SubtitleSmall>Select subscription cycle</SubtitleSmall>
      <SubscriptionCycleOptionsList
        options={options}
        selectedOption={subscription}
        onOptionSelect={onOptionSelect}
      />
    </div>
  );
}

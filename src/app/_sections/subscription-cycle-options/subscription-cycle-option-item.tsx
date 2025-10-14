import { Subtitle, Badge, RadioGroupItem } from '@/components/ui';
import { cn } from '@/lib/utils';
import React from 'react';
import { SubscriptionCycleOption } from './types';

export interface SubscriptionCycleOptionItemProps {
  option: SubscriptionCycleOption;
  isSelected: boolean;
  onOptionSelect: (option: SubscriptionCycleOption) => void;
}

export function SubscriptionCycleOptionItem({
  option,
  isSelected,
  onOptionSelect,
}: SubscriptionCycleOptionItemProps) {
  const { discountPercentage, monthsPeriod: period } = option;

  function handleOptionSelect() {
    onOptionSelect(option);
  }

  return (
    <div
      className={cn(
        'flex px-4 py-3 bg-base-white border border-grey-300 gap-x-2 items-center rounded-[4px] cursor-pointer',
        { 'bg-brand-50 outline-2 outline-brand-500': isSelected }
      )}
      onClick={handleOptionSelect}
    >
      {/* Radio button component */}
      <RadioGroupItem value={String(period)} />
      <Subtitle className="text-grey-800 text-base">
        {period} month{period > 1 ? 's' : ''}
      </Subtitle>
      {discountPercentage && (
        <Badge variant="success" size="small">
          {discountPercentage}%
        </Badge>
      )}
    </div>
  );
}

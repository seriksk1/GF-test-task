import { Subtitle, Caption } from '@/components/ui';
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
  const { badgeText, text } = option;

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
      <div
        className={cn('border border-grey-300 bg-base-white size-4 rounded-full', {
          'border-5 border-brand-500': isSelected,
        })}
      />
      <Subtitle className="text-grey-800 text-base">{text}</Subtitle>
      {/* Badge component */}
      {badgeText && (
        <Caption className="font-medium text-green-80 py-0.5 px-1.5 outline outline-green-300 bg-green-50 rounded-[4px]">
          {badgeText}
        </Caption>
      )}
    </div>
  );
}

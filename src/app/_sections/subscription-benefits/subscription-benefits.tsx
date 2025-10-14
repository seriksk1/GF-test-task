import { BenefitItem, BenefitsList, Heading6, Paper } from '@/components/ui';
import React from 'react';

import { subscriptionBenefits } from './data';
import { cn } from '@/lib/utils';

export function SubscriptionBenefits() {
  return (
    <Paper>
      <div className="flex flex-col gap-y-4">
        <Heading6 className="text-grey-800">All plans include</Heading6>
        <BenefitsList
          className={cn(
            'grid grid-cols-2 grid-rows-4 gap-y-2 gap-x-4',
            'max-sm:grid-cols-1'
          )}
        >
          {subscriptionBenefits.map((benefit) => (
            <BenefitItem key={benefit}>{benefit}</BenefitItem>
          ))}
        </BenefitsList>
      </div>
    </Paper>
  );
}

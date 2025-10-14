import { CircleCheckFilledIcon } from '@/components/icons';
import { Heading6, Paper, ParagraphSmall } from '@/components/ui';
import React from 'react';

const benefits: string[] = [
  'Unlimited Concurrent Sessions',
  'Automatic Proxy Potation',
  'Proxy Servers in 195+ Countries',
  'API access',
  'Country, Region, City, or ISP Targeting',
  'HTTP, SOCKS5, and UDP support',
  'Email and Chat Support',
  'Custom Responses for Your Proxy Roquests',
];

export function SubscriptionBenefits() {
  return (
    <Paper>
      <div className="flex flex-col gap-y-4">
        <Heading6 className="text-grey-800">All plans include</Heading6>
        <ul className="grid grid-cols-2 grid-rows-4 gap-y-2 gap-x-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-x-2">
              <CircleCheckFilledIcon className="size-5" />
              <ParagraphSmall className="text-grey-600 font-medium flex-1">
                {benefit}
              </ParagraphSmall>
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  );
}

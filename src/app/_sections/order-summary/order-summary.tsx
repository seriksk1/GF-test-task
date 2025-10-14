'use client';

import { useOrder } from '@/app/_providers';
import {
  BenefitItem,
  BenefitsList,
  Button,
  Heading4,
  Heading5,
  Input,
  ParagraphSmall,
  Subtitle,
  SubtitleSmall,
} from '@/components/ui';
import React from 'react';
import { OrderOption } from './types';

interface OrderSummaryProps {
  subtitle: string;
  benefits?: string[];
}

export function OrderSummary({ subtitle, benefits = [] }: OrderSummaryProps) {
  const { subscription, totalPrice, datacenterLocation, ipsQuantity, pricePerIp } =
    useOrder();

  const selectedOrderOptions: OrderOption[] = [
    { label: 'Quantity of IP', value: `${ipsQuantity} IPs` },
    { label: 'Location', value: datacenterLocation.name },
    { label: 'Price per IP', value: `$${pricePerIp.toFixed(2)}` },
    {
      label: 'Subscription period',
      value: `${subscription.monthsPeriod} month${subscription.monthsPeriod > 1 ? 's' : ''}`,
    },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      <Heading5>Order summary</Heading5>
      <div className="flex flex-col gap-y-4">
        <Subtitle>{subtitle}</Subtitle>

        {/* Benefits component */}
        {!!benefits.length && (
          <BenefitsList>
            {benefits.map((benefit) => (
              <BenefitItem key={benefit}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
        )}

        {/* Picked options component */}
        <ul className="flex flex-col gap-y-2">
          {selectedOrderOptions.map(({ value, label }) => (
            <li key={label} className="flex justify-between items-center gap-x-4">
              <ParagraphSmall className="font-medium text-grey-600">
                {label}
              </ParagraphSmall>
              <ParagraphSmall className="font-medium text-grey-800 text-right">
                {value}
              </ParagraphSmall>
            </li>
          ))}
        </ul>

        {/* Discount*/}
        <div className="flex pt-4 gap-x-2">
          <Input name="discount" placeholder="Add discount code" />
          <Button variant="outline" size="small">
            Apply
          </Button>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-4 border-t-1 border-grey-300">
          <SubtitleSmall className="text-grey-700">Total</SubtitleSmall>
          <Heading4 className="font-medium text-grey-800">
            ${totalPrice.toFixed(2)}
          </Heading4>
        </div>
      </div>
    </div>
  );
}

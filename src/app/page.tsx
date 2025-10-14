import {
  AmericanExpressIcon,
  ChevronLeftIcon,
  DatacenterProxiesIcon,
  DinersClubIcon,
  MastercardIcon,
  UnionPayIcon,
  VisaIcon,
} from '@/components/icons';
import { Button, Heading4, Paper, ParagraphSmall, SubtitleSmall } from '@/components/ui';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import {
  BundleDiscounts,
  mockSubscriptionCycleOptions,
  OrderSummary,
  ProductQuantitySelector,
  DatacenterLocationSelection,
  SubscriptionBenefits,
  SubscriptionCycleOptions,
} from './_sections';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Home',
  description: 'GF Home page',
};

const paymentImages = [
  VisaIcon,
  MastercardIcon,
  AmericanExpressIcon,
  DinersClubIcon,
  UnionPayIcon,
];

export default function Home() {
  return (
    <main
      className={cn(
        'flex flex-col gap-y-6 w-full gap-x-6 overflow-y-auto px-12 py-6 bg-(--bg-color-02)',
        'max-xl:px-6',
        'max-md:px-4'
      )}
    >
      <Button className="text-grey-800" variant="outline" size="small">
        <ChevronLeftIcon className="size-4" /> Back to all
      </Button>
      <div
        className={cn('grid grid-cols-[7fr_3fr] gap-x-6', 'max-xl:flex flex-col gap-y-6')}
      >
        {/* Left side */}
        <div className="flex flex-col gap-y-6">
          <Paper>
            <div className="flex gap-x-4">
              <DatacenterProxiesIcon className="size-14" />
              <div className="flex flex-col gap-y-1 flex-1">
                <Heading4 className="text-grey-800">Datacenter Proxies</Heading4>
                <ParagraphSmall className="text-grey-500">
                  High-speed, reliable proxies sourced from data centers, ideal for
                  managing high-volume, concurrent requests.
                </ParagraphSmall>
              </div>
            </div>
            <div>
              <SubtitleSmall className="text-grey-800">
                Select number of IPs
              </SubtitleSmall>
              <ParagraphSmall className="text-grey-500">
                Choose the perfect quantity of IPs for your needs effortlessly
              </ParagraphSmall>
            </div>
            <BundleDiscounts />
            <ProductQuantitySelector />
            <SubscriptionCycleOptions options={mockSubscriptionCycleOptions} />
            <DatacenterLocationSelection />
          </Paper>
          <SubscriptionBenefits />
        </div>
        {/* Right side */}
        <div className="flex flex-col w-full gap-y-4">
          {/* Section component */}
          <Paper>
            {/* Order component */}
            <OrderSummary
              subtitle="Datacenter Proxies"
              benefits={['3-day Trial', 'Customer Success Manager']}
            />
          </Paper>
          <Button className="w-full" size="large">
            Continue to checkout
          </Button>
          {/* Payment options (images) */}
          <div className="flex justify-center grayscale-100">
            {paymentImages.map((paymentImage, i) => (
              <div key={i} className="w-10 h-6 px-2.5">
                <Image
                  className="w-full h-full"
                  width={40}
                  height={0}
                  src={paymentImage}
                  alt="payment option"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

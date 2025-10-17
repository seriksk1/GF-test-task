import { SubscriptionCycleOption as SubscriptionCycle } from './types';

export const allSubscriptionCycles: SubscriptionCycle[] = [
  { monthsPeriod: 1 },
  { monthsPeriod: 3 },
  {
    monthsPeriod: 12,
    discountPercentage: 20,
  },
];

export const defaultSubscriptionCycle: SubscriptionCycle = allSubscriptionCycles[1];

import { SubscriptionCycleOption } from './types';

export const mockSubscriptionCycleOptions: SubscriptionCycleOption[] = [
  { period: '1 month' },
  { period: '3 months' },
  {
    period: '12 months',
    discountPercentage: 20,
  },
];

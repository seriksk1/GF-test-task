import { SubscriptionPeriod } from '../order-summary';

export interface SubscriptionCycleOption {
  period: SubscriptionPeriod;
  discountPercentage?: number;
}

import { SubscriptionPeriod } from '../order-summary';

export interface SubscriptionCycleOption {
  monthsPeriod: SubscriptionPeriod;
  discountPercentage?: number;
}

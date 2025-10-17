import { SubscriptionCycleOption } from '@/app/_sections/subscription-cycle-options';
import { CountryLocation } from '@/components';

export interface OrderContextStateValues {
  datacenterLocation: CountryLocation;
  subscription: SubscriptionCycleOption;
  ipsQuantity: number;
  pricePerIp: number;
  totalPrice: number;
  promoCode?: {
    discountPercentage: number;
    description: string;
    actualCode: string;
  };
}

export interface OrderContextState extends OrderContextStateValues {
  changeOrder: (state: Partial<OrderContextStateValues>) => void;
}

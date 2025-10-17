import { OrderContextState } from './types';

import { defaultIpBundle } from '@/app/_sections/bundle-discounts';
import { defaultSubscriptionCycle } from '@/app/_sections/subscription-cycle-options';
import { defaultCountryLocation } from '@/components';

export const defaultOrderState: OrderContextState = {
  datacenterLocation: defaultCountryLocation,
  subscription: defaultSubscriptionCycle,
  ipsQuantity: defaultIpBundle.from,
  pricePerIp: defaultIpBundle.price,
  totalPrice: defaultIpBundle.from * defaultIpBundle.price,
  changeOrder: () => {},
};

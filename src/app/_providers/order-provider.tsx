'use client';

import React, { createContext, PropsWithChildren, useContext } from 'react';
import {
  defaultIpBundle,
  getIpBundlePriceByQuantity,
  getOrderTotalWithDiscounts,
  mockSubscriptionCycleOptions,
  SubscriptionCycleOption,
} from '../_sections';
import { datacenterLocations, DatacenterLocation } from '@/components';

interface OrderContextStateValues {
  datacenterLocation: DatacenterLocation;
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

export const defaultOrderState: OrderContextState = {
  datacenterLocation: datacenterLocations[0],
  subscription: mockSubscriptionCycleOptions[1],
  ipsQuantity: defaultIpBundle.from,
  pricePerIp: defaultIpBundle.price,
  totalPrice: defaultIpBundle.from * defaultIpBundle.price,
  changeOrder: () => {},
};

export const OrderContext = createContext<OrderContextState>(defaultOrderState);

export function OrderProvider({ children }: PropsWithChildren) {
  const [orderState, setOrderState] = React.useState(defaultOrderState);

  function recalculateOrder(state: OrderContextStateValues): number {
    return getOrderTotalWithDiscounts({
      subTotal:
        getIpBundlePriceByQuantity(state.ipsQuantity) *
        state.ipsQuantity *
        state.subscription.monthsPeriod,
      promoCodeDiscountPercentage: state.promoCode?.discountPercentage,
      subscriptionDiscountPercentage: state.subscription.discountPercentage,
    });
  }

  function changeOrder(state: Partial<OrderContextStateValues>) {
    setOrderState((prevState) => {
      const newState = { ...prevState, ...state };

      // Recalculate total price if critical values were changed
      if (state.ipsQuantity || state.subscription) {
        newState.totalPrice = recalculateOrder(newState);
      }

      return newState;
    });
  }

  return (
    <OrderContext.Provider value={{ ...orderState, changeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}

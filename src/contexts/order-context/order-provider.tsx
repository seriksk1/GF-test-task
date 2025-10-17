'use client';
import React, { createContext, PropsWithChildren, useContext } from 'react';

import { defaultOrderState } from './data';
import { OrderContextState, OrderContextStateValues } from './types';

import {
  getIpBundlePriceByQuantity,
  getOrderTotalWithDiscounts,
} from '@/app/_sections/order-summary';

const OrderContext = createContext<OrderContextState>(defaultOrderState);

export default function OrderProvider({ children }: PropsWithChildren) {
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

import { ipBundles } from './data';

export const getIpBundlePriceByQuantity = (ipQuantity: number) => {
  const currentBundle = ipBundles.find(
    (bundle) => ipQuantity >= bundle.from && ipQuantity <= bundle.to
  );

  if (!currentBundle) {
    throw new Error(`IP Bundle price for ${ipQuantity} IPs was not found!`);
  }

  return currentBundle.price;
};

/**
 * @example
 * // Returns 0.2
 * getFractionByPercentage(20);
 */
export const getFractionByPercentage = (percentage: number): number => {
  return percentage / 100;
};

export const getDiscountTotalByPercentage = (
  subTotal: number,
  discountPercentage: number
): number => {
  return subTotal * getFractionByPercentage(discountPercentage);
};

export const getOrderTotalWithDiscounts = ({
  subTotal,
  subscriptionDiscountPercentage = 0,
  promoCodeDiscountPercentage = 0,
}: {
  subTotal: number;
  subscriptionDiscountPercentage?: number;
  promoCodeDiscountPercentage?: number;
}): number => {
  try {
    const promoCodeDiscount = getDiscountTotalByPercentage(
      subTotal,
      promoCodeDiscountPercentage
    );
    const subscriptionDiscount = getDiscountTotalByPercentage(
      subTotal,
      subscriptionDiscountPercentage
    );

    const orderTotal = subTotal - promoCodeDiscount - subscriptionDiscount;

    if (orderTotal < 0) {
      throw new Error('getOrderTotalWithDiscounts: "orderTotal" cannot be negative');
    }

    return orderTotal;
  } catch (error) {
    console.error(error);
    return subTotal;
  }
};

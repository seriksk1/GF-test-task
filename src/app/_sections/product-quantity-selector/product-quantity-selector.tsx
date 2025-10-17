'use client';

import React from 'react';
import { Edit } from 'lucide-react';

import { getIpBundlePriceByQuantity } from '../order-summary';

import { ipQuantitySteps, PRODUCT_MAX_QUANTITY, PRODUCT_MIN_QUANTITY } from './data';

import { Button, Input, QuantitySlider, SubtitleSmall } from '@/components';
import { useOrder } from '@/contexts/order-context';

interface ProductQuantitySelectorProps {
  maxQuantity?: number;
  minQuantity?: number;
}

export default function ProductQuantitySelector({
  maxQuantity = PRODUCT_MIN_QUANTITY,
  minQuantity = PRODUCT_MAX_QUANTITY,
}: ProductQuantitySelectorProps) {
  const { ipsQuantity: orderIpsQuantity, changeOrder } = useOrder();

  const [shouldDisplayCustomQuantity, setDisplayCustomQuantity] =
    React.useState<boolean>(false);

  function onQuantityChange(quantity: number) {
    const bundlePrice = getIpBundlePriceByQuantity(quantity);
    changeOrder({
      ipsQuantity: quantity,
      pricePerIp: bundlePrice,
    });
  }

  function onCustomQuantityChange(e: React.FocusEvent<HTMLInputElement>) {
    let newValue = parseInt(e.currentTarget.value, 10);

    if (!newValue || newValue < minQuantity) {
      newValue = minQuantity;
    }

    if (newValue > maxQuantity) {
      newValue = maxQuantity;
    }

    e.currentTarget.value = String(newValue);
    onQuantityChange(newValue);
  }

  function onSelectionTypeButtonClick() {
    if (shouldDisplayCustomQuantity) {
      onQuantityChange(ipQuantitySteps[0]);
    }
    setDisplayCustomQuantity((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-y-6">
      {shouldDisplayCustomQuantity ? (
        <>
          <div className="flex flex-col gap-y-2">
            <SubtitleSmall>Custom quantity</SubtitleSmall>
            <Input
              className="flex-1"
              defaultValue={orderIpsQuantity}
              min={minQuantity}
              max={maxQuantity}
              onBlur={onCustomQuantityChange}
              placeholder="Enter IPs quantity..."
            />
          </div>
          <Button
            className="text-brand-500"
            variant="outline"
            onClick={onSelectionTypeButtonClick}
          >
            Select from the range
          </Button>
        </>
      ) : (
        <>
          <div className="pt-10 pb-4">
            <QuantitySlider
              quantitySteps={ipQuantitySteps}
              value={orderIpsQuantity}
              tooltip={`${orderIpsQuantity} IP`}
              onChange={onQuantityChange}
            />
          </div>
          <Button
            className="text-brand-500"
            variant="outline"
            onClick={onSelectionTypeButtonClick}
          >
            <Edit className="size-4 stroke-brand-500" /> Enter a custom quantity
          </Button>
        </>
      )}
    </div>
  );
}

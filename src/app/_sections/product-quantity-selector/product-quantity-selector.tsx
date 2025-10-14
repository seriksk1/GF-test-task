'use client';

import { useOrder } from '@/app/_providers';
import { QuantitySlider } from '@/components';
import { SubtitleSmall, Button, Input } from '@/components/ui';
import { Edit } from 'lucide-react';
import React from 'react';
import { ipQuantitySteps } from './data';
import { getIpBundlePriceByQuantity } from '../order-summary';

const MIN_QUANTITY = 10;
const MAX_QUANTITY = 1000;

interface ProductQuantitySelectorProps {
  maxQuantity?: number;
  minQuantity?: number;
}

export function ProductQuantitySelector({
  maxQuantity = MAX_QUANTITY,
  minQuantity = MIN_QUANTITY,
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
              min={MIN_QUANTITY}
              max={MAX_QUANTITY}
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

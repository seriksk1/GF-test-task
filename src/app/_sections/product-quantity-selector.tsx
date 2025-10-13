'use client';

import { QuantitySlider } from '@/components';
import { SubtitleSmall, Button, Input } from '@/components/ui';
import { Edit } from 'lucide-react';
import React from 'react';

const quantitySteps = [10, 50, 100, 200, 300, 500, 600, 700, 800, 900, 1000];
const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99999;

export function ProductQuantitySelector() {
  const [ipsQuantity, setIpsQuantity] = React.useState(quantitySteps[0]);
  const [customQuantity, setCustomQuantity] = React.useState(ipsQuantity);
  const [shouldDisplayCustomQuantity, setDisplayCustomQuantity] =
    React.useState<boolean>(false);

  function onCustomQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newValue = parseInt(e.target.value, 10);

    if (!newValue || newValue < MIN_QUANTITY) {
      newValue = MIN_QUANTITY;
    }

    if (newValue > MAX_QUANTITY) {
      newValue = MAX_QUANTITY;
    }

    setCustomQuantity(newValue);
  }

  function onSelectionTypeButtonClick() {
    setDisplayCustomQuantity((prev) => {
      if (!prev) {
        setCustomQuantity(ipsQuantity);
      }

      return !prev;
    });
  }

  return (
    <div className="flex flex-col gap-y-6">
      {shouldDisplayCustomQuantity ? (
        <>
          <div className="flex flex-col gap-y-2">
            <SubtitleSmall>Custom quantity</SubtitleSmall>
            <Input
              className="flex-1 pl-3 pr-2 py-1 body2 placeholder:font-medium placeholder:text-grey-500 rounded-[4px] outline outline-grey-300"
              value={customQuantity}
              min={MIN_QUANTITY}
              max={MAX_QUANTITY}
              onChange={onCustomQuantityChange}
              placeholder="Enter IPs quantity..."
              type="number"
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
              quantitySteps={quantitySteps}
              value={ipsQuantity}
              tooltip={`${ipsQuantity} IP`}
              onChange={setIpsQuantity}
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

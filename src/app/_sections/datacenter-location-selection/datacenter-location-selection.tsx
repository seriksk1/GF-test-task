'use client';

import { useOrder } from '@/app/_providers';
import { DatacenterLocation, SelectCountry } from '@/components';
import { SubtitleSmall } from '@/components/ui';
import React from 'react';

export function DatacenterLocationSelection() {
  const { datacenterLocation, changeOrder } = useOrder();

  function onCountrySelect(location: DatacenterLocation) {
    changeOrder({ datacenterLocation: location });
  }

  return (
    <div className="flex flex-col gap-y-2">
      <SubtitleSmall>Select location</SubtitleSmall>
      <SelectCountry
        selectedOption={{
          label: datacenterLocation.name,
          value: datacenterLocation.countryCode,
          icon: datacenterLocation.icon,
        }}
        onCountrySelect={onCountrySelect}
      />
    </div>
  );
}

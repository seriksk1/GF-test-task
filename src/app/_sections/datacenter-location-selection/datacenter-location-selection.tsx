'use client';

import React from 'react';

import { SelectCountry, SubtitleSmall } from '@/components';
import { allCountriesLocations, CountryLocation } from '@/components/select-country';
import { useOrder } from '@/contexts/order-context';

export default function DatacenterLocationSelection() {
  const { datacenterLocation, changeOrder } = useOrder();

  function onCountrySelect(location: CountryLocation) {
    changeOrder({ datacenterLocation: location });
  }

  return (
    <div className="flex flex-col gap-y-2">
      <SubtitleSmall>Select location</SubtitleSmall>
      <SelectCountry
        countries={allCountriesLocations}
        selectedCountry={datacenterLocation}
        onCountrySelect={onCountrySelect}
      />
    </div>
  );
}

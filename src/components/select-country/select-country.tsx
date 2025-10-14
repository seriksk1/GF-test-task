'use client';

import { DatacenterLocation, Dropdown } from '@/components';
import React from 'react';
import { datacenterLocations } from '../../app/_sections/datacenter-location-selection/data';
import { DropdownOption } from '@/components';
import { defaultDatacenterLocationOption } from '../../app/_sections/order-summary';

const countryOptions: DropdownOption[] = datacenterLocations.map(
  ({ countryCode, icon, name }) => ({
    label: name,
    value: countryCode,
    icon,
  })
);

interface SelectCountryProps {
  selectedOption: DropdownOption;
  onCountrySelect: (location: DatacenterLocation) => void;
}

export function SelectCountry({ selectedOption, onCountrySelect }: SelectCountryProps) {
  function onSelectValueChange(value: string) {
    const selectedLocation = datacenterLocations.find(
      (location) => location.countryCode === value
    );

    if (!selectedLocation) {
      console.error(
        `onSelectValueChange: Location with country code "${value}" not found!`
      );
      return;
    }

    onCountrySelect(selectedLocation);
  }

  return (
    <Dropdown
      defaultOption={{
        label: defaultDatacenterLocationOption.name,
        value: defaultDatacenterLocationOption.countryCode,
        icon: defaultDatacenterLocationOption.icon,
      }}
      options={countryOptions}
      selectedOption={selectedOption}
      onSelectValueChange={onSelectValueChange}
      placeholder="Please select a country"
    />
  );
}

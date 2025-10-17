'use client';

import React from 'react';

import { defaultCountryLocation } from './data';
import { CountryLocation } from './types';
import { getOptionByCountry } from './utils';

import { Dropdown, DropdownOption } from '@/components';

interface SelectCountryProps {
  selectedCountry: CountryLocation;
  countries: CountryLocation[];
  onCountrySelect: (option: CountryLocation) => void;
}

export function SelectCountry({
  selectedCountry,
  countries,
  onCountrySelect,
}: SelectCountryProps) {
  const selectedCountryOption: DropdownOption = getOptionByCountry(selectedCountry);
  const defaultCountryOption: DropdownOption = getOptionByCountry(defaultCountryLocation);

  const countryOptions: DropdownOption[] = React.useMemo(
    () => countries.map(getOptionByCountry),
    [countries]
  );

  function onSelectValueChange(value: string) {
    const newSelectedCountry = countries.find((country) => country.countryCode === value);

    if (!newSelectedCountry) {
      console.error(
        `onSelectValueChange: Location with country code "${value}" not found!`
      );
      return;
    }

    onCountrySelect(newSelectedCountry);
  }

  return (
    <Dropdown
      defaultOption={defaultCountryOption}
      options={countryOptions}
      selectedOption={selectedCountryOption}
      onSelectValueChange={onSelectValueChange}
      placeholder="Please select a country"
    />
  );
}

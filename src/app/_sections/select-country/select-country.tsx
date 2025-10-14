'use client';

import { Dropdown } from '@/components';
import React from 'react';
import { countries } from './data';
import { DropdownOption } from '@/components/dropdown';
import { SubtitleSmall } from '@/components/ui';

const countryOptions: DropdownOption[] = countries.map(({ countryCode, icon, name }) => ({
  label: name,
  value: countryCode,
  icon,
}));

export function SelectCountry() {
  const [selectedOption, setSelectedOption] = React.useState<DropdownOption>(
    countryOptions[0]
  );

  function onSelectValueChange(value: string) {
    const option = countryOptions.find((countryOption) => countryOption.value === value);
    if (option) {
      setSelectedOption(option);
    }
  }

  return (
    <div className="flex flex-col gap-y-2">
      <SubtitleSmall>Select location</SubtitleSmall>
      <Dropdown
        defaultOption={countryOptions[0]}
        options={countryOptions}
        selectedOption={selectedOption}
        onSelectValueChange={onSelectValueChange}
        placeholder="Please select a country"
      />
    </div>
  );
}

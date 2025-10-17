import { DropdownOption } from '../dropdown';

import { CountryLocation } from './types';

export const getOptionByCountry = (country: CountryLocation): DropdownOption => {
  return {
    label: country.name,
    value: country.countryCode,
    icon: country.icon,
  };
};

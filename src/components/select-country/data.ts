import { CountryLocation } from '@/components';
import {
  AustraliaFlagIcon,
  BrazilFlagIcon,
  CanadaFlagIcon,
  ChinaFlagIcon,
  FranceFlagIcon,
  GermanyFlagIcon,
  SpainFlagIcon,
  UnitedKingdomFlagIcon,
  UnitedStatesFlagIcon,
  WorldFlagIcon,
} from '@/components/icons';

export const allCountriesLocations: CountryLocation[] = [
  { countryCode: 'UK', name: 'United Kingdom', icon: UnitedKingdomFlagIcon },
  { countryCode: 'US', name: 'United States', icon: UnitedStatesFlagIcon },
  { countryCode: 'DE', name: 'Germany', icon: GermanyFlagIcon },
  { countryCode: 'FR', name: 'France', icon: FranceFlagIcon },
  { countryCode: 'CA', name: 'Canada', icon: CanadaFlagIcon },
  { countryCode: 'ES', name: 'Spain', icon: SpainFlagIcon },
  { countryCode: 'CN', name: 'China', icon: ChinaFlagIcon },
  { countryCode: 'AU', name: 'Australia', icon: AustraliaFlagIcon },
  { countryCode: 'BR', name: 'Brazil', icon: BrazilFlagIcon },
  { countryCode: 'WR', name: 'World', icon: WorldFlagIcon },
];

export const defaultCountryLocation: CountryLocation = allCountriesLocations[0];

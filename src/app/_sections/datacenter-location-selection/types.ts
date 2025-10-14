export type CountryCode =
  | 'UK'
  | 'US'
  | 'DE'
  | 'FR'
  | 'CA'
  | 'ES'
  | 'CN'
  | 'AU'
  | 'BR'
  | 'WR';

export interface DatacenterLocation {
  countryCode: CountryCode;
  name: string;
  icon: string;
}

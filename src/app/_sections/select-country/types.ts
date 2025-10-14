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

export interface CountryOption {
  countryCode: CountryCode;
  name: string;
  icon: string;
}

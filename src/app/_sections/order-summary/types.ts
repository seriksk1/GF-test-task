export interface IpBundle {
  from: number;
  to: number;
  price: number;
}

export interface OrderOption {
  value: string;
  label: string;
}

export type SubscriptionPeriod = '1 month' | '3 months' | '12 months';

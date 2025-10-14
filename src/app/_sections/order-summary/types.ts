export interface IpBundle {
  from: number;
  to: number;
  price: number;
}

export interface OrderOption {
  value: string;
  label: string;
}

export type SubscriptionPeriod = 1 | 3 | 12;

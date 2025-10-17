import { IpBundle } from './types';

export const ipBundles: IpBundle[] = [
  { from: 10, to: 24, price: 3 },
  { from: 25, to: 49, price: 2.75 },
  { from: 50, to: 99, price: 2.5 },
  { from: 100, to: Infinity, price: 2.25 },
];

export const defaultIpBundle: IpBundle = ipBundles[0];

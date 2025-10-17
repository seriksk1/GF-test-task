import {
  AffiliateProgramIcon,
  AllProductsIcon,
  ApiKeysIcon,
  ApiRequestsIcon,
  BillingIcon,
  ChevronRightIcon,
  DashboardIcon,
  HelpIcon,
  LiveLogIcon,
  LiveLogMonitorIcon,
  ObservabilityOverviewIcon,
  ProxyListIcon,
  ResellersStatisticsIcon,
  SummaryIcon,
  UserSettingsIcon,
} from '../icons';

import { SidebarGroupItem } from './types';

export const mainGroup: SidebarGroupItem[] = [
  {
    text: 'Dashboard',
    href: '/',
    Icon: (
      <DashboardIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
];

export const systemOverviewGroup: SidebarGroupItem[] = [
  {
    text: 'Observability Overview',
    href: '/',
    Icon: (
      <ObservabilityOverviewIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
  {
    text: 'Live Log Monitor',
    href: '/',
    Icon: (
      <LiveLogMonitorIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
    children: <LiveLogIcon className="size-5" />,
  },
];
export const myServicesGroup: SidebarGroupItem[] = [
  {
    text: 'Summary',
    href: '/',
    Icon: (
      <SummaryIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
  {
    text: 'Proxy list',
    href: '/',
    Icon: (
      <ProxyListIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
  {
    text: 'User Settings',
    href: '/',
    Icon: (
      <UserSettingsIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
  {
    text: 'All Products',
    href: '/',
    Icon: (
      <AllProductsIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
];
export const developerSectionGroup: SidebarGroupItem[] = [
  {
    text: 'API Keys',
    href: '/',
    Icon: (
      <ApiKeysIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
  {
    text: 'API Requests',
    href: '/',
    Icon: (
      <ApiRequestsIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
];
export const affiliateProgramsGroup: SidebarGroupItem[] = [
  {
    text: 'Resellers Statistics',
    href: '/',
    Icon: (
      <ResellersStatisticsIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
  {
    text: 'Affiliate Program',
    href: '/',
    Icon: (
      <AffiliateProgramIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
  },
];
export const moreGroup: SidebarGroupItem[] = [
  {
    text: 'Billing',
    href: '/',
    Icon: (
      <BillingIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
    children: (
      <ChevronRightIcon
        className="group-hover:stroke-brand-500"
        stroke="var(--grey-600)"
      />
    ),
  },
  {
    text: 'Help',
    href: '/',
    Icon: (
      <HelpIcon
        className="size-5 group-hover:stroke-brand-500"
        stroke="var(--grey-700)"
      />
    ),
    children: (
      <ChevronRightIcon
        className="group-hover:stroke-brand-500"
        stroke="var(--grey-600)"
      />
    ),
  },
];

export const sidebarGroups = {
  main: mainGroup,
  systemOverview: systemOverviewGroup,
  myServices: myServicesGroup,
  developerSection: developerSectionGroup,
  affiliatePrograms: affiliateProgramsGroup,
  more: moreGroup,
};

import { PropsWithChildren, ReactNode } from 'react';

export interface SidebarGroupItem extends PropsWithChildren {
  text: string;
  Icon: ReactNode;
  href: string;
}

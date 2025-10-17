import React from 'react';

import { OverlineText } from '../ui';

import { SidebarGroupItemComponent } from './sidebar-group-item';
import { SidebarGroupItem } from './types';

export interface SidebarGroupProps {
  title?: string;
  groupItems: SidebarGroupItem[];
}

export function SidebarGroup({ title, groupItems }: SidebarGroupProps) {
  return (
    <ul className="flex flex-col gap-y-1">
      {title && (
        <OverlineText className="mb-1 pl-3 pr-1 text-grey-700">{title}</OverlineText>
      )}
      {groupItems.map((groupItem, i) => (
        <SidebarGroupItemComponent key={i} {...groupItem} />
      ))}
    </ul>
  );
}

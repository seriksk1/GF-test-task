import React from 'react';
import Link from 'next/link';

import { SidebarGroupItem } from './types';
import { SubtitleSmall } from '../ui';

export function SidebarGroupItemComponent({
  children,
  text,
  href,
  Icon,
}: SidebarGroupItem) {
  return (
    <li className="rounded-lg hover:bg-brand-50 group">
      <Link
        href={href}
        className="flex items-center justify-between gap-x-4 pl-3 pr-1 py-1"
      >
        <div className="flex items-center gap-x-4">
          {Icon}
          <SubtitleSmall className="text-grey-800 group-hover:text-brand-500">
            {text}
          </SubtitleSmall>
        </div>
        <div>{children}</div>
      </Link>
    </li>
  );
}

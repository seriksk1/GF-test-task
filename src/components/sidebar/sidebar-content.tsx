import React from 'react';
import { SidebarGroup } from './sidebar-group';
import { sidebarGroups } from './data';
import { Button, Separator } from '../ui';
import { PlusIcon } from '../icons';

export function SidebarContent() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="px-4">
        <Button className="w-full" size="small" variant="outline">
          <PlusIcon className="size-4 stroke-grey-800" /> Buy new proxies
        </Button>
      </div>
      <nav className="flex flex-col px-4 gap-y-4">
        <SidebarGroup groupItems={sidebarGroups.main} />
        <SidebarGroup title="System overview" groupItems={sidebarGroups.systemOverview} />
        <SidebarGroup title="My Services" groupItems={sidebarGroups.myServices} />
        <SidebarGroup
          title="Developer Section"
          groupItems={sidebarGroups.developerSection}
        />
        <SidebarGroup
          title="Affiliate Programs"
          groupItems={sidebarGroups.affiliatePrograms}
        />
        {/* Divider */}
        <Separator className="my-2" />
        <SidebarGroup groupItems={sidebarGroups.more} />
      </nav>
    </div>
  );
}

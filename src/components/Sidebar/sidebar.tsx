import React from 'react';
import { Heading4, ParagraphSmall, SubtitleSmall } from '../ui';
import { SidebarGroup } from './sidebar-group';
import { sidebarGroups } from './data';
import { DotsVerticalIcon, PlusIcon } from '../icons';
import { NotificationButton } from './notification-button';
import { Button } from '../ui/button';

export function Sidebar() {
  return (
    <aside className="h-screen min-w-70 border-r-1 flex flex-col gap-y-4">
      <div className="flex justify-between items-center py-2 px-4">
        <Heading4>Logo</Heading4>
        <NotificationButton notificationsCount={10} />
      </div>
      <div className="px-4">
        {/* TODO: Replace with a Button component */}
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
        <div className="border-b-1 border-grey-200 w-full my-2" />
        <SidebarGroup groupItems={sidebarGroups.more} />
      </nav>
      <div className="flex justify-between items-center px-4 py-3 mt-auto gap-x-2 border-t-1">
        <div>
          <SubtitleSmall className="text-grey-800">Henry Smith</SubtitleSmall>
          <address>
            <ParagraphSmall className="text-grey-600">
              henry.smith@gmail.com
            </ParagraphSmall>
          </address>
        </div>
        {/* TODO: Replace with an IconButton component */}
        <div className="p-1">
          <DotsVerticalIcon className="size-5" />
        </div>
      </div>
    </aside>
  );
}

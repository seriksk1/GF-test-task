import React from 'react';
import { Heading4, ParagraphSmall, SubtitleSmall } from '../ui';
import { SidebarGroup } from './sidebar-group';
import { sidebarGroups } from './data';
import { BellIcon, DotsVerticalIcon } from '../icons';

export function Sidebar() {
  return (
    <aside className="h-screen max-w-70 border-r-1 flex flex-col gap-y-4">
      <div className="flex justify-between items-center py-2 px-4">
        <Heading4>Logo</Heading4>
        {/* Make it a Button component and add notifications counter */}
        <div className="p-2">
          <BellIcon className="size-5" />
        </div>
      </div>
      <div className="px-4">
        {/* TODO: Make it a Button component */}
        <button className="text-center w-full border mb-2">+ Buy new proxies</button>
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
        {/* TODO: Make it a Button */}
        <div className="p-1">
          <DotsVerticalIcon className="size-5" />
        </div>
      </div>
    </aside>
  );
}

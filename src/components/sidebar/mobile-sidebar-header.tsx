import React from 'react';
import { MenuIcon } from 'lucide-react';

import { Button, Heading4 } from '../ui';

import { NotificationButton } from './notification-button';

export function MobileSidebarHeader() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-grey-200">
      <Heading4>Logo</Heading4>
      <div className="flex items-center gap-x-6">
        <NotificationButton notificationsCount={10} />
        <Button className="p-2" variant="text" size="small">
          <MenuIcon className="stroke-grey-700" />
        </Button>
      </div>
    </div>
  );
}

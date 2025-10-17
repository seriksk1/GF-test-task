import React from 'react';

import { Heading4 } from '../ui';

import { NotificationButton } from './notification-button';

export function SidebarHeader() {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <Heading4>Logo</Heading4>
      <NotificationButton notificationsCount={10} />
    </div>
  );
}

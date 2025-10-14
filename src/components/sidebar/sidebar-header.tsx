import React from 'react';
import { NotificationButton } from './notification-button';
import { Heading4 } from '../ui';

export function SidebarHeader() {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <Heading4>Logo</Heading4>
      <NotificationButton notificationsCount={10} />
    </div>
  );
}

import React from 'react';
import { BellIcon } from '../icons';
import { Button, Caption } from '../ui';

interface NotificationButtonProps {
  notificationsCount: number;
  countLimit?: number;
}

export function NotificationButton({
  notificationsCount,
  countLimit = 9,
}: NotificationButtonProps) {
  const hasAnyNotifications = Boolean(notificationsCount);
  const isCountLimitReached = notificationsCount > countLimit;

  /* TODO: Replace div with a Button component */
  return (
    <Button className="relative p-2 hover:opacity-75" variant="text">
      <BellIcon className="size-5" stroke="var(--grey-700)" />
      {hasAnyNotifications && (
        <Caption className="absolute min-w-5 text-center px-0.5 top-0 right-0 bg-brand-400 rounded-[20px] outline-2 outline-base-white text-base-white">
          {isCountLimitReached ? `${countLimit}+` : notificationsCount}
        </Caption>
      )}
    </Button>
  );
}

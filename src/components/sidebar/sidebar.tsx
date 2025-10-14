'use client';

import React from 'react';
import { SidebarFooter } from './sidebar-footer';
import { SidebarContent } from './sidebar-content';
import { SidebarHeader } from './sidebar-header';
import { MobileSidebarHeader } from './mobile-sidebar-header';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks';

export function Sidebar({ className }: { className?: string }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileSidebarHeader />;
  }

  return (
    <aside className={cn('h-screen min-w-70 border-r flex flex-col gap-y-4', className)}>
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </aside>
  );
}

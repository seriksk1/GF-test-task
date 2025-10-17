'use client';

import React from 'react';

import { MobileSidebarHeader } from './mobile-sidebar-header';
import { SidebarContent } from './sidebar-content';
import { SidebarFooter } from './sidebar-footer';
import { SidebarHeader } from './sidebar-header';

import { useIsMobile } from '@/hooks';
import { cn } from '@/lib/utils';

export function Sidebar({ className }: { className?: string }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileSidebarHeader />;
  }

  return (
    <aside
      className={cn(
        'h-screen min-w-70 border-r flex flex-col gap-y-4 overflow-y-auto',
        className
      )}
    >
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </aside>
  );
}

import React from 'react';
import { Button, ParagraphSmall, SubtitleSmall } from '../ui';
import { DotsVerticalIcon } from '../icons';

export function SidebarFooter() {
  return (
    <div className="flex justify-between items-center px-4 py-3 mt-auto gap-x-2 border-t-1">
      <div>
        <SubtitleSmall className="text-grey-800">Henry Smith</SubtitleSmall>
        <address>
          <ParagraphSmall className="text-grey-600">henry.smith@gmail.com</ParagraphSmall>
        </address>
      </div>
      {/* TODO: Replace with an IconButton component */}
      <Button className="p-1" variant="text">
        <DotsVerticalIcon className="size-5 stroke-grey-600" />
      </Button>
    </div>
  );
}

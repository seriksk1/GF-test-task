import React from 'react';

import { DotsVerticalIcon } from '../icons';
import { Button, ParagraphSmall, SubtitleSmall } from '../ui';

export function SidebarFooter() {
  return (
    <div className="flex justify-between items-center px-4 py-3 mt-auto gap-x-2 border-t-1">
      <div>
        <SubtitleSmall className="text-grey-800">Henry Smith</SubtitleSmall>
        <address>
          <ParagraphSmall className="text-grey-600">henry.smith@gmail.com</ParagraphSmall>
        </address>
      </div>
      <Button variant="text" size="icon">
        <DotsVerticalIcon className="stroke-grey-600" />
      </Button>
    </div>
  );
}

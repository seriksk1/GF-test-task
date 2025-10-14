import React from 'react';
import { BundleDiscountsTable } from './bundle-discounts-table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SubtitleSmall,
} from '@/components/ui';

export function BundleDiscounts() {
  return (
    <Accordion type="single" defaultValue="table-1" collapsible>
      <AccordionItem value="table-1">
        <AccordionTrigger>
          <SubtitleSmall className="font-medium text-grey-800">
            Bundle discounts
          </SubtitleSmall>
        </AccordionTrigger>
        <AccordionContent>
          <BundleDiscountsTable />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

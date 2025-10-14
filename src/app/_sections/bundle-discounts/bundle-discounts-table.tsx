import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui';
import React from 'react';

interface BundleDiscountsTableProps {
  tableHeaders?: string[];
  tableRow?: string[];
}

export function BundleDiscountsTable({
  tableHeaders = ['IPs', '10-24', '25-49', '50-99', '100+'],
  tableRow = ['Price per IP', '$3.00', '$2.75', '$2.50', '$2.25'],
}: BundleDiscountsTableProps) {
  const numberOfColumns = tableHeaders.length;
  return (
    <Table>
      <TableHeader>
        <TableRow
          className={`grid grid-cols-[100px_repeat(${numberOfColumns - 1},_1fr)]`}
        >
          <TableHead>IPs</TableHead>
          <TableHead>10-24</TableHead>
          <TableHead>25-49</TableHead>
          <TableHead>50-99</TableHead>
          <TableHead>100+</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          className={`grid grid-cols-[100px_repeat(${numberOfColumns - 1},_1fr)]`}
        >
          {tableRow.map((cell) => (
            <TableCell key={cell}>{cell}</TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}

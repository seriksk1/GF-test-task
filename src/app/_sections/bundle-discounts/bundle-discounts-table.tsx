import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui';
import React, { CSSProperties } from 'react';

interface BundleDiscountsTableProps {
  tableHeaders?: string[];
  tableRow?: string[];
}

export function BundleDiscountsTable({
  tableHeaders = ['IPs', '10-24', '25-49', '50-99', '100+'],
  tableRow = ['Price per IP', '$3.00', '$2.75', '$2.50', '$2.25'],
}: BundleDiscountsTableProps) {
  const numberOfColumns = tableHeaders.length;
  const rowStyles: CSSProperties = {
    gridTemplateColumns: `100px repeat(${numberOfColumns - 1}, 1fr)`,
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="grid" style={rowStyles}>
          {tableHeaders.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="grid" style={rowStyles}>
          {tableRow.map((cell) => (
            <TableCell key={cell}>{cell}</TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}

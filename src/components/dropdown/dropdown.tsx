'use client';

import React from 'react';
import Image from 'next/image';

import { DropdownOption } from './types';

import {
  ParagraphSmall,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';

interface DropdownProps {
  defaultOption: DropdownOption;
  selectedOption: DropdownOption;
  options: DropdownOption[];
  placeholder?: string;
  onSelectValueChange: (option: string) => void;
}

export function Dropdown({
  defaultOption,
  options,
  selectedOption,
  placeholder = 'Please select an option',
  onSelectValueChange,
}: DropdownProps) {
  return (
    <Select
      value={selectedOption.value}
      defaultValue={defaultOption.value}
      onValueChange={onSelectValueChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue className="flex gap-x-2" placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, icon, label }) => (
          <SelectItem key={value} className="flex gap-x-2" value={value}>
            {icon && <Image className="size-6" src={icon} alt="select option icon" />}
            <ParagraphSmall className="text-grey-900 font-medium">{label}</ParagraphSmall>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

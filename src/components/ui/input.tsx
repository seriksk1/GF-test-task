import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex-1 pl-3 pr-2 py-1 body2 placeholder:font-medium placeholder:text-grey-500 rounded-[4px] outline outline-grey-300',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        className
      )}
      {...props}
    />
  );
}

export { Input };

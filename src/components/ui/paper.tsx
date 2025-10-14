import { cn } from '@/lib/utils';

export function Paper({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-y-6 p-6 bg-base-white border border-grey-200 rounded-[8px]',
        'max-md:p-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

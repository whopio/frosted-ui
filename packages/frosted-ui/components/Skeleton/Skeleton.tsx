import { cn } from '../../lib/classnames';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-whop-gray/10', className)}
      {...props}
    />
  );
}

export { Skeleton };

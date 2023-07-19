'use client';

import { cn } from '../../lib/classnames';
import { Button, ButtonProps } from '../Button';
export interface BreadcrumbItemProps extends ButtonProps {
  isLastItem?: boolean;
}

export const BreadcrumbItem = ({
  isLastItem,
  ...props
}: BreadcrumbItemProps) => {
  if (isLastItem) {
    return (
      <div className="text-overline3 text-whop-dark-gray flex h-6 items-center justify-center px-[7px] uppercase">
        {props.children}
      </div>
    );
  }
  return (
    <Button
      variant="blank"
      colorScheme="dark-gray"
      size="xs"
      className={cn(
        '!text-overline3 !text-whop-gray uppercase',
        props?.className,
      )}
      {...props}
    />
  );
};

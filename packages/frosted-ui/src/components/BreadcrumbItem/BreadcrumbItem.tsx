'use client';

import React from 'react';
import { cn } from '../../lib/classnames';
import { Button, ButtonProps } from '../Button';
import { Typography } from '../Typography';
export interface BreadcrumbItemProps extends ButtonProps {
  isLastItem?: boolean;
}

export const BreadcrumbItem = ({
  isLastItem,
  children,
  ...props
}: BreadcrumbItemProps) => {
  if (isLastItem) {
    return (
      <Typography
        as="div"
        variant="overline3"
        className="text-whop-dark-gray flex h-6 items-center justify-center px-[7px] uppercase"
      >
        {children}
      </Typography>
    );
  }
  return (
    <Button
      variant="blank"
      colorScheme="dark-gray"
      size="xs"
      className={cn(props?.className)}
      {...props}
    >
      <Typography
        as="span"
        variant="overline3"
        className="!text-whop-gray uppercase"
      >
        {children}
      </Typography>
    </Button>
  );
};

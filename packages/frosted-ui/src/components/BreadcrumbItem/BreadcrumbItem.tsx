'use client';

import React from 'react';
import { cn } from '../../lib/classnames';
import { Button, ButtonProps } from '../Button';
import { Text } from '../Text';
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
      <Text
        as="div"
        variant="overline1"
        className="flex text-whop-dark-gray h-6 items-center justify-center px-[7px] uppercase leading-none"
      >
        {children}
      </Text>
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
      <Text
        as="span"
        variant="overline1"
        className="block !text-whop-gray uppercase leading-none"
      >
        {children}
      </Text>
    </Button>
  );
};

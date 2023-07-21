import { Tab } from '@headlessui/react';
import React, { PropsWithChildren } from 'react';
import { cn } from '../../lib/classnames';

export const PillTabList = ({
  children,
  className,
  fullWidth = false,
}: PropsWithChildren & { className?: string; fullWidth?: boolean }) => {
  return (
    <Tab.List
      className={cn(
        'bg-whop-hover flex h-10 appearance-none items-center overflow-scroll rounded-full p-1',
        {
          'max-w-fit': !fullWidth,
        },
        className,
      )}
    >
      {children}
    </Tab.List>
  );
};

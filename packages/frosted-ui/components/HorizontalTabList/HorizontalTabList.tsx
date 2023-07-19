'use client';

import { Tab } from '@headlessui/react';
import { LayoutGroup } from 'framer-motion';
import { PropsWithChildren, useId } from 'react';
import { cn } from '../../lib/classnames';

export const HorizontalTabList = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  const id = useId();
  return (
    <Tab.List
      className={cn(
        'border-whop-stroke flex appearance-none items-center space-x-3 overflow-scroll border-b',
        className,
      )}
    >
      <LayoutGroup id={id}>{children}</LayoutGroup>
    </Tab.List>
  );
};

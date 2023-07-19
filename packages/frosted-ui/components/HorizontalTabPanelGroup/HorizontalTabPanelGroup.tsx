'use client';

import { Tab } from '@headlessui/react';
import { AnimatePresence } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { cn } from '../../lib/classnames';
import { useHorizontalTabContext } from '../HorizontalTabGroupContext';

export interface HorizontalTabPanelGroupProps extends PropsWithChildren {
  wrapperClassName?: string;
}

export const HorizontalTabPanelGroup = ({
  children,
  wrapperClassName,
}: HorizontalTabPanelGroupProps) => {
  const { selectedIndex, previousIndex } = useHorizontalTabContext();
  const direction = (previousIndex || 0) > selectedIndex ? 1 : -1;
  return (
    <Tab.Panels className={cn(wrapperClassName)}>
      <AnimatePresence initial={false} custom={direction}>
        {children}
      </AnimatePresence>
    </Tab.Panels>
  );
};

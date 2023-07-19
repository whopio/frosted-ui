'use client';
import { Tab } from '@headlessui/react';
import { PropsWithChildren, ReactNode } from 'react';
import { PillTabList } from '../PillTabList';
import { PillTabListItem } from '../PillTabListItem';

export interface PillTabProps extends PropsWithChildren {
  defaultTab?: number;
  /**Only applied when using items, otherwise you'll need to apply individually.*/
  fullWidth?: boolean;
  items?: Omit<PillTabItemProps, 'fullWidth'>[];
  selectedIndex?: number;
  setSelectedIndex?: (index: number) => void;
}

export interface PillTabItemProps {
  children: ReactNode;
  badge?: boolean;
  label?: string;
  className?: string;
  selectedClassName?: string;
  fullWidth?: boolean;
}

/** Pass `tab` as the index of the tab you want to open by default. */
export const PillTabGroup = ({
  children,
  defaultTab,
  items,
  fullWidth,
  selectedIndex,
  setSelectedIndex,
}: PillTabProps) => {
  return (
    <Tab.Group
      defaultIndex={defaultTab}
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      {items && (
        <PillTabList fullWidth={fullWidth}>
          {items.map((item, index) => (
            <PillTabListItem
              key={item?.label || index}
              fullWidth={fullWidth}
              {...item}
            />
          ))}
        </PillTabList>
      )}
      {children}
    </Tab.Group>
  );
};

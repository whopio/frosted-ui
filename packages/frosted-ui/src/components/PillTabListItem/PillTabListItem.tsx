'use client';

import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { Fragment } from 'react';
import { cn } from '../../lib/classnames';
import { PillTabItemProps } from '../PillTabGroup';
import { Text } from '../Text';

export const PillTabListItem = ({
  badge,
  children,
  label,
  className,
  selectedClassName,
  fullWidth = false,
}: PillTabItemProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={cn(
            'relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none',
            {
              'w-full': fullWidth,
            },
            className,
          )}
        >
          {selected && (
            <motion.div
              className={cn(
                'border-whop-stroke bg-whop-background absolute inset-0 z-[1] flex items-center justify-center rounded-full border-[0.5px]',
                selectedClassName,
              )}
              layoutId="active"
              transition={{
                duration: 0.15,
              }}
            />
          )}
          {badge && (
            <div className="bg-whop-primary z-[2] mr-2 h-2 w-2 rounded-full" />
          )}
          <Text as="span" variant="button2" className="z-[2]">
            {children}
          </Text>
          {label && (
            <Text
              as="div"
              variant="body2"
              className="text-whop-dark-gray z-[2] ml-2"
            >
              {label}
            </Text>
          )}
        </div>
      )}
    </Tab>
  );
};

'use client';

import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { Fragment, ReactNode } from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { Size } from '../../lib/shared-component-types';
import { Icon } from '../Icon';

export type HorizontalTabSize = Exclude<Size, 'xs' | 'xl'>;

export interface HorizontalTabItemProps {
  icon?: IconDefinition;
  children: ReactNode;
  rightElement?: ReactNode;
  label?: string;
  className?: string;
  size?: HorizontalTabSize;
}

export const HorizontalTabListItem = ({
  icon,
  rightElement,
  children,
  size = 'md',
}: HorizontalTabItemProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={cn(
            'relative flex items-center justify-center whitespace-nowrap outline-none',
          )}
        >
          <button
            className={cn(
              'hover:bg-whop-hover group flex cursor-pointer appearance-none items-center justify-center rounded-md outline-none transition',

              {
                'mb-1': size === 'sm',
                'mb-1.5': size === 'md' || size === 'lg',
              },
              {
                'h-8 px-2.5': size === 'sm',
                'h-10 px-3': size === 'md',
                'h-12 px-3': size === 'lg',
              },
            )}
          >
            {icon && (
              <Icon
                icon={icon}
                className={cn(
                  'text-whop-dark-gray z-[2]',
                  {
                    'text-whop-black': selected,
                  },
                  {
                    'mr-1.5 h-3.5 w-3.5': size === 'sm',
                    'mr-[7px] h-4 w-4': size === 'md' || size === 'lg',
                  },
                )}
              />
            )}
            <span
              className={cn(
                'text-whop-dark-gray z-[2]',
                {
                  'text-whop-black': selected,
                },
                {
                  'text-subtitle3': size === 'sm',
                  'text-button3': size === 'md',
                  'text-button2': size === 'lg',
                },
              )}
            >
              {children}
            </span>
            {rightElement && (
              <div
                className={cn('z-[2]', {
                  'ml-1.5': size === 'sm',
                  'ml-[7px]': size === 'md' || size === 'lg',
                })}
              >
                {rightElement}
              </div>
            )}
          </button>

          {selected && (
            <motion.div
              className={cn(
                'bg-whop-primary absolute bottom-0 z-[2] w-full rounded-t-full',
                {
                  'h-0.5': size === 'sm',
                  'h-[3px]': size === 'md' || size === 'lg',
                },
              )}
              layoutId="activeUnderline"
              transition={{
                duration: 0.15,
              }}
            />
          )}
        </div>
      )}
    </Tab>
  );
};

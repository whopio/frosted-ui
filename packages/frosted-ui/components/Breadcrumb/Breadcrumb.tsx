'use client';

import React, { ReactNode, cloneElement } from 'react';
import { cn } from '../../lib/classnames';
import { BreadcrumbTruncationIcon } from '../BreadcrumbTruncationIcon';

type BreadcrumbProps = {
  children: ReactNode;
  className?: string;
};

export const Breadcrumb = ({ children, className }: BreadcrumbProps) => {
  const count = React.Children.count(children);

  return (
    <nav className={className}>
      <ul className="flex gap-px overflow-x-auto whitespace-nowrap">
        {React.Children.map(children, (child, index) => {
          // Adding in the separators
          const needsTruncation = count > 10;
          const isFirst = index === 0 || index === 1;
          const isLast = index === count - 1 || index === count - 2;
          const isHidden = needsTruncation && !isFirst && !isLast;

          if (needsTruncation && index === 1) {
            return (
              <li key={index} className="flex items-center">
                {cloneElement(child as never, {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ...((child as any).props || {}),
                })}
                <BreadcrumbTruncationIcon />
              </li>
            );
          }
          return (
            <li
              key={index}
              className={cn('flex items-center', { hidden: isHidden })}
            >
              {child}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

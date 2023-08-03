'use client';

import { Header, Trigger } from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import * as React from 'react';
import { cn } from '../../lib/classnames';

const PlusIcon = ({ open }: { open: boolean }) => {
  const variants = {
    open: { transform: 'rotate(90deg)' },
    closed: { transform: 'rotate(0deg)' },
  };

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 448 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M224 16C237.3 16 248 26.7 248 40L248 408C248 421.3 237.3 432 224 432C210.7 432 200 421.3 200 408L200 40C200 26.7 210.7 16 224 16Z"
        fill="currentColor"
        animate={open ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.2 }}
      />
      <path
        d="M432 224C432 237.3 421.3 248 408 248H40C26.7 248 16 237.3 16 224C16 210.7 26.7 200 40 200H408C421.3 200 432 210.7 432 224Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> & {
    open?: boolean;
  }
>(({ className, children, open = false, ...props }, ref) => {
  return (
    <Header className="flex text-header4">
      <Trigger
        ref={ref}
        className={cn(
          'flex flex-1 cursor-pointer items-center justify-between py-4 text-left font-medium outline-none transition-all focus:outline-none',
          className,
        )}
        {...props}
      >
        <div>{children}</div>
        <PlusIcon open={open} />
      </Trigger>
    </Header>
  );
});
AccordionTrigger.displayName = Trigger.displayName;

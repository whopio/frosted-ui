'use client';

import {
  AccordionContentProps,
  AccordionTriggerProps,
  Root,
} from '@radix-ui/react-accordion';
import * as React from 'react';
import { AccordionContent } from '../AccordionContent';
import { AccordionItem } from '../AccordionItem';
import { AccordionTrigger } from '../AccordionTrigger';

export type AccordionItemProps = {
  value: string;
  trigger: AccordionTriggerProps;
  content: AccordionContentProps;
};

export const Accordion = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & { items?: AccordionItemProps[] }
>(({ items, children, ...props }, ref) => {
  const [open, setOpen] = React.useState<string | undefined>(items?.[0].value);
  return (
    // @ts-expect-error this problem is caused by conditional types
    <Root
      ref={ref}
      value={open}
      onValueChange={(value: string) => setOpen(value)}
      {...props}
    >
      {!items && children}
      {items &&
        items.map((item) => (
          <AccordionItem value={item.value}>
            <AccordionTrigger {...item.trigger} open={open === item.value} />
            <AccordionContent {...item.content} open={open === item.value} />
          </AccordionItem>
        ))}
    </Root>
  );
});

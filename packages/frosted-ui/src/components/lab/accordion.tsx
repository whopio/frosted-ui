'use client';

import classNames from 'classnames';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import * as React from 'react';
import type { PropsWithoutColor } from '../../helpers';

type AccordionRootProps = React.ComponentProps<typeof AccordionPrimitive.Root>;

const AccordionRoot = (props: AccordionRootProps) => {
  const { className, ...accordionRootProps } = props;

  return <AccordionPrimitive.Root className={classNames('fui-AccordionRoot', className)} {...accordionRootProps} />;
};
AccordionRoot.displayName = 'Root';

interface AccordionItemProps extends PropsWithoutColor<typeof AccordionPrimitive.Item> {}

const AccordionItem = (props: AccordionItemProps) => {
  const { className, ...accordionItemProps } = props;

  return <AccordionPrimitive.Item className={classNames('fui-AccordionItem', className)} {...accordionItemProps} />;
};
AccordionItem.displayName = 'Item';

type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>;
const AccordionTrigger = (props: AccordionTriggerProps) => {
  const { className, children, ...accordionTriggerProps } = props;
  return (
    <AccordionPrimitive.Trigger
      className={classNames('fui-AccordionTrigger', 'fui-reset', className)}
      {...accordionTriggerProps}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fui-AccordionTriggerIcon"
      >
        <path
          d="M6 12L9.64645 8.35355C9.84171 8.15829 10.1583 8.15829 10.3536 8.35355L14 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {children}
    </AccordionPrimitive.Trigger>
  );
};
AccordionTrigger.displayName = 'AccordionTrigger';

type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;
const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => (
  <AccordionPrimitive.Content className="fui-AccordionContent" {...props}>
    <div className={classNames('fui-AccordionContentInner', className)}>{children}</div>
  </AccordionPrimitive.Content>
);
AccordionContent.displayName = 'AccordionContent';

export { AccordionContent as Content, AccordionItem as Item, AccordionRoot as Root, AccordionTrigger as Trigger };

export type {
  AccordionContentProps as ContentProps,
  AccordionItemProps as ItemProps,
  AccordionRootProps as RootProps,
  AccordionTriggerProps as TriggerProps,
};

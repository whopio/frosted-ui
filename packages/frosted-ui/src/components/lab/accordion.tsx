'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import classNames from 'classnames';
import * as React from 'react';
import type { LayoutProps, MarginProps } from '../../helpers';
import {
  extractLayoutProps,
  extractMarginProps,
  withLayoutProps,
  withMarginProps,
} from '../../helpers';

type AccordionRootProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  MarginProps &
  LayoutProps;

const AccordionRoot = (props: AccordionRootProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);

  const { className, ...accordionRootProps } = layoutRest;

  return (
    // @ts-expect-error - `type` and 'collapsible' issues
    <AccordionPrimitive.Root
      className={classNames(
        'fui-AccordionRoot',
        className,
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
      {...accordionRootProps}
    />
  );
};
AccordionRoot.displayName = 'Root';

interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    MarginProps {}

const AccordionItem = (props: AccordionItemProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...accordionItemProps } = marginRest;

  return (
    <AccordionPrimitive.Item
      className={classNames(
        'fui-AccordionItem',
        className,
        withMarginProps(marginProps),
      )}
      {...accordionItemProps}
    />
  );
};
AccordionItem.displayName = 'Item';

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> &
  MarginProps &
  LayoutProps;
const AccordionTrigger = (props: AccordionTriggerProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);

  const { className, children, ...accordionTriggerProps } = layoutRest;
  return (
    <AccordionPrimitive.Trigger
      className={classNames(
        'fui-AccordionTrigger',
        'fui-reset',
        className,
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
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

type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;
const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => (
  <AccordionPrimitive.Content className="fui-AccordionContent" {...props}>
    <div className={classNames('fui-AccordionContentInner', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
);
AccordionContent.displayName = 'AccordionContent';

export {
  AccordionContent as Content,
  AccordionItem as Item,
  AccordionRoot as Root,
  AccordionTrigger as Trigger,
};

export type {
  AccordionContentProps as ContentProps,
  AccordionItemProps as ItemProps,
  AccordionRootProps as RootProps,
  AccordionTriggerProps as TriggerProps,
};

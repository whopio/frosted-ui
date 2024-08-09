'use client';

import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';
import { widgetStackRootPropDefs } from './widget-stack.props';

type WidgetStackRootElement = React.ElementRef<'div'>;
type WidgetStackRootOwnProps = GetPropDefTypes<typeof widgetStackRootPropDefs>;
interface WidgetStackRootProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps,
    WidgetStackRootOwnProps {
  asChild?: boolean;
}
const WidgetStackRoot = React.forwardRef<
  WidgetStackRootElement,
  WidgetStackRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    color,
    children,
    orientation = widgetStackRootPropDefs.orientation.default,
    ...rootProps
  } = marginRest;
  return (
    <div
      data-accent-color={color}
      {...rootProps}
      ref={forwardedRef}
      className={classNames(
        'fui-WidgetStackRoot',
        withMarginProps(marginProps),
        className,
      )}
    >
      <div className="fui-WidgetStackScrollArea" data-orientation={orientation}>
        {children}
      </div>
    </div>
  );
});
WidgetStackRoot.displayName = 'WidgetStackRoot';

function sequence(len: number, max: number) {
  return Array.from({ length: len }, (v, k) =>
    parseFloat(((k * max) / (len - 1)).toFixed(2)),
  );
}

type WidgetStackItemElement = React.ElementRef<'div'>;
interface WidgetStackItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps {}
const WidgetStackItem = React.forwardRef<
  WidgetStackItemElement,
  WidgetStackItemProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, children, ...rootProps } = marginRest;
  const ref = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(ref.current);
      } else if (forwardedRef.current) {
        forwardedRef.current = ref.current;
      }
    }
  }, [forwardedRef]);

  React.useEffect(() => {
    const widgetStackItemElement = ref.current;
    const stackElement = widgetStackItemElement?.parentElement;

    if (!widgetStackItemElement || !stackElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const widgetItemContentElement = contentRef.current;
          if (!widgetItemContentElement) return;
          const target = entry.target;

          widgetItemContentElement.style.transform =
            'translateZ(' +
            (-(1 - entry.intersectionRatio) * 500).toFixed(3) +
            'px)';

          if (entry.intersectionRatio >= 0.9) {
            const widgetIndex = [...stackElement.children].indexOf(target);
            console.log({ widgetIndex });
            // updatePagination(widgetIndex);
            // updateWidgetName(
            //   target.firstElementChild.getAttribute('data-name'),
            // );
          }
        });
      },
      {
        root: stackElement,
        rootMargin: '0px',
        // sets breakpoints for every 0.5% [0.00, 0.005, 0.01..., 1.00]
        threshold: sequence(200, 1),
      },
    );
    observer.observe(widgetStackItemElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      {...rootProps}
      ref={ref}
      className={classNames(
        'fui-WidgetStackItem',
        className,
        withMarginProps(marginProps),
      )}
      role="group"
      aria-roledescription="slide"
    >
      <div
        className={classNames('fui-WidgetStackItemContent')}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
});
WidgetStackItem.displayName = 'WidgetStackItem';

export { WidgetStackItem as Item, WidgetStackRoot as Root };
export type {
  WidgetStackItemProps as ItemProps,
  WidgetStackRootProps as RootProps,
};

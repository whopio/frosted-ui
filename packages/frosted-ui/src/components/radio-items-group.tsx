'use client';

import * as RadioItemsGroupPrimitive from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { radioItemsGroupPropDefs } from './radio-items-group.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type RadioItemsGroupOwnProps = GetPropDefTypes<typeof radioItemsGroupPropDefs>;

type RadioItemsGroupContextValue = RadioItemsGroupOwnProps;
const RadioItemsGroupContext = React.createContext<RadioItemsGroupContextValue>(
  {},
);

type RadioItemsGroupElement = React.ElementRef<
  typeof RadioItemsGroupPrimitive.Root
>;
interface RadioItemsGroupRootProps
  extends PropsWithoutRefOrColor<typeof RadioItemsGroupPrimitive.Root>,
    MarginProps,
    RadioItemsGroupOwnProps {}
const RadioItemsGroupRoot = React.forwardRef<
  RadioItemsGroupElement,
  RadioItemsGroupRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    color = radioItemsGroupPropDefs.color.default,
    highContrast = radioItemsGroupPropDefs.highContrast.default,
    children,
    ...rootProps
  } = marginRest;
  return (
    <RadioItemsGroupPrimitive.Root
      data-accent-color={color}
      {...rootProps}
      ref={forwardedRef}
      className={classNames(
        'fui-RadioItemsGroupRoot',
        className,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    >
      <RadioItemsGroupContext.Provider
        value={React.useMemo(
          () => ({ color, highContrast }),
          [color, highContrast],
        )}
      >
        {children}
      </RadioItemsGroupContext.Provider>
    </RadioItemsGroupPrimitive.Root>
  );
});
RadioItemsGroupRoot.displayName = 'RadioItemsGroupRoot';

type RadioItemsGroupItemElement = React.ElementRef<
  typeof RadioItemsGroupPrimitive.Item
>;
interface RadioItemsGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioItemsGroupPrimitive.Item>,
    MarginProps {}
const RadioItemsGroupItem = React.forwardRef<
  RadioItemsGroupItemElement,
  RadioItemsGroupItemProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, style, ...itemProps } = marginRest;

  const updatedChildren = addOverlayToChildren(children);
  return (
    <RadioItemsGroupPrimitive.Item
      style={style}
      {...itemProps}
      ref={forwardedRef}
      className={classNames(
        'fui-reset',
        'fui-RadioItemsGroupButton',
        'fui-RadioItemsGroupItem',
        className,
        withMarginProps(marginProps),
      )}
      asChild
    >
      {updatedChildren}
    </RadioItemsGroupPrimitive.Item>
  );
});
RadioItemsGroupItem.displayName = 'RadioItemsGroupItem';

type RadioItemsGroupIconElement = React.ElementRef<'div'>;
interface RadioItemsGroupIconProps
  extends MarginProps,
    Omit<PropsWithoutRefOrColor<'div'>, 'children'> {}
const RadioItemsGroupIcon = React.forwardRef<
  RadioItemsGroupIconElement,
  RadioItemsGroupIconProps
>((props, forwardedRef) => {
  const { color, highContrast } = React.useContext(RadioItemsGroupContext);

  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...itemProps } = marginRest;
  return (
    <div
      data-accent-color={color}
      className={classNames(
        'fui-RadioItemsGroupIcon',
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
        className,
      )}
      aria-hidden
      {...itemProps}
      ref={forwardedRef}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6 10.5L8.5 13L14 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
});
RadioItemsGroupIcon.displayName = 'RadioItemsGroupIcon';

const addOverlayToChildren = (children: React.ReactNode): React.ReactNode => {
  if (React.Children.count(children) === 1) {
    const child = React.Children.only(children) as React.ReactElement<
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      string | React.JSXElementConstructor<any>
    >;
    return React.cloneElement(
      child,
      {},
      React.Children.toArray(child.props.children).concat(
        <RadioItemsGroupOverlay />,
      ),
    );
  }
  return children;
};

const RadioItemsGroupOverlay = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const parentElement = ref.current?.parentElement;
    if (!parentElement) return;
    const parentElementComputedStyles = getComputedStyle(parentElement);
    ref.current.style.setProperty(
      '--parent-border-width',
      parentElementComputedStyles.borderWidth,
    );
    ref.current.style.setProperty(
      '--parent-border-radius',
      parentElementComputedStyles.borderRadius,
    );
  }, [ref]);

  return <div ref={ref} className="fui-RadioItemsGroupOverlay" aria-hidden />;
};

const RadioItemsGroup = Object.assign(
  {},
  {
    Root: RadioItemsGroupRoot,
    Item: RadioItemsGroupItem,
    Icon: RadioItemsGroupIcon,
  },
);

export {
  RadioItemsGroup,
  RadioItemsGroupIcon,
  RadioItemsGroupItem,
  RadioItemsGroupRoot,
};
export type {
  RadioItemsGroupIconProps,
  RadioItemsGroupItemProps,
  RadioItemsGroupRootProps,
};

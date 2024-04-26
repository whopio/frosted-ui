'use client';

import * as RadioButtonGroupPrimitive from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { radioButtonGroupPropDefs } from './radio-button-group.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type RadioButtonGroupOwnProps = GetPropDefTypes<
  typeof radioButtonGroupPropDefs
>;

type RadioButtonGroupContextValue = RadioButtonGroupOwnProps;
const RadioButtonGroupContext =
  React.createContext<RadioButtonGroupContextValue>({});

type RadioButtonGroupElement = React.ElementRef<
  typeof RadioButtonGroupPrimitive.Root
>;
interface RadioButtonGroupRootProps
  extends PropsWithoutRefOrColor<typeof RadioButtonGroupPrimitive.Root>,
    MarginProps,
    RadioButtonGroupOwnProps {}
const RadioButtonGroupRoot = React.forwardRef<
  RadioButtonGroupElement,
  RadioButtonGroupRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    color = radioButtonGroupPropDefs.color.default,
    highContrast = radioButtonGroupPropDefs.highContrast.default,
    children,
    ...rootProps
  } = marginRest;
  return (
    <RadioButtonGroupPrimitive.Root
      data-accent-color={color}
      {...rootProps}
      ref={forwardedRef}
      className={classNames(
        'fui-RadioButtonGroupRoot',
        className,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    >
      <RadioButtonGroupContext.Provider
        value={React.useMemo(
          () => ({ color, highContrast }),
          [color, highContrast],
        )}
      >
        {children}
      </RadioButtonGroupContext.Provider>
    </RadioButtonGroupPrimitive.Root>
  );
});
RadioButtonGroupRoot.displayName = 'RadioButtonGroupRoot';

type RadioButtonGroupItemElement = React.ElementRef<
  typeof RadioButtonGroupPrimitive.Item
>;
interface RadioButtonGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioButtonGroupPrimitive.Item>,
    MarginProps {}
const RadioButtonGroupItem = React.forwardRef<
  RadioButtonGroupItemElement,
  RadioButtonGroupItemProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, style, ...itemProps } = marginRest;

  const updatedChildren = addOverlayToChildren(children);
  return (
    <RadioButtonGroupPrimitive.Item
      style={style}
      {...itemProps}
      ref={forwardedRef}
      className={classNames(
        'fui-reset',
        'fui-RadioButtonGroupButton',
        'fui-RadioButtonGroupItem',
        className,
        withMarginProps(marginProps),
      )}
      asChild
    >
      {updatedChildren}
    </RadioButtonGroupPrimitive.Item>
  );
});
RadioButtonGroupItem.displayName = 'RadioButtonGroupItem';

type RadioButtonGroupIconElement = React.ElementRef<'div'>;
interface RadioButtonGroupIconProps
  extends MarginProps,
    Omit<PropsWithoutRefOrColor<'div'>, 'children'> {}
const RadioButtonGroupIcon = React.forwardRef<
  RadioButtonGroupIconElement,
  RadioButtonGroupIconProps
>((props, forwardedRef) => {
  const { color, highContrast } = React.useContext(RadioButtonGroupContext);

  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...itemProps } = marginRest;
  return (
    <div
      data-accent-color={color}
      className={classNames(
        'fui-RadioButtonGroupIcon',
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
RadioButtonGroupIcon.displayName = 'RadioButtonGroupIcon';

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
        <RadioButtonGroupOverlay />,
      ),
    );
  }
  return children;
};

// Avoiding SSR hydration warnings
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const RadioButtonGroupOverlay = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
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

  return <div ref={ref} className="fui-RadioButtonGroupOverlay" aria-hidden />;
};

export {
  RadioButtonGroupIcon as Icon,
  RadioButtonGroupItem as Item,
  RadioButtonGroupRoot as Root,
};
export type {
  RadioButtonGroupIconProps as IconProps,
  RadioButtonGroupItemProps as ItemProps,
  RadioButtonGroupRootProps as RootProps,
};

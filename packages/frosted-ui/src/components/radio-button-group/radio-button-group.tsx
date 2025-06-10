'use client';

import classNames from 'classnames';
import { RadioGroup as RadioButtonGroupPrimitive } from 'radix-ui';
import * as React from 'react';

import { radioButtonGroupPropDefs } from './radio-button-group.props';

import { type GetPropDefTypes, type PropsWithoutColor } from '../../helpers';
import { useIsomorphicLayoutEffect } from '../../helpers/use-isomorphic-layout-effect';

type RadioButtonGroupOwnProps = GetPropDefTypes<typeof radioButtonGroupPropDefs>;

type RadioButtonGroupContextValue = RadioButtonGroupOwnProps;
const RadioButtonGroupContext = React.createContext<RadioButtonGroupContextValue>({});

interface RadioButtonGroupRootProps
  extends PropsWithoutColor<typeof RadioButtonGroupPrimitive.Root>,
    RadioButtonGroupOwnProps {}

const RadioButtonGroupRoot = (props: RadioButtonGroupRootProps) => {
  const {
    className,
    color = radioButtonGroupPropDefs.color.default,
    highContrast = radioButtonGroupPropDefs.highContrast.default,
    children,
    ...rootProps
  } = props;
  return (
    <RadioButtonGroupPrimitive.Root
      data-accent-color={color}
      {...rootProps}
      className={classNames('fui-RadioButtonGroupRoot', className, { 'fui-high-contrast': highContrast })}
    >
      <RadioButtonGroupContext.Provider value={React.useMemo(() => ({ color, highContrast }), [color, highContrast])}>
        {children}
      </RadioButtonGroupContext.Provider>
    </RadioButtonGroupPrimitive.Root>
  );
};
RadioButtonGroupRoot.displayName = 'RadioButtonGroupRoot';

interface RadioButtonGroupItemProps extends React.ComponentProps<typeof RadioButtonGroupPrimitive.Item> {}

const RadioButtonGroupItem = (props: RadioButtonGroupItemProps) => {
  const { children, className, style, ...itemProps } = props;

  const updatedChildren = addOverlayToChildren(children);
  return (
    <RadioButtonGroupPrimitive.Item
      style={style}
      {...itemProps}
      className={classNames('fui-reset', 'fui-RadioButtonGroupButton', 'fui-RadioButtonGroupItem', className)}
      asChild
    >
      {updatedChildren}
    </RadioButtonGroupPrimitive.Item>
  );
};
RadioButtonGroupItem.displayName = 'RadioButtonGroupItem';

interface RadioButtonGroupIconProps extends Omit<PropsWithoutColor<'div'>, 'children'> {}

const RadioButtonGroupIcon = (props: RadioButtonGroupIconProps) => {
  const { color, highContrast } = React.useContext(RadioButtonGroupContext);

  const { className, ...itemProps } = props;
  return (
    <div
      data-accent-color={color}
      className={classNames('fui-RadioButtonGroupIcon', { 'fui-high-contrast': highContrast }, className)}
      aria-hidden
      {...itemProps}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
};
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
      React.Children.toArray(child.props.children).concat(<RadioButtonGroupOverlay />),
    );
  }
  return children;
};

const RadioButtonGroupOverlay = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const parentElement = ref.current?.parentElement;
    if (!parentElement) return;
    const parentElementComputedStyles = getComputedStyle(parentElement);
    ref.current?.style.setProperty('--parent-border-width', parentElementComputedStyles.borderWidth);
    ref.current?.style.setProperty('--parent-border-radius', parentElementComputedStyles.borderRadius);
  }, [ref]);

  return <div ref={ref} className="fui-RadioButtonGroupOverlay" aria-hidden />;
};

export { RadioButtonGroupIcon as Icon, RadioButtonGroupItem as Item, RadioButtonGroupRoot as Root };
export type {
  RadioButtonGroupIconProps as IconProps,
  RadioButtonGroupItemProps as ItemProps,
  RadioButtonGroupRootProps as RootProps,
};

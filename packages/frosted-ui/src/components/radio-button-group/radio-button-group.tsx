'use client';

import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioButtonGroupPrimitive } from '@base-ui/react/radio-group';
import classNames from 'classnames';
import * as React from 'react';

import { radioButtonGroupPropDefs } from './radio-button-group.props';

import { type GetPropDefTypes } from '../../helpers';
import { useIsomorphicLayoutEffect } from '../../helpers/use-isomorphic-layout-effect';

type RadioButtonGroupOwnProps = GetPropDefTypes<typeof radioButtonGroupPropDefs>;

type RadioButtonGroupContextValue = RadioButtonGroupOwnProps;
const RadioButtonGroupContext = React.createContext<RadioButtonGroupContextValue>({});

interface RadioButtonGroupRootProps
  extends
    Omit<React.ComponentProps<typeof RadioButtonGroupPrimitive>, 'className' | 'style' | 'render'>,
    RadioButtonGroupOwnProps {
  className?: string;
  style?: React.CSSProperties;
}

const RadioButtonGroupRoot = (props: RadioButtonGroupRootProps) => {
  const {
    className,
    color = radioButtonGroupPropDefs.color.default,
    highContrast = radioButtonGroupPropDefs.highContrast.default,
    children,
    ...rootProps
  } = props;
  return (
    <RadioButtonGroupPrimitive
      data-accent-color={color}
      {...rootProps}
      className={classNames('fui-RadioButtonGroupRoot', className, { 'fui-high-contrast': highContrast })}
    >
      <RadioButtonGroupContext.Provider value={React.useMemo(() => ({ color, highContrast }), [color, highContrast])}>
        {children}
      </RadioButtonGroupContext.Provider>
    </RadioButtonGroupPrimitive>
  );
};
RadioButtonGroupRoot.displayName = 'RadioButtonGroupRoot';

interface RadioButtonGroupItemProps extends Omit<
  React.ComponentProps<typeof RadioPrimitive.Root>,
  'className' | 'style' | 'render'
> {
  className?: string;
  style?: React.CSSProperties;
}

const RadioButtonGroupItem = (props: RadioButtonGroupItemProps) => {
  const { children, className, style, ...itemProps } = props;

  const updatedChildren = addOverlayToChildren(children);
  return (
    <RadioPrimitive.Root
      style={style}
      {...itemProps}
      className={classNames('fui-reset', 'fui-RadioButtonGroupButton', 'fui-RadioButtonGroupItem', className)}
      render={updatedChildren as React.ReactElement}
    />
  );
};
RadioButtonGroupItem.displayName = 'RadioButtonGroupItem';

interface RadioButtonGroupIconProps extends Omit<React.ComponentProps<'div'>, 'children' | 'color'> {}

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
      React.Children.toArray(child.props.children).concat(<RadioButtonGroupOverlay key="radio-button-group-overlay" />),
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

/** Re-export types from Base UI for typing onValueChange handlers */
type ChangeEventDetails = RadioButtonGroupPrimitive.ChangeEventDetails;
type ChangeEventReason = RadioButtonGroupPrimitive.ChangeEventReason;

export { RadioButtonGroupIcon as Icon, RadioButtonGroupItem as Item, RadioButtonGroupRoot as Root };
export type {
  ChangeEventDetails,
  ChangeEventReason,
  RadioButtonGroupIconProps as IconProps,
  RadioButtonGroupItemProps as ItemProps,
  RadioButtonGroupRootProps as RootProps,
};

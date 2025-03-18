'use client';

import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { calloutRootPropDefs } from './callout.props';
import { Text } from './text';
import { textPropDefs } from './text.props';

import type { ExtractPropsForTag, GetPropDefTypes, MarginProps, PropsWithoutColor } from '../helpers';

type CalloutRootOwnProps = GetPropDefTypes<typeof calloutRootPropDefs>;

type CalloutContextValue = CalloutRootOwnProps;
const CalloutContext = React.createContext<CalloutContextValue>({});

interface CalloutRootProps extends PropsWithoutColor<'div'>, MarginProps, CalloutContextValue {}

const CalloutRoot = (props: CalloutRootProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    children,
    className,
    size = calloutRootPropDefs.size.default,
    variant = calloutRootPropDefs.variant.default,
    color = calloutRootPropDefs.color.default,
    highContrast = calloutRootPropDefs.highContrast.default,
    ...rootProps
  } = marginRest;
  return (
    <div
      data-accent-color={color}
      {...rootProps}
      className={classNames(
        'fui-CalloutRoot',
        className,
        `fui-r-size-${size}`,
        `fui-variant-${variant}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    >
      <CalloutContext.Provider
        value={React.useMemo(() => ({ size, color, highContrast }), [size, color, highContrast])}
      >
        {children}
      </CalloutContext.Provider>
    </div>
  );
};
CalloutRoot.displayName = 'CalloutRoot';

interface CalloutIconProps extends PropsWithoutColor<'div'> {}

const CalloutIcon = (props: CalloutIconProps) => {
  const { color, size, highContrast } = React.useContext(CalloutContext);
  return (
    <Text asChild color={color} size={getTextSize(size)} highContrast={highContrast}>
      <div {...props} className={classNames('fui-CalloutIcon', props.className)} />
    </Text>
  );
};
CalloutIcon.displayName = 'CalloutIcon';

type CalloutTextProps = ExtractPropsForTag<typeof Text, 'p'>;

const CalloutText = (props: CalloutTextProps) => {
  const { color, size, highContrast } = React.useContext(CalloutContext);
  return (
    <Text
      as="p"
      size={getTextSize(size)}
      color={color}
      highContrast={highContrast}
      {...props}
      className={classNames('fui-CalloutText', props.className)}
    />
  );
};
CalloutText.displayName = 'CalloutText';

function getTextSize(size: CalloutRootOwnProps['size']): React.ComponentProps<typeof Text>['size'] {
  if (size === undefined) return undefined;
  if (typeof size === 'string') {
    return getNonResponsiveTextSize(size);
  }
  return Object.fromEntries(Object.entries(size).map(([key, value]) => [key, getNonResponsiveTextSize(value)]));
}
function getNonResponsiveTextSize(
  size: (typeof calloutRootPropDefs.size.values)[number],
): (typeof textPropDefs.size.values)[number] {
  return size === '3' ? '3' : '2';
}

export { CalloutIcon as Icon, CalloutRoot as Root, CalloutText as Text };
export type { CalloutIconProps as IconProps, CalloutRootProps as RootProps, CalloutTextProps as TextProps };

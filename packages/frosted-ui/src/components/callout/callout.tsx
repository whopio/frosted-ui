'use client';

import classNames from 'classnames';
import * as React from 'react';

import { Text, textPropDefs } from '../text';
import { calloutRootPropDefs } from './callout.props';

import type { ExtractPropsForTag, GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type CalloutRootOwnProps = GetPropDefTypes<typeof calloutRootPropDefs>;

type CalloutContextValue = CalloutRootOwnProps;
const CalloutContext = React.createContext<CalloutContextValue>({});

interface CalloutRootProps extends PropsWithoutColor<'div'>, CalloutContextValue {}

const CalloutRoot = (props: CalloutRootProps) => {
  const {
    children,
    className,
    size = calloutRootPropDefs.size.default,
    variant = calloutRootPropDefs.variant.default,
    color = calloutRootPropDefs.color.default,
    highContrast = calloutRootPropDefs.highContrast.default,
    ...rootProps
  } = props;
  return (
    <div
      data-accent-color={color}
      {...rootProps}
      className={classNames('fui-CalloutRoot', className, `fui-r-size-${size}`, `fui-variant-${variant}`, {
        'fui-high-contrast': highContrast,
      })}
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

  return getNonResponsiveTextSize(size);
}
function getNonResponsiveTextSize(
  size: (typeof calloutRootPropDefs.size.values)[number],
): (typeof textPropDefs.size.values)[number] {
  return size === '3' ? '3' : '2';
}

export { CalloutIcon as Icon, CalloutRoot as Root, CalloutText as Text };
export type { CalloutIconProps as IconProps, CalloutRootProps as RootProps, CalloutTextProps as TextProps };

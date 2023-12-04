'use client';

import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { calloutRootPropDefs } from './callout.props';
import { Text } from './text';
import { textPropDefs } from './text.props';

import type {
  ExtractPropsForTag,
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type CalloutRootOwnProps = GetPropDefTypes<typeof calloutRootPropDefs>;

type CalloutContextValue = CalloutRootOwnProps;
const CalloutContext = React.createContext<CalloutContextValue>({});

type CalloutRootElement = React.ElementRef<'div'>;
interface CalloutRootProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps,
    CalloutContextValue {}
const CalloutRoot = React.forwardRef<CalloutRootElement, CalloutRootProps>(
  (props, forwardedRef) => {
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
          withBreakpoints(size, 'fui-r-size'),
          `fui-variant-${variant}`,
          { 'fui-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
        ref={forwardedRef}
      >
        <CalloutContext.Provider
          value={React.useMemo(
            () => ({ size, color, highContrast }),
            [size, color, highContrast],
          )}
        >
          {children}
        </CalloutContext.Provider>
      </div>
    );
  },
);
CalloutRoot.displayName = 'CalloutRoot';

type CalloutIconElement = React.ElementRef<'div'>;
interface CalloutIconProps extends PropsWithoutRefOrColor<'div'> {}
const CalloutIcon = React.forwardRef<CalloutIconElement, CalloutIconProps>(
  (props, forwardedRef) => {
    const { color, size, highContrast } = React.useContext(CalloutContext);
    return (
      <Text
        asChild
        color={color}
        size={getTextSize(size)}
        highContrast={highContrast}
      >
        <div
          {...props}
          className={classNames('fui-CalloutIcon', props.className)}
          ref={forwardedRef}
        />
      </Text>
    );
  },
);
CalloutIcon.displayName = 'CalloutIcon';

type CalloutTextElement = React.ElementRef<'p'>;
type CalloutTextProps = ExtractPropsForTag<typeof Text, 'p'>;
const CalloutText = React.forwardRef<CalloutTextElement, CalloutTextProps>(
  (props, forwardedRef) => {
    const { color, size, highContrast } = React.useContext(CalloutContext);
    return (
      <Text
        as="p"
        size={getTextSize(size)}
        color={color}
        highContrast={highContrast}
        {...props}
        ref={forwardedRef}
        className={classNames('fui-CalloutText', props.className)}
      />
    );
  },
);
CalloutText.displayName = 'CalloutText';

function getTextSize(
  size: CalloutRootOwnProps['size'],
): React.ComponentProps<typeof Text>['size'] {
  if (size === undefined) return undefined;
  if (typeof size === 'string') {
    return getNonResponsiveTextSize(size);
  }
  return Object.fromEntries(
    Object.entries(size).map(([key, value]) => [
      key,
      getNonResponsiveTextSize(value),
    ]),
  );
}
function getNonResponsiveTextSize(
  size: (typeof calloutRootPropDefs.size.values)[number],
): (typeof textPropDefs.size.values)[number] {
  return size === '3' ? '3' : '2';
}

const Callout = Object.assign(
  {},
  {
    Root: CalloutRoot,
    Icon: CalloutIcon,
    Text: CalloutText,
  },
);

export { Callout, CalloutIcon, CalloutRoot, CalloutText };
export type { CalloutIconProps, CalloutRootProps, CalloutTextProps };

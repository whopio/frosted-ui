'use client';

import classNames from 'classnames';
import * as React from 'react';

import { Text, type TextProps } from '../text';
import { calloutRootPropDefs } from './callout.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type CalloutRootOwnProps = GetPropDefTypes<typeof calloutRootPropDefs>;

type CalloutContextValue = CalloutRootOwnProps;
const CalloutContext = React.createContext<CalloutContextValue>({});

interface CalloutRootProps extends PropsWithoutColor<'div'>, CalloutContextValue {}

const CalloutRoot = (props: CalloutRootProps) => {
  const { children, className, color = calloutRootPropDefs.color.default, ...rootProps } = props;
  return (
    <div data-accent-color={color} {...rootProps} className={classNames('fui-CalloutRoot', className)}>
      <CalloutContext.Provider value={React.useMemo(() => ({ color }), [color])}>{children}</CalloutContext.Provider>
    </div>
  );
};
CalloutRoot.displayName = 'CalloutRoot';

interface CalloutIconProps extends PropsWithoutColor<'div'> {}

const CalloutIcon = (props: CalloutIconProps) => {
  const { color } = React.useContext(CalloutContext);
  return (
    <Text
      render={<div />}
      color={color}
      size="2"
      {...props}
      className={classNames('fui-CalloutIcon', props.className)}
    />
  );
};
CalloutIcon.displayName = 'CalloutIcon';

type CalloutTextProps = TextProps;

const CalloutText = (props: CalloutTextProps) => {
  const { color } = React.useContext(CalloutContext);
  return (
    <Text
      render={<p />}
      size="2"
      color={color}
      weight="medium"
      {...props}
      className={classNames('fui-CalloutText', props.className)}
    />
  );
};
CalloutText.displayName = 'CalloutText';

export { CalloutIcon as Icon, CalloutRoot as Root, CalloutText as Text };
export type { CalloutIconProps as IconProps, CalloutRootProps as RootProps, CalloutTextProps as TextProps };

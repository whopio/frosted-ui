'use client';

import { Button } from '@base-ui/react/button';
import classNames from 'classnames';
import * as React from 'react';

import { Spinner } from '../spinner';
import { Text, type TextProps } from '../text';
import { VisuallyHidden } from '../visually-hidden';
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

type CalloutTitleProps = TextProps;

const CalloutTitle = (props: CalloutTitleProps) => {
  const { color } = React.useContext(CalloutContext);
  return (
    <Text
      render={<p />}
      size="2"
      color={color}
      weight="semi-bold"
      highContrast
      {...props}
      className={classNames('fui-CalloutTitle', props.className)}
    />
  );
};
CalloutTitle.displayName = 'CalloutTitle';

type CalloutDescriptionProps = TextProps;

const CalloutDescription = (props: CalloutDescriptionProps) => {
  const { color } = React.useContext(CalloutContext);
  return (
    <Text
      render={<p />}
      size="2"
      color={color}
      {...props}
      className={classNames('fui-CalloutDescription', props.className)}
    />
  );
};
CalloutDescription.displayName = 'CalloutDescription';

interface CalloutActionsProps extends PropsWithoutColor<'div'> {}

const CalloutActions = (props: CalloutActionsProps) => {
  return <div {...props} className={classNames('fui-CalloutActions', props.className)} />;
};
CalloutActions.displayName = 'CalloutActions';

type CalloutActionVariant = 'primary' | 'secondary';

type CalloutActionProps = Omit<PropsWithoutColor<typeof Button>, 'className'> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'> & {
    variant?: CalloutActionVariant;
    loading?: boolean;
    className?: string;
  };

const CalloutAction = (props: CalloutActionProps) => {
  const {
    children,
    variant = 'primary',
    loading,
    disabled = props.loading,
    className,
    render,
    ...actionProps
  } = props;

  const actionClassName = classNames('fui-reset', 'fui-CalloutAction', `fui-variant-${variant}`, className);

  const content = loading ? (
    <>
      {/**
       * We need a wrapper to set `visibility: hidden` to hide the button content whilst we show the `Spinner`.
       * The button is a flex container with a `gap`, so we use `display: contents` to ensure the correct flex layout.
       *
       * However, `display: contents` removes the content from the accessibility tree in some browsers,
       * so we force remove it with `aria-hidden` and re-add it in the tree with `VisuallyHidden`
       */}
      <span style={{ display: 'contents', visibility: 'hidden' }} aria-hidden>
        {children}
      </span>
      <VisuallyHidden>{children}</VisuallyHidden>

      <span
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          inset: '0',
        }}
      >
        <Spinner size="2" />
      </span>
    </>
  ) : (
    children
  );

  return (
    <Button
      render={render}
      {...actionProps}
      className={actionClassName}
      aria-busy={loading || undefined}
      // The `data-disabled` attribute enables correct styles when doing `<Callout.Action render={<a />} disabled>`
      data-disabled={disabled || undefined}
      disabled={disabled}
    >
      {content}
    </Button>
  );
};
CalloutAction.displayName = 'CalloutAction';

export {
  CalloutAction as Action,
  CalloutActions as Actions,
  CalloutDescription as Description,
  CalloutIcon as Icon,
  CalloutRoot as Root,
  CalloutTitle as Title,
};
export type {
  CalloutActionProps as ActionProps,
  CalloutActionsProps as ActionsProps,
  CalloutActionVariant as ActionVariant,
  CalloutDescriptionProps as DescriptionProps,
  CalloutIconProps as IconProps,
  CalloutRootProps as RootProps,
  CalloutTitleProps as TitleProps,
};

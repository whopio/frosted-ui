'use client';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { Theme } from '../theme';
import { alertDialogContentPropDefs } from './alert-dialog.props';
import { Heading } from './heading';
import { Text } from './text';

import type { ExtractPropsForTag, GetPropDefTypes } from '../helpers';

interface AlertDialogRootProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root> {}
const AlertDialogRoot: React.FC<AlertDialogRootProps> = (props) => (
  <AlertDialogPrimitive.Root {...props} />
);
AlertDialogRoot.displayName = 'AlertDialogRoot';

type AlertDialogTriggerElement = React.ElementRef<
  typeof AlertDialogPrimitive.Trigger
>;
interface AlertDialogTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>,
    'asChild'
  > {}
const AlertDialogTrigger = React.forwardRef<
  AlertDialogTriggerElement,
  AlertDialogTriggerProps
>((props, forwardedRef) => (
  <AlertDialogPrimitive.Trigger {...props} ref={forwardedRef} asChild />
));
AlertDialogTrigger.displayName = 'AlertDialogTrigger';

type AlertDialogContentElement = React.ElementRef<
  typeof AlertDialogPrimitive.Content
>;
type AlertDialogContentOwnProps = GetPropDefTypes<
  typeof alertDialogContentPropDefs
>;

type AlertDialogContentContextValue = {
  size: AlertDialogContentOwnProps['size'];
};
const AlertDialogContentContext =
  React.createContext<AlertDialogContentContextValue>({
    size: alertDialogContentPropDefs.size.default,
  });

interface AlertDialogContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>,
      'asChild'
    >,
    AlertDialogContentOwnProps {
  container?: React.ComponentProps<
    typeof AlertDialogPrimitive.Portal
  >['container'];
}
const AlertDialogContent = React.forwardRef<
  AlertDialogContentElement,
  AlertDialogContentProps
>((props, forwardedRef) => {
  const {
    className,
    children,
    forceMount,
    container,
    size = alertDialogContentPropDefs.size.default,
    ...contentProps
  } = props;
  return (
    <AlertDialogPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <AlertDialogPrimitive.Overlay className="fui-DialogOverlay fui-AlertDialogOverlay">
          <AlertDialogPrimitive.Content
            {...contentProps}
            ref={forwardedRef}
            className={classNames(
              'fui-DialogContent',
              'fui-AlertDialogContent',
              className,
              withBreakpoints(size, 'fui-r-size'),
            )}
          >
            <AlertDialogContentContext.Provider
              value={React.useMemo(() => ({ size }), [size])}
            >
              {children}
            </AlertDialogContentContext.Provider>
          </AlertDialogPrimitive.Content>
        </AlertDialogPrimitive.Overlay>
      </Theme>
    </AlertDialogPrimitive.Portal>
  );
});
AlertDialogContent.displayName = 'AlertDialogContent';

type AlertDialogTitleElement = React.ElementRef<typeof Heading>;
type AlertDialogTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;
const AlertDialogTitle = React.forwardRef<
  AlertDialogTitleElement,
  AlertDialogTitleProps
>(({ size: sizeProp, mb: mbProp, ...props }, forwardedRef) => {
  const { size: contextSize } = React.useContext(AlertDialogContentContext);
  let size: AlertDialogTitleProps['size'];

  if (contextSize) {
    size = (
      {
        '1': '2',
        '2': '5',
        '3': '5',
        '4': '6',
      } as const
    )[contextSize];
  }

  let mb: AlertDialogTitleProps['mb'] = '3';

  if (contextSize) {
    mb = (
      {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '3',
      } as const
    )[contextSize];
  }
  return (
    <AlertDialogPrimitive.Title asChild>
      <Heading
        size={sizeProp || size}
        mb={mbProp || mb}
        trim="start"
        {...props}
        ref={forwardedRef}
      />
    </AlertDialogPrimitive.Title>
  );
});
AlertDialogTitle.displayName = 'AlertDialogTitle';

type AlertDialogDescriptionElement = HTMLParagraphElement;
type AlertDialogDescriptionProps = ExtractPropsForTag<typeof Text, 'p'>;
const AlertDialogDescription = React.forwardRef<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionProps
>(({ size: sizeProp, mb: mbProp, ...props }, forwardedRef) => {
  const { size: contextSize } = React.useContext(AlertDialogContentContext);
  let size: AlertDialogDescriptionProps['size'];

  if (contextSize) {
    size = (
      {
        '1': '1',
        '2': '2',
        '3': '2',
        '4': '3',
      } as const
    )[contextSize];
  }

  let mb: AlertDialogDescriptionProps['mb'] = '3';

  if (contextSize) {
    mb = (
      {
        '1': '3',
        '2': '4',
        '3': '4',
        '4': '6',
      } as const
    )[contextSize];
  }
  return (
    <AlertDialogPrimitive.Description asChild>
      <Text
        as="p"
        size={sizeProp || size}
        mb={mbProp || mb}
        {...props}
        ref={forwardedRef}
      />
    </AlertDialogPrimitive.Description>
  );
});
AlertDialogDescription.displayName = 'AlertDialogDescription';

type AlertDialogActionElement = React.ElementRef<
  typeof AlertDialogPrimitive.Action
>;
interface AlertDialogActionProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>,
    'asChild'
  > {}
const AlertDialogAction = React.forwardRef<
  AlertDialogActionElement,
  AlertDialogActionProps
>((props, forwardedRef) => (
  <AlertDialogPrimitive.Action {...props} ref={forwardedRef} asChild />
));
AlertDialogAction.displayName = 'AlertDialogAction';

type AlertDialogCancelElement = React.ElementRef<
  typeof AlertDialogPrimitive.Cancel
>;
interface AlertDialogCancelProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>,
    'asChild'
  > {}
const AlertDialogCancel = React.forwardRef<
  AlertDialogCancelElement,
  AlertDialogCancelProps
>((props, forwardedRef) => (
  <AlertDialogPrimitive.Cancel {...props} ref={forwardedRef} asChild />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';

const AlertDialog = Object.assign(
  {},
  {
    Root: AlertDialogRoot,
    Trigger: AlertDialogTrigger,
    Content: AlertDialogContent,
    Title: AlertDialogTitle,
    Description: AlertDialogDescription,
    Action: AlertDialogAction,
    Cancel: AlertDialogCancel,
  },
);

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
};

export type {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogRootProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
};

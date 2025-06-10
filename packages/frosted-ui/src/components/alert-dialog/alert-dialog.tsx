'use client';

import classNames from 'classnames';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import * as React from 'react';
import { Theme } from '../../theme';
import { Heading } from '../heading';
import { Text } from '../text';
import { alertDialogContentPropDefs } from './alert-dialog.props';

import type { ExtractPropsForTag, GetPropDefTypes } from '../../helpers';

interface AlertDialogRootProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {}
const AlertDialogRoot: React.FC<AlertDialogRootProps> = (props) => <AlertDialogPrimitive.Root {...props} />;
AlertDialogRoot.displayName = 'AlertDialogRoot';

interface AlertDialogTriggerProps extends Omit<React.ComponentProps<typeof AlertDialogPrimitive.Trigger>, 'asChild'> {}

const AlertDialogTrigger = (props: AlertDialogTriggerProps) => <AlertDialogPrimitive.Trigger {...props} asChild />;
AlertDialogTrigger.displayName = 'AlertDialogTrigger';

type AlertDialogContentOwnProps = GetPropDefTypes<typeof alertDialogContentPropDefs>;

type AlertDialogContentContextValue = {
  size: AlertDialogContentOwnProps['size'];
};
const AlertDialogContentContext = React.createContext<AlertDialogContentContextValue>({
  size: alertDialogContentPropDefs.size.default,
});

interface AlertDialogContentProps
  extends Omit<React.ComponentProps<typeof AlertDialogPrimitive.Content>, 'asChild'>,
    AlertDialogContentOwnProps {
  container?: React.ComponentProps<typeof AlertDialogPrimitive.Portal>['container'];
}

const AlertDialogContent = (props: AlertDialogContentProps) => {
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
            className={classNames('fui-DialogContent', 'fui-AlertDialogContent', className, `fui-r-size-${size}`)}
          >
            <AlertDialogContentContext.Provider value={React.useMemo(() => ({ size }), [size])}>
              {children}
            </AlertDialogContentContext.Provider>
          </AlertDialogPrimitive.Content>
        </AlertDialogPrimitive.Overlay>
      </Theme>
    </AlertDialogPrimitive.Portal>
  );
};
AlertDialogContent.displayName = 'AlertDialogContent';

type AlertDialogTitleProps = React.ComponentProps<typeof Heading>;

const AlertDialogTitle = ({ size: sizeProp, className, ...props }: AlertDialogTitleProps) => {
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

  return (
    <AlertDialogPrimitive.Title asChild>
      <Heading size={sizeProp || size} trim="start" className={classNames('fui-DialogTitle', className)} {...props} />
    </AlertDialogPrimitive.Title>
  );
};
AlertDialogTitle.displayName = 'AlertDialogTitle';

type AlertDialogDescriptionProps = ExtractPropsForTag<typeof Text, 'p'>;

const AlertDialogDescription = ({ size: sizeProp, className, ...props }: AlertDialogDescriptionProps) => {
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

  return (
    <AlertDialogPrimitive.Description asChild>
      <Text as="p" size={sizeProp || size} className={classNames('fui-DialogDescription', className)} {...props} />
    </AlertDialogPrimitive.Description>
  );
};
AlertDialogDescription.displayName = 'AlertDialogDescription';

interface AlertDialogActionProps extends Omit<React.ComponentProps<typeof AlertDialogPrimitive.Action>, 'asChild'> {}

const AlertDialogAction = (props: AlertDialogActionProps) => <AlertDialogPrimitive.Action {...props} asChild />;
AlertDialogAction.displayName = 'AlertDialogAction';

interface AlertDialogCancelProps extends Omit<React.ComponentProps<typeof AlertDialogPrimitive.Cancel>, 'asChild'> {}

const AlertDialogCancel = (props: AlertDialogCancelProps) => <AlertDialogPrimitive.Cancel {...props} asChild />;
AlertDialogCancel.displayName = 'AlertDialogCancel';

export {
  AlertDialogAction as Action,
  AlertDialogCancel as Cancel,
  AlertDialogContent as Content,
  AlertDialogDescription as Description,
  AlertDialogRoot as Root,
  AlertDialogTitle as Title,
  AlertDialogTrigger as Trigger,
};

export type {
  AlertDialogActionProps as ActionProps,
  AlertDialogCancelProps as CancelProps,
  AlertDialogContentProps as ContentProps,
  AlertDialogDescriptionProps as DescriptionProps,
  AlertDialogRootProps as RootProps,
  AlertDialogTitleProps as TitleProps,
  AlertDialogTriggerProps as TriggerProps,
};

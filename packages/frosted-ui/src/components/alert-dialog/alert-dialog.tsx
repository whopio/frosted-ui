'use client';

import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { Heading } from '../heading';
import { Text } from '../text';
import { alertDialogContentPropDefs } from './alert-dialog.props';

import type { ExtractPropsForTag, GetPropDefTypes } from '../../helpers';

// Root
type AlertDialogRootOwnProps = Omit<React.ComponentProps<typeof AlertDialogPrimitive.Root>, 'className' | 'render'>;
interface AlertDialogRootProps extends AlertDialogRootOwnProps {}
const AlertDialogRoot: React.FC<AlertDialogRootProps> = (props) => <AlertDialogPrimitive.Root {...props} />;
AlertDialogRoot.displayName = 'AlertDialogRoot';

// Trigger
interface AlertDialogTriggerProps extends Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Trigger>,
  'render' | 'className'
> {
  className?: string;
}

const AlertDialogTrigger = ({ children, ...props }: AlertDialogTriggerProps) => (
  <AlertDialogPrimitive.Trigger {...props} render={children as React.ReactElement} />
);
AlertDialogTrigger.displayName = 'AlertDialogTrigger';

// Content
type AlertDialogContentOwnProps = GetPropDefTypes<typeof alertDialogContentPropDefs>;

type AlertDialogContentContextValue = {
  size: AlertDialogContentOwnProps['size'];
};
const AlertDialogContentContext = React.createContext<AlertDialogContentContextValue>({
  size: alertDialogContentPropDefs.size.default,
});

type PopupProps = React.ComponentProps<typeof AlertDialogPrimitive.Popup>;
type PortalProps = React.ComponentProps<typeof AlertDialogPrimitive.Portal>;

interface AlertDialogContentProps extends Omit<PopupProps, 'className' | 'render'>, AlertDialogContentOwnProps {
  className?: string;
  container?: PortalProps['container'];
  keepMounted?: PortalProps['keepMounted'];
}

const AlertDialogContent = (props: AlertDialogContentProps) => {
  const {
    className,
    children,
    keepMounted,
    container,
    size = alertDialogContentPropDefs.size.default,
    ...popupProps
  } = props;

  return (
    <AlertDialogPrimitive.Portal container={container} keepMounted={keepMounted}>
      <AlertDialogPrimitive.Backdrop className="fui-DialogBackdrop fui-AlertDialogBackdrop" />
      <AlertDialogPrimitive.Viewport className="fui-DialogOverlay fui-AlertDialogOverlay">
        <Theme asChild>
          <AlertDialogPrimitive.Popup
            {...popupProps}
            className={classNames('fui-DialogContent', 'fui-AlertDialogContent', className, `fui-r-size-${size}`)}
          >
            <AlertDialogContentContext.Provider value={React.useMemo(() => ({ size }), [size])}>
              {children}
            </AlertDialogContentContext.Provider>
          </AlertDialogPrimitive.Popup>
        </Theme>
      </AlertDialogPrimitive.Viewport>
    </AlertDialogPrimitive.Portal>
  );
};
AlertDialogContent.displayName = 'AlertDialogContent';

// Title
type AlertDialogTitleProps = React.ComponentProps<typeof Heading>;

const AlertDialogTitle = ({ size: sizeProp, className, ...props }: AlertDialogTitleProps) => {
  const { size: contextSize } = React.useContext(AlertDialogContentContext);
  let size: AlertDialogTitleProps['size'];

  if (contextSize) {
    size = (
      {
        '1': '3',
        '2': '5',
        '3': '5',
        '4': '6',
      } as const
    )[contextSize];
  }

  return (
    <AlertDialogPrimitive.Title
      render={
        <Heading size={sizeProp || size} trim="start" className={classNames('fui-DialogTitle', className)} {...props} />
      }
    />
  );
};
AlertDialogTitle.displayName = 'AlertDialogTitle';

// Description
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
    <AlertDialogPrimitive.Description
      render={
        <Text as="p" size={sizeProp || size} className={classNames('fui-DialogDescription', className)} {...props} />
      }
    />
  );
};
AlertDialogDescription.displayName = 'AlertDialogDescription';

// Close (new Base UI component)
interface AlertDialogCloseProps extends Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Close>,
  'render' | 'className'
> {
  className?: string;
}

const AlertDialogClose = ({ children, ...props }: AlertDialogCloseProps) => (
  <AlertDialogPrimitive.Close {...props} render={children as React.ReactElement} />
);
AlertDialogClose.displayName = 'AlertDialogClose';

// Action (backwards compatibility alias for Close)
interface AlertDialogActionProps extends AlertDialogCloseProps {}
const AlertDialogAction = AlertDialogClose;
AlertDialogAction.displayName = 'AlertDialogAction';

// Cancel (backwards compatibility alias for Close)
interface AlertDialogCancelProps extends AlertDialogCloseProps {}
const AlertDialogCancel = AlertDialogClose;
AlertDialogCancel.displayName = 'AlertDialogCancel';

// createHandle export
const createHandle = AlertDialogPrimitive.createHandle;

export {
  AlertDialogAction as Action,
  AlertDialogCancel as Cancel,
  AlertDialogClose as Close,
  AlertDialogContent as Content,
  createHandle,
  AlertDialogDescription as Description,
  AlertDialogRoot as Root,
  AlertDialogTitle as Title,
  AlertDialogTrigger as Trigger,
};

export type {
  AlertDialogActionProps as ActionProps,
  AlertDialogCancelProps as CancelProps,
  AlertDialogCloseProps as CloseProps,
  AlertDialogContentProps as ContentProps,
  AlertDialogDescriptionProps as DescriptionProps,
  AlertDialogRootProps as RootProps,
  AlertDialogTitleProps as TitleProps,
  AlertDialogTriggerProps as TriggerProps,
};

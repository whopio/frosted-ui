'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { Theme } from '../theme';
import { dialogContentPropDefs } from './dialog.props';
import { Heading } from './heading';
import { Text } from './text';

import type { ExtractPropsForTag, GetPropDefTypes } from '../helpers';

interface DialogRootProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>,
    'modal'
  > {}
const DialogRoot: React.FC<DialogRootProps> = (props) => (
  <DialogPrimitive.Root {...props} modal />
);
DialogRoot.displayName = 'DialogRoot';

interface DialogTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>,
    'asChild'
  > {}
const DialogTrigger = (props: DialogTriggerProps) => (
  <DialogPrimitive.Trigger {...props} asChild />
);
DialogTrigger.displayName = 'DialogTrigger';

type DialogContentOwnProps = GetPropDefTypes<typeof dialogContentPropDefs>;

type DialogContentContextValue = { size: DialogContentOwnProps['size'] };
const DialogContentContext = React.createContext<DialogContentContextValue>({
  size: dialogContentPropDefs.size.default,
});

interface DialogContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
      'asChild'
    >,
    DialogContentOwnProps {
  container?: React.ComponentProps<typeof DialogPrimitive.Portal>['container'];
}
const DialogContent = (props: DialogContentProps) => {
  const {
    className,
    children,
    forceMount,
    container,
    size = dialogContentPropDefs.size.default,
    ...contentProps
  } = props;
  return (
    <DialogPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <DialogPrimitive.Overlay className="fui-DialogOverlay">
          <DialogPrimitive.Content
            {...contentProps}
            className={classNames(
              'fui-DialogContent',
              className,
              withBreakpoints(size, 'fui-r-size'),
            )}
          >
            <DialogContentContext.Provider
              value={React.useMemo(() => ({ size }), [size])}
            >
              {children}
            </DialogContentContext.Provider>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </Theme>
    </DialogPrimitive.Portal>
  );
};
DialogContent.displayName = 'DialogContent';

type DialogTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;
const DialogTitle = ({
  size: sizeProp,
  mb: mbProp,
  ...props
}: DialogTitleProps) => {
  const { size: contextSize } = React.useContext(DialogContentContext);
  let size: DialogTitleProps['size'];

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

  let mb: DialogTitleProps['mb'] = '3';

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
    <DialogPrimitive.Title asChild>
      <Heading
        size={sizeProp || size}
        mb={mbProp || mb}
        trim="start"
        {...props}
      />
    </DialogPrimitive.Title>
  );
};
DialogTitle.displayName = 'DialogTitle';

type DialogDescriptionProps = ExtractPropsForTag<typeof Text, 'p'>;
const DialogDescription = ({
  size: sizeProp,
  mb: mbProp,
  ...props
}: DialogDescriptionProps) => {
  const { size: contextSize } = React.useContext(DialogContentContext);
  let size: DialogDescriptionProps['size'];

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

  let mb: DialogDescriptionProps['mb'] = '3';

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
    <DialogPrimitive.Description asChild>
      <Text as="p" size={sizeProp || size} mb={mbProp || mb} {...props} />
    </DialogPrimitive.Description>
  );
};
DialogDescription.displayName = 'DialogDescription';

interface DialogCloseProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
    'asChild'
  > {}
const DialogClose = (props: DialogCloseProps) => (
  <DialogPrimitive.Close {...props} asChild />
);
DialogClose.displayName = 'DialogClose';

export {
  DialogClose as Close,
  DialogContent as Content,
  DialogDescription as Description,
  DialogRoot as Root,
  DialogTitle as Title,
  DialogTrigger as Trigger,
};

export type {
  DialogCloseProps as CloseProps,
  DialogContentProps as ContentProps,
  DialogDescriptionProps as DescriptionProps,
  DialogRootProps as RootProps,
  DialogTitleProps as TitleProps,
  DialogTriggerProps as TriggerProps,
};

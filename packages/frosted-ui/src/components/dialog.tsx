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

type DialogTriggerElement = React.ElementRef<typeof DialogPrimitive.Trigger>;
interface DialogTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>,
    'asChild'
  > {}
const DialogTrigger = React.forwardRef<
  DialogTriggerElement,
  DialogTriggerProps
>((props, forwardedRef) => (
  <DialogPrimitive.Trigger {...props} ref={forwardedRef} asChild />
));
DialogTrigger.displayName = 'DialogTrigger';

type DialogContentElement = React.ElementRef<typeof DialogPrimitive.Content>;
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
const DialogContent = React.forwardRef<
  DialogContentElement,
  DialogContentProps
>((props, forwardedRef) => {
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
        <DialogPrimitive.Overlay className="rt-DialogOverlay">
          <DialogPrimitive.Content
            {...contentProps}
            ref={forwardedRef}
            className={classNames(
              'rt-DialogContent',
              className,
              withBreakpoints(size, 'rt-r-size'),
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
});
DialogContent.displayName = 'DialogContent';

type DialogTitleElement = React.ElementRef<typeof Heading>;
type DialogTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;
const DialogTitle = React.forwardRef<DialogTitleElement, DialogTitleProps>(
  ({ size: sizeProp, mb: mbProp, ...props }, forwardedRef) => {
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
          ref={forwardedRef}
        />
      </DialogPrimitive.Title>
    );
  },
);
DialogTitle.displayName = 'DialogTitle';

type DialogDescriptionElement = HTMLParagraphElement;
type DialogDescriptionProps = ExtractPropsForTag<typeof Text, 'p'>;
const DialogDescription = React.forwardRef<
  DialogDescriptionElement,
  DialogDescriptionProps
>(({ size: sizeProp, mb: mbProp, ...props }, forwardedRef) => {
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
      <Text
        as="p"
        size={sizeProp || size}
        mb={mbProp || mb}
        {...props}
        ref={forwardedRef}
      />
    </DialogPrimitive.Description>
  );
});
DialogDescription.displayName = 'DialogDescription';

type DialogCloseElement = React.ElementRef<typeof DialogPrimitive.Close>;
interface DialogCloseProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
    'asChild'
  > {}
const DialogClose = React.forwardRef<DialogCloseElement, DialogCloseProps>(
  (props, forwardedRef) => (
    <DialogPrimitive.Close {...props} ref={forwardedRef} asChild />
  ),
);
DialogClose.displayName = 'DialogClose';

const Dialog = Object.assign(
  {},
  {
    Root: DialogRoot,
    Trigger: DialogTrigger,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
  },
);

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
};

export type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
};

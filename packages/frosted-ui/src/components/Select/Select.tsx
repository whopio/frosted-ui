'use client';

import {
  faChevronDown,
  faChevronUp,
  faExclamationCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import type * as Radix from '@radix-ui/react-primitive';
import {
  Content,
  Icon as IconPrimitive,
  Portal,
  SelectProps as RadixSelectProps,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  SelectContentProps,
  SelectIconProps,
  SelectPortalProps,
  SelectTriggerProps,
  SelectValueProps,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { Size } from '../../lib/shared-component-types';
import { Icon } from '../Icon';
import { Label, LabelProps } from '../Label';
import { SelectItem, SelectItemProps } from '../SelectItem';

export type SelectSize = Extract<Size, 'sm' | 'md' | 'lg'>;
export const SelectSizes: { [key: string]: SelectSize } = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

export type SelectProps = {
  label?: LabelProps;
  size?: SelectSize;
  isDisabled?: boolean;
  isRequired?: boolean;
  helpMessage?: string;
  errorMessage?: string;
  messageIcon?: boolean;
  leftIcon?: IconDefinition;
  wrapperClassName?: string;
  className?: string;
  contentClassName?: string;
  items?: SelectItemProps[];
} & Omit<RadixSelectProps, 'dir' | 'disabled' | 'required'> &
  Omit<SelectTriggerProps, 'asChild'> &
  Omit<SelectValueProps, 'asChild'> &
  Omit<SelectIconProps, 'asChild'> &
  SelectPortalProps &
  Omit<SelectContentProps, 'asChild'>;

export const Select = forwardRef<
  React.ElementRef<typeof Root>,
  Radix.ComponentPropsWithoutRef<typeof Root> & SelectProps
>(
  (
    {
      label,
      children,
      items,
      size = 'md',
      helpMessage,
      errorMessage,
      messageIcon = true,
      leftIcon,
      isDisabled,
      isRequired,
      value,
      onValueChange,
      defaultValue,
      name,
      open,
      onOpenChange,
      defaultOpen,
      placeholder,
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      position = 'popper',
      side,
      sideOffset,
      align,
      alignOffset,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      arrowPadding,
      sticky,
      hideWhenDetached,
      wrapperClassName,
      className,
      contentClassName,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div className={cn('relative h-fit w-full', wrapperClassName)}>
        {label && <Label wrapperClassName="mb-2" {...label} />}
        <Root
          dir="ltr"
          name={name}
          disabled={isDisabled}
          required={isRequired}
          defaultValue={defaultValue}
          value={value}
          onValueChange={onValueChange}
          onChange={onValueChange}
          defaultOpen={defaultOpen}
          open={open}
          onOpenChange={onOpenChange}
          {...props}
        >
          <Trigger
            className={cn(
              'data-[placeholder]:text-whop-dark-gray/[50%] bg-whop-background text-whop-black text-text1 inline-flex w-full min-w-[244px] select-none items-center justify-between rounded-md pl-3 shadow-sm',
              'border-whop-stroke-dark focus:border-whop-field-highlight focus:ring-whop-field-highlight/30 border outline-none transition focus:outline-none focus:ring',
              'data-[disabled]:bg-whop-hover data-[disabled]:cursor-not-allowed data-[disabled]:opacity-75',
              className,
              {
                'h-8': size === 'sm',
                'h-10': size === 'md',
                'h-12': size === 'lg',
              },
              {
                'pl-[38px]': !!leftIcon,
              },
              {
                '!border-whop-error-red focus:!ring-whop-error-red/30':
                  !!errorMessage,
              },
            )}
            ref={forwardedRef}
          >
            {leftIcon && (
              <IconPrimitive
                className={cn(
                  'text-whop-dark-gray/[75%] pointer-events-none absolute left-3',
                  {
                    'text-[15px]': size === 'sm',
                    'text-base': size === 'md' || size === 'lg',
                  },
                )}
              >
                <Icon icon={leftIcon} />
              </IconPrimitive>
            )}
            <span className="truncate">
              <Value placeholder={placeholder} aria-label={value} />
            </span>
            <IconPrimitive>
              <Icon
                icon={faChevronDown}
                className="text-whop-black pointer-events-none h-3.5 pr-3 text-sm"
              />
            </IconPrimitive>
          </Trigger>
          <Portal>
            <Content
              onCloseAutoFocus={onCloseAutoFocus}
              onEscapeKeyDown={onEscapeKeyDown}
              onPointerDownOutside={onPointerDownOutside}
              position={position}
              side={side}
              sideOffset={sideOffset}
              align={align}
              alignOffset={alignOffset}
              avoidCollisions={avoidCollisions}
              collisionBoundary={collisionBoundary}
              collisionPadding={collisionPadding}
              arrowPadding={arrowPadding}
              sticky={sticky}
              hideWhenDetached={hideWhenDetached}
              className={cn(
                // z-index has to be bigger than z-index of <Modal /> or <Drawer />
                'z-[111] border-whop-stroke-dark bg-whop-background mt-1.5 max-h-[var(--radix-select-content-available-height)] w-[244px] overflow-auto rounded-md border py-1 shadow-lg focus:outline-none',
                contentClassName,
              )}
            >
              <ScrollUpButton className="flex justify-center">
                <Icon
                  icon={faChevronUp}
                  className="text-whop-dark-gray h-3.5 text-sm"
                />
              </ScrollUpButton>
              <Viewport>
                {items
                  ? items.map((item) => (
                      <SelectItem key={item.value} {...item} />
                    ))
                  : children}
              </Viewport>
              <ScrollDownButton className="flex justify-center">
                <Icon
                  icon={faChevronDown}
                  className="text-whop-dark-gray h-3.5 text-sm"
                />
              </ScrollDownButton>
            </Content>
          </Portal>
        </Root>
        {(errorMessage || helpMessage) && (
          <div
            className={cn(
              'mt-2 flex items-start gap-1 text-xs',
              { 'opacity-75': isDisabled },
              {
                'text-whop-error-red ': !!errorMessage,
                'text-whop-dark-gray': !!helpMessage,
              },
            )}
          >
            {messageIcon && (
              <Icon
                icon={helpMessage ? faInfoCircle : faExclamationCircle}
                className="mt-px h-3"
              />
            )}
            <div className="text-text5 flex-wrap">
              {errorMessage || helpMessage}
            </div>
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';

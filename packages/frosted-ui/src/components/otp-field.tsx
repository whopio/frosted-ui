'use client';

import classNames from 'classnames';
import { OTPInput, SlotProps } from 'input-otp';
import * as React from 'react';

// TODO: margin props, color, variant and size support

type OTPFieldRootProps = React.ComponentPropsWithoutRef<typeof OTPInput>;

const OTPFieldRoot: React.ForwardRefRenderFunction<
  React.ElementRef<typeof OTPInput>,
  OTPFieldRootProps
> = ({ className, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={classNames('fui-OTPFieldRoot', className)}
    {...props}
  />
);

const ForwardedOTPFieldRoot = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  OTPFieldRootProps
>(OTPFieldRoot);

ForwardedOTPFieldRoot.displayName = 'OTPFieldRoot';

const OTPFieldGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-accent-color
    className={classNames('fui-OTPFieldGroup', className)}
    {...props}
  />
));
OTPFieldGroup.displayName = 'OTPFieldGroup';

const OTPFieldSlot = React.forwardRef<
  React.ElementRef<'div'>,
  SlotProps & React.ComponentPropsWithoutRef<'div'>
>(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('fui-OTPFieldSlot ', className)}
      data-otp-active={isActive}
      {...props}
    >
      {char}
      {hasFakeCaret && <div className="fui-OTPFieldCaret" />}
    </div>
  );
});
OTPFieldSlot.displayName = 'OTPFieldSlot';

const OTPFieldSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className="fui-OTPFieldSeparator"
    {...props}
  ></div>
));
OTPFieldSeparator.displayName = 'OTPFieldSeparator';

export {
  OTPFieldGroup as Group,
  ForwardedOTPFieldRoot as Root,
  OTPFieldSeparator as Separator,
  OTPFieldSlot as Slot,
};

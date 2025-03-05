'use client';

import classNames from 'classnames';
import { OTPInput, SlotProps } from 'input-otp';
import * as React from 'react';

// TODO: margin props, color, variant and size support

type OTPFieldRootProps = React.ComponentProps<typeof OTPInput>;

const OTPFieldRoot = ({ className, ...props }: OTPFieldRootProps) => (
  <OTPInput containerClassName={classNames('fui-OTPFieldRoot', className)} {...props} />
);

OTPFieldRoot.displayName = 'OTPFieldRoot';

type OTPFieldGroupProps = React.ComponentProps<'div'>;

const OTPFieldGroup = ({ className, ...props }: OTPFieldGroupProps) => (
  <div data-accent-color className={classNames('fui-OTPFieldGroup', className)} {...props} />
);
OTPFieldGroup.displayName = 'OTPFieldGroup';

type OTPFieldSlotProps = SlotProps & React.ComponentProps<'div'>;

const OTPFieldSlot = ({ char, hasFakeCaret, isActive, className, ...props }: OTPFieldSlotProps) => {
  return (
    <div className={classNames('fui-OTPFieldSlot ', className)} data-otp-active={isActive} {...props}>
      {char}
      {hasFakeCaret && <div className="fui-OTPFieldCaret" />}
    </div>
  );
};
OTPFieldSlot.displayName = 'OTPFieldSlot';

type OTPFieldSeparatorProps = React.ComponentProps<'div'>;

const OTPFieldSeparator = ({ ...props }: OTPFieldSeparatorProps) => (
  <div role="separator" className="fui-OTPFieldSeparator" {...props}></div>
);
OTPFieldSeparator.displayName = 'OTPFieldSeparator';

export { OTPFieldGroup as Group, OTPFieldRoot as Root, OTPFieldSeparator as Separator, OTPFieldSlot as Slot };

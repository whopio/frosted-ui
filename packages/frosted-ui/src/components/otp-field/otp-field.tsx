'use client';

import classNames from 'classnames';
import { OTPInput, SlotProps } from 'input-otp';
import * as React from 'react';
import { otpFieldPropDefs } from './otp-field.props';

import { type GetPropDefTypes, type PropsWithoutColor } from '../../helpers';

// TODO: margin props, variant and size support

type OTPFieldContextValue = GetPropDefTypes<typeof otpFieldPropDefs>;
const OTPFieldContext = React.createContext<OTPFieldContextValue | undefined>(undefined);

type OTPFieldRootOwnProps = React.ComponentProps<typeof OTPInput>;
type OTPFieldRootProps = OTPFieldRootOwnProps & OTPFieldContextValue;

const OTPFieldRoot = ({ containerClassName, color = otpFieldPropDefs.color.default, ...props }: OTPFieldRootProps) => (
  <OTPFieldContext.Provider value={{ color }}>
    <OTPInput containerClassName={classNames('fui-OTPFieldRoot', containerClassName)} {...props} />
  </OTPFieldContext.Provider>
);

OTPFieldRoot.displayName = 'OTPFieldRoot';

type OTPFieldGroupProps = PropsWithoutColor<'div'> & Partial<OTPFieldContextValue>;

const OTPFieldGroup = ({ className, color, ...props }: OTPFieldGroupProps) => {
  const context = React.useContext(OTPFieldContext);
  const resolvedColor = color ?? context?.color ?? otpFieldPropDefs.color.default;
  return <div data-accent-color={resolvedColor} className={classNames('fui-OTPFieldGroup', className)} {...props} />;
};
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
export type {
  OTPFieldGroupProps as GroupProps,
  OTPFieldRootProps as RootProps,
  OTPFieldSeparatorProps as SeparatorProps,
  OTPFieldSlotProps as SlotProps,
};

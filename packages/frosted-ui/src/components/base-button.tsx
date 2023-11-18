import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { baseButtonPropDefs } from './base-button.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type BaseButtonElement = React.ElementRef<'button'>;
type BaseButtonOwnProps = GetPropDefTypes<typeof baseButtonPropDefs>;
interface BaseButtonProps
  extends PropsWithoutRefOrColor<'button'>,
    MarginProps,
    BaseButtonOwnProps {
  asChild?: boolean;
}
const BaseButton = React.forwardRef<BaseButtonElement, BaseButtonProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      asChild = false,
      size = baseButtonPropDefs.size.default,
      variant = baseButtonPropDefs.variant.default,
      color = baseButtonPropDefs.color.default,
      highContrast = baseButtonPropDefs.highContrast.default,
      ...baseButtonProps
    } = marginRest;
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
        data-disabled={baseButtonProps.disabled || undefined}
        data-accent-color={color || (variant === 'surface' ? 'gray' : color)}
        {...baseButtonProps}
        ref={forwardedRef}
        className={classNames(
          'rt-reset',
          'rt-BaseButton',
          className,
          withBreakpoints(size, 'rt-r-size'),
          `rt-variant-${variant}`,
          { 'rt-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
      />
    );
  },
);
BaseButton.displayName = 'BaseButton';

export { BaseButton };
export type { BaseButtonProps };

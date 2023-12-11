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
  loading?: boolean;
}
const BaseButton = React.forwardRef<BaseButtonElement, BaseButtonProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      children,
      loading,
      disabled,
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
        data-accent-color={color || (variant === 'surface' ? 'gray' : color)}
        {...baseButtonProps}
        ref={forwardedRef}
        className={classNames(
          'fui-reset',
          'fui-BaseButton',
          className,
          withBreakpoints(size, 'fui-r-size'),
          `fui-variant-${variant}`,
          { 'fui-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
        aria-busy={loading || undefined}
        // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
        data-disabled={disabled || undefined}
        aria-disabled={disabled || loading || undefined}
        disabled={disabled || loading || undefined}
      >
        <>
          {children}

          {loading && (
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="fui-BaseButtonSpinner"
            >
              <path
                fill="currentColor"
                d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
              ></path>
            </svg>
          )}
        </>
      </Comp>
    );
  },
);
BaseButton.displayName = 'BaseButton';

export { BaseButton };
export type { BaseButtonProps };

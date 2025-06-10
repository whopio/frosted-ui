import classNames from 'classnames';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { baseButtonPropDefs } from './base-button.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';
import { mapButtonSizeToSpinnerSize } from '../../helpers/map-prop-values';
import { Spinner } from '../spinner';
import { VisuallyHidden } from '../visually-hidden';

type BaseButtonOwnProps = GetPropDefTypes<typeof baseButtonPropDefs>;
interface BaseButtonProps extends PropsWithoutColor<'button'>, BaseButtonOwnProps {
  asChild?: boolean;
  loading?: boolean;
}

const BaseButton = (props: BaseButtonProps) => {
  const {
    children,
    loading,
    disabled = props.loading,
    className,
    asChild = false,
    size = baseButtonPropDefs.size.default,
    variant = baseButtonPropDefs.variant.default,
    color = baseButtonPropDefs.color.default,
    highContrast = baseButtonPropDefs.highContrast.default,
    ...baseButtonProps
  } = props;
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-accent-color={color || (variant === 'surface' ? 'gray' : color)}
      {...baseButtonProps}
      className={classNames('fui-reset', 'fui-BaseButton', className, `fui-r-size-${size}`, `fui-variant-${variant}`, {
        'fui-high-contrast': highContrast,
      })}
      aria-busy={loading || undefined}
      // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
      data-disabled={disabled || undefined}
      disabled={disabled}
    >
      {props.loading ? (
        <>
          {/**
           * We need a wrapper to set `visibility: hidden` to hide the button content whilst we show the `Spinner`.
           * The button is a flex container with a `gap`, so we use `display: contents` to ensure the correct flex layout.
           *
           * However, `display: contents` removes the content from the accessibility tree in some browsers,
           * so we force remove it with `aria-hidden` and re-add it in the tree with `VisuallyHidden`
           */}
          <span style={{ display: 'contents', visibility: 'hidden' }} aria-hidden>
            {children}
          </span>
          <VisuallyHidden.Root>{children}</VisuallyHidden.Root>

          <span
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              inset: '0',
            }}
          >
            <Spinner size={mapButtonSizeToSpinnerSize(size)} />
          </span>
        </>
      ) : (
        children
      )}
    </Comp>
  );
};
BaseButton.displayName = 'BaseButton';

export { BaseButton };
export type { BaseButtonProps };

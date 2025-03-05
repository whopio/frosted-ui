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
import {
  mapButtonSizeToSpinnerSize,
  mapResponsiveProp,
} from '../helpers/map-prop-values';
import { Flex } from './flex';
import { Spinner } from './spinner';
import { VisuallyHidden } from './visually-hidden';

type BaseButtonOwnProps = GetPropDefTypes<typeof baseButtonPropDefs>;
interface BaseButtonProps
  extends PropsWithoutRefOrColor<'button'>,
    MarginProps,
    BaseButtonOwnProps {
  asChild?: boolean;
  loading?: boolean;
}

const BaseButton = (props: BaseButtonProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
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
  } = marginRest;
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-accent-color={color || (variant === 'surface' ? 'gray' : color)}
      {...baseButtonProps}
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
          <span
            style={{ display: 'contents', visibility: 'hidden' }}
            aria-hidden
          >
            {children}
          </span>
          <VisuallyHidden>{children}</VisuallyHidden>

          <Flex
            asChild
            align="center"
            justify="center"
            position="absolute"
            inset="0"
          >
            <span>
              <Spinner
                size={mapResponsiveProp(size, mapButtonSizeToSpinnerSize)}
              />
            </span>
          </Flex>
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

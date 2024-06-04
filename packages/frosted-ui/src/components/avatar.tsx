'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { avatarPropDefs } from './avatar.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';
import { getInitials } from '../helpers/get-initials';

type AvatarElement = React.ElementRef<typeof AvatarPrimitive.Image>;
type AvatarOwnProps = GetPropDefTypes<typeof avatarPropDefs>;
interface AvatarProps
  extends PropsWithoutRefOrColor<typeof AvatarPrimitive.Image>,
    MarginProps,
    AvatarOwnProps {
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  fallback: NonNullable<AvatarOwnProps['fallback']>;
}

type ImageStatus = 'idle' | 'loading' | 'loaded' | 'error';
const Avatar = React.forwardRef<AvatarElement, AvatarProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      style,
      size = avatarPropDefs.size.default,
      color = avatarPropDefs.color.default,
      highContrast = avatarPropDefs.highContrast.default,
      fallback: fallbackProp,
      variant = avatarPropDefs.variant.default,
      ...imageProps
    } = marginRest;
    const [status, setStatus] = React.useState<ImageStatus>('idle');
    const dataStatus: ImageStatus = imageProps.src ? status : 'idle';

    const fallback =
      typeof fallbackProp === 'string'
        ? getInitials(fallbackProp)
        : fallbackProp;
    return (
      <AvatarPrimitive.Root
        data-accent-color={color}
        data-status={dataStatus}
        className={classNames(
          'fui-AvatarRoot',
          className,
          withBreakpoints(size, 'fui-r-size'),
          { 'fui-high-contrast': highContrast },
          `fui-variant-${variant}`,
          withMarginProps(marginProps),
        )}
        style={style}
      >
        {status === 'idle' || status === 'loading' ? (
          <span className="fui-AvatarFallback" />
        ) : null}

        {status === 'error' ? (
          <AvatarPrimitive.Fallback
            className={classNames('fui-AvatarFallback', {
              'fui-one-letter':
                typeof fallback === 'string' && fallback.length === 1,
              'fui-two-letters':
                typeof fallback === 'string' && fallback.length === 2,
            })}
            delayMs={0}
          >
            {fallback}
          </AvatarPrimitive.Fallback>
        ) : null}

        <AvatarPrimitive.Image
          ref={forwardedRef}
          className="fui-AvatarImage"
          {...imageProps}
          onLoadingStatusChange={(status) => {
            imageProps.onLoadingStatusChange?.(status);
            setStatus(status);
          }}
        />
      </AvatarPrimitive.Root>
    );
  },
);
Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarProps };

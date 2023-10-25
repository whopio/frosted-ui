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
      radius = avatarPropDefs.radius.default,
      fallback,
      ...imageProps
    } = marginRest;
    const [status, setStatus] = React.useState<ImageStatus>('idle');
    const dataStatus: ImageStatus = imageProps.src ? status : 'idle';
    return (
      <AvatarPrimitive.Root
        data-accent-color={color}
        data-radius={radius}
        data-status={dataStatus}
        className={classNames(
          'rt-AvatarRoot',
          className,
          withBreakpoints(size, 'rt-r-size'),
          { 'rt-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
        style={style}
      >
        {status === 'idle' || status === 'loading' ? (
          <span className="rt-AvatarFallback" />
        ) : null}

        {status === 'error' ? (
          <AvatarPrimitive.Fallback
            className={classNames('rt-AvatarFallback', {
              'rt-one-letter':
                typeof fallback === 'string' && fallback.length === 1,
              'rt-two-letters':
                typeof fallback === 'string' && fallback.length === 2,
            })}
            delayMs={0}
          >
            {fallback}
          </AvatarPrimitive.Fallback>
        ) : null}

        <AvatarPrimitive.Image
          ref={forwardedRef}
          className="rt-AvatarImage"
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

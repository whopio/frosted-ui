'use client';

import classNames from 'classnames';
import * as React from 'react';
import * as AvatarPrimitive from '../forked-primitives/avatar';
import { avatarPropDefs } from './avatar.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';
import { getInitials } from '../helpers/get-initials';

type AvatarOwnProps = GetPropDefTypes<typeof avatarPropDefs>;
interface AvatarProps extends PropsWithoutColor<typeof AvatarPrimitive.Image>, AvatarOwnProps {
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  fallback: NonNullable<AvatarOwnProps['fallback']>;
}

const Avatar = (props: AvatarProps) => {
  const {
    className,
    style,
    size = avatarPropDefs.size.default,
    color = avatarPropDefs.color.default,
    highContrast = avatarPropDefs.highContrast.default,
    fallback: fallbackProp,
    variant = avatarPropDefs.variant.default,
    ...imageProps
  } = props;
  const fallback = React.useMemo(() => {
    if (typeof fallbackProp !== 'string') return fallbackProp;
    try {
      return getInitials(fallbackProp);
    } catch (error) {
      console.error('Error generating initials:', error);
      return fallbackProp;
    }
  }, [fallbackProp]);

  return (
    <AvatarPrimitive.Root
      data-accent-color={color}
      className={classNames(
        'fui-AvatarRoot',
        className,
        `fui-r-size-${size}`,
        { 'fui-high-contrast': highContrast },
        `fui-variant-${variant}`,
      )}
      style={style}
    >
      <AvatarPrimitive.Fallback
        className={classNames('fui-AvatarFallback', {
          'fui-one-letter': typeof fallback === 'string' && fallback.length === 1,
          'fui-two-letters': typeof fallback === 'string' && fallback.length === 2,
        })}
        delayMs={0}
      >
        {fallback}
      </AvatarPrimitive.Fallback>

      <AvatarPrimitive.Image className="fui-AvatarImage" {...imageProps} />
    </AvatarPrimitive.Root>
  );
};
Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarProps };

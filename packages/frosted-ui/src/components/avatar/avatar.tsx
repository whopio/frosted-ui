'use client';

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import classNames from 'classnames';
import * as React from 'react';
import { avatarPropDefs } from './avatar.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';
import { getInitials } from '../../helpers/get-initials';

type AvatarOwnProps = GetPropDefTypes<typeof avatarPropDefs>;
type AvatarImageRenderProps = React.ComponentPropsWithRef<'img'>;
type AvatarImageRender = React.ReactElement | ((props: AvatarImageRenderProps) => React.ReactNode);

interface AvatarProps extends Omit<PropsWithoutColor<typeof AvatarPrimitive.Image>, 'style' | 'render'>, AvatarOwnProps {
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  fallback: NonNullable<AvatarOwnProps['fallback']>;
  style?: React.CSSProperties;
  render?: AvatarImageRender;
}

const Avatar = (props: AvatarProps) => {
  const {
    className,
    style,
    size = avatarPropDefs.size.default,
    color = avatarPropDefs.color.default,
    highContrast = avatarPropDefs.highContrast.default,
    fallback: fallbackProp,
    shape = avatarPropDefs.shape.default,
    render,
    onLoadingStatusChange,
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
        `fui-shape-${shape}`,
      )}
      style={style}
    >
      <AvatarPrimitive.Fallback
        className={classNames('fui-AvatarFallback', {
          'fui-one-letter': typeof fallback === 'string' && fallback.length === 1,
          'fui-two-letters': typeof fallback === 'string' && fallback.length === 2,
        })}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
      <AvatarPrimitive.Image
        className="fui-AvatarImage"
        render={render as React.ComponentProps<typeof AvatarPrimitive.Image>['render']}
        onLoadingStatusChange={onLoadingStatusChange}
        {...imageProps}
      />
    </AvatarPrimitive.Root>
  );
};
Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarProps };


'use client';

import classNames from 'classnames';
import * as React from 'react';
import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { Avatar } from './avatar';
import { avatarGroupPropDefs } from './avatar-group.props';

type AvatarGroupRootOwnProps = GetPropDefTypes<typeof avatarGroupPropDefs>;

interface AvatarGroupRootProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps,
    AvatarGroupRootOwnProps {}

const AvatarGroupRoot = (props: AvatarGroupRootProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    children,
    size = avatarGroupPropDefs.size.default,
    variant = avatarGroupPropDefs.variant.default,
    color = avatarGroupPropDefs.color.default,
    ...rootProps
  } = marginRest;

  return (
    <div
      data-accent-color={color}
      {...rootProps}
      className={classNames(
        'fui-AvatarGroupRoot',
        className,
        withBreakpoints(size, 'fui-r-size'),
        `fui-variant-${variant}`,
        withMarginProps(marginProps),
      )}
    >
      <div className="fui-AvatarGroupRootInner">{children}</div>
    </div>
  );
};

AvatarGroupRoot.displayName = 'AvatarGroupRoot';

type AvatarGroupAvatarProps = Omit<
  React.ComponentProps<typeof Avatar>,
  'size' | 'variant'
>;

const AvatarGroupAvatar = ({ className, ...props }: AvatarGroupAvatarProps) => {
  return (
    <Avatar
      size="3"
      className={classNames('fui-AvatarGroupAvatar', className)}
      {...props}
    />
  );
};

AvatarGroupAvatar.displayName = 'AvatarGroupAvatar';

export type { AvatarGroupAvatarProps, AvatarGroupRootProps };

export { AvatarGroupAvatar as Avatar, AvatarGroupRoot as Root };
export type {
  AvatarGroupAvatarProps as AvatarProps,
  AvatarGroupRootProps as RootProps,
};

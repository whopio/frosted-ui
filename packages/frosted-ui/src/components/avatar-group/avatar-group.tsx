'use client';

import classNames from 'classnames';
import * as React from 'react';
import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';
import { Avatar } from '../avatar';
import { avatarGroupPropDefs } from './avatar-group.props';

type AvatarGroupRootOwnProps = GetPropDefTypes<typeof avatarGroupPropDefs>;

interface AvatarGroupRootProps extends PropsWithoutColor<'div'>, AvatarGroupRootOwnProps {}

const AvatarGroupRoot = (props: AvatarGroupRootProps) => {
  const {
    className,
    children,
    size = avatarGroupPropDefs.size.default,
    shape = avatarGroupPropDefs.shape.default,
    color = avatarGroupPropDefs.color.default,
    ...rootProps
  } = props;

  return (
    <div
      data-accent-color={color}
      {...rootProps}
      className={classNames('fui-AvatarGroupRoot', className, `fui-r-size-${size}`, `fui-shape-${shape}`)}
    >
      <div className="fui-AvatarGroupRootInner">{children}</div>
    </div>
  );
};

AvatarGroupRoot.displayName = 'AvatarGroupRoot';

type AvatarGroupAvatarProps = Omit<React.ComponentProps<typeof Avatar>, 'size' | 'shape'>;

const AvatarGroupAvatar = ({ className, ...props }: AvatarGroupAvatarProps) => {
  return <Avatar size="3" className={classNames('fui-AvatarGroupAvatar', className)} {...props} />;
};

AvatarGroupAvatar.displayName = 'AvatarGroupAvatar';

export { AvatarGroupAvatar as Avatar, AvatarGroupRoot as Root };
export type { AvatarGroupAvatarProps as AvatarProps, AvatarGroupRootProps as RootProps };


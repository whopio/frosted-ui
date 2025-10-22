'use client';

import classNames from 'classnames';
import * as React from 'react';
import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';
import { Avatar } from '../avatar';
import { avatarStackPropDefs } from './avatar-stack.props';

const AvatarStackContext = React.createContext<{
  size: (typeof avatarStackPropDefs.size.values)[number]; 
}>({
  size: avatarStackPropDefs.size.default,
});

type AvatarStackRootOwnProps = GetPropDefTypes<typeof avatarStackPropDefs>;

interface AvatarStackRootProps extends PropsWithoutColor<'div'>, AvatarStackRootOwnProps {}

const AvatarStackRoot = (props: AvatarStackRootProps) => {
  const {
    className,
    children,
    size = avatarStackPropDefs.size.default,

    ...rootProps
  } = props;

  // Convert children to array and reverse it only once during render
  const reversedChildren = React.useMemo(
    () => React.Children.toArray(children).reverse(),
    [children]
  );

  return (
    <div
      {...rootProps}
      className={classNames('fui-AvatarStackRoot', className, `fui-r-size-${size}`)}
    >
      <AvatarStackContext.Provider value={{ size }}>
        {reversedChildren}
      </AvatarStackContext.Provider>
    </div>
  );
};

AvatarStackRoot.displayName = 'AvatarStackRoot';

type AvatarStackAvatarProps = Omit<React.ComponentProps<typeof Avatar>, 'size'>;

const AvatarStackAvatar = ({ className, ...props }: AvatarStackAvatarProps) => {
  const { size } = React.useContext(AvatarStackContext);
  return <Avatar size={size}  className={classNames('fui-AvatarStackAvatar', className)} {...props} />;
};

AvatarStackAvatar.displayName = 'AvatarStackAvatar';

export { AvatarStackAvatar as Avatar, AvatarStackRoot as Root };
export type { AvatarStackAvatarProps as AvatarProps, AvatarStackRootProps as RootProps };


'use client';

import classNames from 'classnames';
import * as React from 'react';
import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';
import { skeletonAvatarPropDefs, skeletonRectPropDefs, skeletonTextPropDefs } from './skeleton.props';

type SkeletonAvatarOwnProps = GetPropDefTypes<typeof skeletonAvatarPropDefs>;

interface SkeletonAvatarProps extends PropsWithoutColor<'div'>, SkeletonAvatarOwnProps {}
const SkeletonAvatar = (props: SkeletonAvatarProps) => {
  const {
    className,
    size = skeletonAvatarPropDefs.size.default,
    color = skeletonAvatarPropDefs.color.default,
    highContrast = skeletonAvatarPropDefs.highContrast.default,
    ...skeletonAvatarProps
  } = props;

  return (
    <div
      data-accent-color={color}
      className={classNames('fui-SkeletonAvatar', className, `fui-r-size-${size}`, {
        'fui-high-contrast': highContrast,
      })}
      {...skeletonAvatarProps}
    />
  );
};
SkeletonAvatar.displayName = 'SkeletonAvatar';

type SkeletonTextOwnProps = GetPropDefTypes<typeof skeletonTextPropDefs>;

interface SkeletonTextProps extends PropsWithoutColor<'div'>, SkeletonTextOwnProps {}
const SkeletonText = (props: SkeletonTextProps) => {
  const {
    className,
    size = skeletonTextPropDefs.size.default,
    color = skeletonTextPropDefs.color.default,
    highContrast = skeletonTextPropDefs.highContrast.default,
    ...skeletonTextProps
  } = props;

  return (
    <div
      data-accent-color={color}
      className={classNames('fui-SkeletonText', className, `fui-r-size-${size}`, { 'fui-high-contrast': highContrast })}
      {...skeletonTextProps}
    />
  );
};
SkeletonText.displayName = 'SkeletonText';

type SkeletonRectOwnProps = GetPropDefTypes<typeof skeletonRectPropDefs>;

interface SkeletonRectProps extends PropsWithoutColor<'div'>, SkeletonRectOwnProps {}
const SkeletonRect = (props: SkeletonRectProps) => {
  const {
    className,
    color = skeletonRectPropDefs.color.default,
    highContrast = skeletonRectPropDefs.highContrast.default,
    ...skeletonRectProps
  } = props;

  return (
    <div
      data-accent-color={color}
      className={classNames('fui-SkeletonRect', className, { 'fui-high-contrast': highContrast })}
      {...skeletonRectProps}
    />
  );
};
SkeletonRect.displayName = 'SkeletonRect';

export { SkeletonAvatar as Avatar, SkeletonRect as Rect, SkeletonText as Text };

export type { SkeletonAvatarProps as AvatarProps, SkeletonRectProps as RectProps, SkeletonTextProps as TextProps };

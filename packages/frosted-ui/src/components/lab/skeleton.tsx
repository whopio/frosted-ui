'use client';

import classNames from 'classnames';
import * as React from 'react';
import type { GetPropDefTypes, MarginProps, PropsWithoutColor } from '../../helpers';
import { extractMarginProps, withMarginProps } from '../../helpers';
import { skeletonAvatarPropDefs, skeletonRectPropDefs, skeletonTextPropDefs } from './skeleton.props';

type SkeletonAvatarOwnProps = GetPropDefTypes<typeof skeletonAvatarPropDefs>;

interface SkeletonAvatarProps extends PropsWithoutColor<'div'>, MarginProps, SkeletonAvatarOwnProps {}
const SkeletonAvatar = (props: SkeletonAvatarProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = skeletonAvatarPropDefs.size.default,
    color = skeletonAvatarPropDefs.color.default,
    highContrast = skeletonAvatarPropDefs.highContrast.default,
    ...skeletonAvatarProps
  } = marginRest;

  return (
    <div
      data-accent-color={color}
      className={classNames(
        'fui-SkeletonAvatar',
        className,
        `fui-r-size-${size}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
      {...skeletonAvatarProps}
    />
  );
};
SkeletonAvatar.displayName = 'SkeletonAvatar';

type SkeletonTextOwnProps = GetPropDefTypes<typeof skeletonTextPropDefs>;

interface SkeletonTextProps extends PropsWithoutColor<'div'>, MarginProps, SkeletonTextOwnProps {}
const SkeletonText = (props: SkeletonTextProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = skeletonTextPropDefs.size.default,
    color = skeletonTextPropDefs.color.default,
    highContrast = skeletonTextPropDefs.highContrast.default,
    ...skeletonTextProps
  } = marginRest;

  return (
    <div
      data-accent-color={color}
      className={classNames(
        'fui-SkeletonText',
        className,
        `fui-r-size-${size}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
      {...skeletonTextProps}
    />
  );
};
SkeletonText.displayName = 'SkeletonText';

type SkeletonRectOwnProps = GetPropDefTypes<typeof skeletonRectPropDefs>;

interface SkeletonRectProps extends PropsWithoutColor<'div'>, MarginProps, SkeletonRectOwnProps {}
const SkeletonRect = (props: SkeletonRectProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    color = skeletonRectPropDefs.color.default,
    highContrast = skeletonRectPropDefs.highContrast.default,
    ...skeletonRectProps
  } = marginRest;

  return (
    <div
      data-accent-color={color}
      className={classNames(
        'fui-SkeletonRect',
        className,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
      {...skeletonRectProps}
    />
  );
};
SkeletonRect.displayName = 'SkeletonRect';

export { SkeletonAvatar as Avatar, SkeletonRect as Rect, SkeletonText as Text };

export type { SkeletonAvatarProps as AvatarProps, SkeletonRectProps as RectProps, SkeletonTextProps as TextProps };

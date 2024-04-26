'use client';

import classNames from 'classnames';
import * as React from 'react';
import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../../helpers';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../../helpers';
import {
  skeletonAvatarPropDefs,
  skeletonRectPropDefs,
  skeletonTextPropDefs,
} from './skeleton.props';

// TODO: omit children
type SkeletonAvatarElement = React.ElementRef<'div'>;
type SkeletonAvatarOwnProps = GetPropDefTypes<typeof skeletonAvatarPropDefs>;

interface SkeletonAvatarProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps,
    SkeletonAvatarOwnProps {}
const SkeletonAvatar = React.forwardRef<
  SkeletonAvatarElement,
  SkeletonAvatarProps
>((props, forwardedRef) => {
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
        withBreakpoints(size, 'fui-r-size'),
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
      {...skeletonAvatarProps}
      ref={forwardedRef}
    />
  );
});
SkeletonAvatar.displayName = 'SkeletonAvatar';

// TODO: omit children
type SkeletonTextElement = React.ElementRef<'div'>;
type SkeletonTextOwnProps = GetPropDefTypes<typeof skeletonTextPropDefs>;

interface SkeletonTextProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps,
    SkeletonTextOwnProps {}
const SkeletonText = React.forwardRef<SkeletonTextElement, SkeletonTextProps>(
  (props, forwardedRef) => {
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
          withBreakpoints(size, 'fui-r-size'),
          { 'fui-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
        {...skeletonTextProps}
        ref={forwardedRef}
      />
    );
  },
);
SkeletonText.displayName = 'SkeletonText';

// TODO: omit children
type SkeletonRectElement = React.ElementRef<'div'>;
type SkeletonRectOwnProps = GetPropDefTypes<typeof skeletonRectPropDefs>;

interface SkeletonRectProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps,
    SkeletonRectOwnProps {}
const SkeletonRect = React.forwardRef<SkeletonRectElement, SkeletonRectProps>(
  (props, forwardedRef) => {
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
        ref={forwardedRef}
      />
    );
  },
);
SkeletonRect.displayName = 'SkeletonRect';

export { SkeletonAvatar as Avatar, SkeletonRect as Rect, SkeletonText as Text };

export type {
  SkeletonAvatarProps as AvatarProps,
  SkeletonRectProps as RectProps,
  SkeletonTextProps as TextProps,
};

'use client';

import classNames from 'classnames';
import * as React from 'react';
import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';
import { skeletonAvatarPropDefs, skeletonRectPropDefs, skeletonTextPropDefs } from './skeleton.props';

/** Must match the animation duration in skeleton.css (fui-skeleton-pulse) */
const SKELETON_PULSE_DURATION_S = 2;

function useSkeletonAnimationSync(ref: React.RefObject<HTMLDivElement | null>) {
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const phaseSec = (performance.now() / 1000) % SKELETON_PULSE_DURATION_S;
    el.style.setProperty('--fui-skeleton-animation-delay', `-${phaseSec}s`);
  }, [ref]);
}

type SkeletonAvatarOwnProps = GetPropDefTypes<typeof skeletonAvatarPropDefs>;

interface SkeletonAvatarProps extends PropsWithoutColor<'div'>, SkeletonAvatarOwnProps {}
const SkeletonAvatar = (props: SkeletonAvatarProps) => {
  const {
    className,
    size = skeletonAvatarPropDefs.size.default,
    shape = skeletonAvatarPropDefs.shape.default,
    color = skeletonAvatarPropDefs.color.default,
    highContrast = skeletonAvatarPropDefs.highContrast.default,
    ref: refProp,
    ...skeletonAvatarProps
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  useSkeletonAnimationSync(ref);

  const setRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (typeof refProp === 'function') refProp(node);
      else if (refProp) (refProp as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [refProp],
  );

  return (
    <div
      ref={setRef}
      data-accent-color={color}
      className={classNames('fui-SkeletonAvatar', className, `fui-r-size-${size}`, `fui-shape-${shape}`, {
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
    ref: refProp,
    ...skeletonTextProps
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  useSkeletonAnimationSync(ref);

  const setRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (typeof refProp === 'function') refProp(node);
      else if (refProp) (refProp as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [refProp],
  );

  return (
    <div
      ref={setRef}
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
    ref: refProp,
    ...skeletonRectProps
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  useSkeletonAnimationSync(ref);

  const setRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (typeof refProp === 'function') refProp(node);
      else if (refProp) (refProp as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [refProp],
  );

  return (
    <div
      ref={setRef}
      data-accent-color={color}
      className={classNames('fui-SkeletonRect', className, { 'fui-high-contrast': highContrast })}
      {...skeletonRectProps}
    />
  );
};
SkeletonRect.displayName = 'SkeletonRect';

export { SkeletonAvatar as Avatar, SkeletonRect as Rect, SkeletonText as Text };
export type { SkeletonAvatarProps as AvatarProps, SkeletonRectProps as RectProps, SkeletonTextProps as TextProps };


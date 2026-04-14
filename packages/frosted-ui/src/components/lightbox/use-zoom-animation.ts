'use client';

import * as React from 'react';

/**
 * Manages Web Animations API transitions for zoom changes.
 *
 * Call `captureStart()` before a state update to snapshot the current
 * transform. On the next layout effect the hook creates a WAAPI
 * animation from the snapshot to the new computed transform.
 *
 * Rapid / continuous gestures (pinch, scroll) skip animation entirely —
 * they update state every frame and never call `captureStart()`.
 */
interface CaptureOptions {
  duration?: number;
  easing?: string;
}

function useZoomAnimation(
  zoom: number,
  offsetX: number,
  offsetY: number,
  wrapperRef: React.RefObject<HTMLElement | null>,
  duration: number,
) {
  const runningAnimation = React.useRef<Animation | undefined>(undefined);
  const startTransform = React.useRef<string | undefined>(undefined);
  const overrideOpts = React.useRef<CaptureOptions | undefined>(undefined);

  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const play = React.useCallback(() => {
    runningAnimation.current?.cancel();
    runningAnimation.current = undefined;

    const el = wrapperRef.current;
    const from = startTransform.current;
    const opts = overrideOpts.current;
    startTransform.current = undefined;
    overrideOpts.current = undefined;

    if (!from || !el) return;

    const to = `scale(${zoom}) translate(${offsetX}px, ${offsetY}px)`;
    if (from === to) return;

    try {
      const anim = el.animate([{ transform: from }, { transform: to }], {
        duration: reducedMotion ? 0 : (opts?.duration ?? duration),
        easing: opts?.easing ?? (runningAnimation.current ? 'ease-out' : 'ease-in-out'),
        fill: 'none',
      });
      runningAnimation.current = anim;
      anim.onfinish = () => {
        if (runningAnimation.current === anim) {
          runningAnimation.current = undefined;
        }
      };
    } catch {
      // WAAPI not supported — silent fallback to instant state
    }
  }, [zoom, offsetX, offsetY, wrapperRef, duration, reducedMotion]);

  React.useLayoutEffect(play, [zoom, offsetX, offsetY, play]);

  /**
   * Call before a state change to capture the current transform.
   * Pass options to override the animation duration/easing for
   * this particular transition (e.g. faster snap-back).
   */
  const captureStart = React.useCallback((opts?: CaptureOptions) => {
    const el = wrapperRef.current;
    startTransform.current = el ? getComputedStyle(el).transform : undefined;
    overrideOpts.current = opts;
  }, [wrapperRef]);

  return captureStart;
}

export { useZoomAnimation };

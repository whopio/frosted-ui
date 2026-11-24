'use client';

import * as React from 'react';

const DURATION = 300;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

interface ActiveIndicatorOptions {
  /** Selector matching the trigger the indicator is anchored to while it's active */
  activeTriggerSelector: string;
  /** Attributes whose changes can move the active trigger */
  activeAttributes: readonly string[];
  /** The list's pseudo-element slid with translate + scale */
  pseudoElement: '::before' | '::after';
}

// Must match the @supports condition that enables the anchored indicators in CSS.
function supportsAnchoredIndicator() {
  return (
    typeof CSS !== 'undefined' &&
    typeof CSS.supports === 'function' &&
    CSS.supports('anchor-name: --a') &&
    CSS.supports('anchor-scope: all')
  );
}

function prefersReducedMotion() {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function assignRef<T>(ref: React.Ref<T> | undefined, node: T | null) {
  if (typeof ref === 'function') return ref(node);
  if (ref) (ref as React.MutableRefObject<T | null>).current = node;
}

/**
 * The active indicator is a pseudo-element on the list, anchor-positioned to the active trigger, so CSS alone keeps it
 * in place through resizes, font loads and scrolling. Anchor-positioned insets can't be animated on the compositor,
 * so when the active trigger changes this plays a FLIP transform animation from the previous indicator box instead.
 *
 * Returns the list ref and an optional window ref for a layer that must not stretch, such as a fill with rounded
 * corners. The window is an `overflow: clip` element on one edge of the active trigger (the end edge: right in LTR,
 * left in RTL), and its `::before` is the fill, on the start edge and overhanging past the end. Both only translate,
 * so corners stay exact. Animated `clip-path` would do the same but can show stale frames in Chrome.
 *
 * `options` must be referentially stable (define it at module level).
 */
function useActiveIndicatorAnimation<T extends HTMLElement>(
  forwardedRef: React.Ref<T> | undefined,
  options: ActiveIndicatorOptions,
) {
  const [list, setList] = React.useState<T | null>(null);
  const thumbWindowRef = React.useRef<HTMLElement | null>(null);
  const setThumbWindow = React.useCallback((node: HTMLElement | null) => {
    thumbWindowRef.current = node;
  }, []);

  const ref = React.useCallback(
    (node: T | null) => {
      setList(node);
      const forwardedCleanup = assignRef(forwardedRef, node);
      if (node === null) return;
      // React 19 calls this instead of calling the ref again with null; earlier versions ignore it.
      return () => {
        setList(null);
        if (typeof forwardedCleanup === 'function') forwardedCleanup();
        else assignRef(forwardedRef, null);
      };
    },
    [forwardedRef],
  );

  React.useEffect(() => {
    if (!list || typeof list.animate !== 'function' || !supportsAnchoredIndicator()) return;

    const { activeTriggerSelector, activeAttributes, pseudoElement } = options;
    // CSS anchors to the last element with a given anchor-name, so match the same one.
    const findActiveTrigger = () => {
      const triggers = list.querySelectorAll<HTMLElement>(activeTriggerSelector);
      return triggers[triggers.length - 1] ?? null;
    };
    let activeTrigger = findActiveTrigger();
    let animations: Animation[] = [];

    const stop = () => {
      animations.forEach((animation) => animation.cancel());
      animations = [];
    };

    // MutationObserver callbacks run as a microtask after React commits and before the next paint, so the
    // animation's first frame is in place before the indicator could be painted at its new anchor.
    const observer = new MutationObserver(() => {
      const previousTrigger = activeTrigger;
      const nextTrigger = findActiveTrigger();
      if (nextTrigger === previousTrigger) return;
      activeTrigger = nextTrigger;

      // The in-flight transform is relative to the previous anchor box, so read it before cancelling. The window
      // layers share its timing, so this also gives their current box.
      const currentTransform = new DOMMatrixReadOnly(getComputedStyle(list, pseudoElement).transform);
      stop();

      if (!previousTrigger?.isConnected || !nextTrigger || prefersReducedMotion()) return;

      // Rects are in viewport px, transforms in the list's own px; they differ under a scaled or zoomed ancestor.
      const listRect = list.getBoundingClientRect();
      if (listRect.width === 0) return;
      const scale = list.offsetWidth / listRect.width;
      const localBox = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const left = (rect.left - listRect.left) * scale;
        const width = rect.width * scale;
        return { left, width, right: left + width };
      };
      const previousBox = localBox(previousTrigger);
      const to = localBox(nextTrigger);
      if (previousBox.width === 0 || to.width === 0) return;

      const fromLeft = previousBox.left + currentTransform.e;
      const fromWidth = previousBox.width * currentTransform.a;
      // `fill: 'backwards'` holds the first keyframe if a frame is drawn before the pinned start time below.
      const timing: KeyframeAnimationOptions = { duration: DURATION, easing: EASING, fill: 'backwards' };

      animations.push(
        list.animate(
          [{ transform: `translateX(${fromLeft - to.left}px) scaleX(${fromWidth / to.width})` }, { transform: 'none' }],
          { ...timing, pseudoElement },
        ),
      );

      const thumbWindow = thumbWindowRef.current;
      if (thumbWindow) {
        const leftShift = fromLeft - to.left;
        const rightShift = fromLeft + fromWidth - to.right;
        const rtl = getComputedStyle(thumbWindow).direction === 'rtl';
        const windowShift = rtl ? leftShift : rightShift;
        const fillShift = rtl ? rightShift : leftShift;
        animations.push(
          thumbWindow.animate([{ transform: `translateX(${windowShift}px)` }, { transform: 'none' }], timing),
          // The fill moves with the window, so only add the difference.
          thumbWindow.animate([{ transform: `translateX(${fillShift - windowShift}px)` }, { transform: 'none' }], {
            ...timing,
            pseudoElement: '::before',
          }),
        );
      }

      // Each layer may or may not run on the compositor, and each path picks its own start time. Pin them to the same
      // one so the layers can't drift a frame apart. `document.timeline.currentTime` would be the last frame's time,
      // which after a long commit is far enough in the past to skip part of the slide.
      const startTime = performance.now();
      animations.forEach((animation) => (animation.startTime = startTime));
    });

    observer.observe(list, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [...activeAttributes],
    });

    return () => {
      observer.disconnect();
      stop();
    };
  }, [list, options]);

  return [ref, setThumbWindow] as const;
}

export { useActiveIndicatorAnimation };
export type { ActiveIndicatorOptions };

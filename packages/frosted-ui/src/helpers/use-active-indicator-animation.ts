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

/**
 * The active indicator is a pseudo-element on the list, anchor-positioned to the active trigger, so CSS alone keeps it
 * in place through resizes, font loads and scrolling. Anchor-positioned insets can't be animated on the compositor,
 * so when the active trigger changes this plays a FLIP transform animation from the previous indicator box instead.
 *
 * Returns the list ref and an optional window ref for a layer that must not stretch, such as a fill with rounded
 * corners. The window is an `overflow: clip` element whose right edge sits on the active trigger's right edge, and its
 * `::before` is the fill, left edge on the trigger's left edge, overhanging to the right. Both only translate, so
 * corners stay exact. Animated `clip-path` would do the same but can show stale frames in Chrome.
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
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<T | null>).current = node;
      }
    },
    [forwardedRef],
  );

  React.useEffect(() => {
    if (!list || typeof list.animate !== 'function' || !supportsAnchoredIndicator()) return;

    const { activeTriggerSelector, activeAttributes, pseudoElement } = options;
    let activeTrigger = list.querySelector<HTMLElement>(activeTriggerSelector);
    let animations: Animation[] = [];

    const stop = () => {
      animations.forEach((animation) => animation.cancel());
      animations = [];
    };

    // MutationObserver callbacks run as a microtask after React commits and before the next paint, so the
    // animation's first frame is in place before the indicator could be painted at its new anchor.
    const observer = new MutationObserver(() => {
      const previousTrigger = activeTrigger;
      const nextTrigger = list.querySelector<HTMLElement>(activeTriggerSelector);
      if (nextTrigger === previousTrigger) return;
      activeTrigger = nextTrigger;

      // The in-flight transform is relative to the previous anchor box, so read it before cancelling. The window
      // layers share its timing, so this also gives their current box.
      const currentTransform = new DOMMatrixReadOnly(getComputedStyle(list, pseudoElement).transform);
      stop();

      if (!previousTrigger?.isConnected || !nextTrigger || prefersReducedMotion()) return;

      const previousBox = previousTrigger.getBoundingClientRect();
      const to = nextTrigger.getBoundingClientRect();
      if (previousBox.width === 0 || to.width === 0) return;

      const fromLeft = previousBox.left + currentTransform.e;
      const fromWidth = previousBox.width * currentTransform.a;
      const timing = { duration: DURATION, easing: EASING };

      animations.push(
        list.animate(
          [{ transform: `translateX(${fromLeft - to.left}px) scaleX(${fromWidth / to.width})` }, { transform: 'none' }],
          { ...timing, pseudoElement },
        ),
      );

      const thumbWindow = thumbWindowRef.current;
      if (thumbWindow) {
        const rightShift = fromLeft + fromWidth - to.right;
        const leftShift = fromLeft - to.left;
        animations.push(
          thumbWindow.animate([{ transform: `translateX(${rightShift}px)` }, { transform: 'none' }], timing),
          // The fill moves with the window, so only add the difference.
          thumbWindow.animate([{ transform: `translateX(${leftShift - rightShift}px)` }, { transform: 'none' }], {
            ...timing,
            pseudoElement: '::before',
          }),
        );
      }

      // Each layer may or may not run on the compositor, and each path picks its own start time. Pin them to the same
      // one so the layers can't drift a frame apart.
      const startTime = document.timeline.currentTime;
      if (startTime !== null) animations.forEach((animation) => (animation.startTime = startTime));
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

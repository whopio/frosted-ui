'use client';

import * as React from 'react';

const DURATION = 300;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

interface ActiveIndicatorOptions {
  /** Selector matching the trigger the indicator is anchored to while it's active */
  activeTriggerSelector: string;
  /** Attributes whose changes can move the active trigger */
  activeAttributes: readonly string[];
  /** The list's pseudo-element that draws the indicator */
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
 * `options` must be referentially stable (define it at module level).
 */
function useActiveIndicatorAnimation<T extends HTMLElement>(
  forwardedRef: React.Ref<T> | undefined,
  options: ActiveIndicatorOptions,
) {
  const [list, setList] = React.useState<T | null>(null);

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
    let animation: Animation | null = null;

    // MutationObserver callbacks run as a microtask after React commits and before the next paint, so the
    // animation's first frame is in place before the indicator could be painted at its new anchor.
    const observer = new MutationObserver(() => {
      const previousTrigger = activeTrigger;
      const nextTrigger = list.querySelector<HTMLElement>(activeTriggerSelector);
      if (nextTrigger === previousTrigger) return;
      activeTrigger = nextTrigger;

      // The in-flight transform is relative to the previous anchor box, so read it before cancelling.
      const currentTransform = new DOMMatrixReadOnly(getComputedStyle(list, pseudoElement).transform);
      animation?.cancel();
      animation = null;

      if (!previousTrigger?.isConnected || !nextTrigger || prefersReducedMotion()) return;

      const from = previousTrigger.getBoundingClientRect();
      const to = nextTrigger.getBoundingClientRect();
      if (from.width === 0 || to.width === 0) return;

      const translateX = from.left + currentTransform.e - to.left;
      const scaleX = (from.width * currentTransform.a) / to.width;

      animation = list.animate(
        [{ transform: `translateX(${translateX}px) scaleX(${scaleX})` }, { transform: 'none' }],
        { duration: DURATION, easing: EASING, pseudoElement },
      );
    });

    observer.observe(list, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [...activeAttributes],
    });

    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [list, options]);

  return ref;
}

export { useActiveIndicatorAnimation };
export type { ActiveIndicatorOptions };

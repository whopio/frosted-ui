'use client';

import * as React from 'react';

const DURATION = 300;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const EXTEND_LEFT_PROPERTY = '--fui-indicator-extend-left';
const EXTEND_RIGHT_PROPERTY = '--fui-indicator-extend-right';

interface ActiveIndicatorOptions {
  /** Selector matching the trigger the indicator is anchored to while it's active */
  activeTriggerSelector: string;
  /** Attributes whose changes can move the active trigger */
  activeAttributes: readonly string[];
  /** The list's pseudo-element slid with translate + scale */
  pseudoElement: '::before' | '::after';
  /**
   * Optional second pseudo-element for parts that must not stretch, such as rounded corners. It's revealed with an
   * animated `clip-path` instead, and must extend its left/right insets by `--fui-indicator-extend-left/right`.
   */
  clipPseudoElement?: '::before' | '::after';
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

    const { activeTriggerSelector, activeAttributes, pseudoElement, clipPseudoElement } = options;
    let activeTrigger = list.querySelector<HTMLElement>(activeTriggerSelector);
    let animations: Animation[] = [];

    const stop = () => {
      animations.forEach((animation) => animation.cancel());
      animations = [];
      list.style.removeProperty(EXTEND_LEFT_PROPERTY);
      list.style.removeProperty(EXTEND_RIGHT_PROPERTY);
    };

    // MutationObserver callbacks run as a microtask after React commits and before the next paint, so the
    // animation's first frame is in place before the indicator could be painted at its new anchor.
    const observer = new MutationObserver(() => {
      const previousTrigger = activeTrigger;
      const nextTrigger = list.querySelector<HTMLElement>(activeTriggerSelector);
      if (nextTrigger === previousTrigger) return;
      activeTrigger = nextTrigger;

      // The in-flight transform is relative to the previous anchor box, so read it before cancelling. The clip
      // animation shares its timing, so this also gives the clipped layer's current box.
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

      if (clipPseudoElement) {
        // Grow the clipped layer to cover both boxes for the duration of the slide (one layout at each end), then
        // move a rounded clip across it. Unlike scaling, the clip's corner radius stays exact on every frame.
        const fromRight = fromLeft + fromWidth;
        const unionLeft = Math.min(fromLeft, to.left);
        const unionRight = Math.max(fromRight, to.right);
        const extendLeft = to.left - unionLeft;
        const extendRight = unionRight - to.right;
        const radius = getComputedStyle(list, clipPseudoElement).borderTopLeftRadius;
        const inset = (left: number, right: number) => `inset(0px ${right}px 0px ${left}px round ${radius})`;

        list.style.setProperty(EXTEND_LEFT_PROPERTY, `${extendLeft}px`);
        list.style.setProperty(EXTEND_RIGHT_PROPERTY, `${extendRight}px`);
        const clip = list.animate(
          [
            { clipPath: inset(fromLeft - unionLeft, unionRight - fromRight) },
            { clipPath: inset(extendLeft, extendRight) },
          ],
          // Hold the final clip until `stop` shrinks the layer back, so no frame shows the unclipped union box.
          { ...timing, pseudoElement: clipPseudoElement, fill: 'forwards' },
        );
        clip.onfinish = () => {
          if (animations.includes(clip)) stop();
        };
        animations.push(clip);
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

  return ref;
}

export { useActiveIndicatorAnimation };
export type { ActiveIndicatorOptions };

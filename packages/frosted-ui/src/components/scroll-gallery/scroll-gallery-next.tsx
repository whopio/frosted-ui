'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

/**
 * CSS Overflow 5 §3.2 specifies that scroll buttons scroll by "one page"
 * in their direction, "similar to pressing PgUp/PgDn keys. (Usually, this
 * will be about 85% of the scrollport size.)"
 *
 * We use 0.85 to match the spec recommendation and leave visual overlap
 * so the user retains context of where they were before the scroll.
 */
const PAGE_SCROLL_FACTOR = 0.85;

interface ScrollGalleryNextState extends Record<string, unknown> {
  disabled: boolean;
}

interface ScrollGalleryNextProps
  extends useRender.ComponentProps<'button', ScrollGalleryNextState> {
  /**
   * How many items to scroll by. When set to a number, the button scrolls
   * to bring the item N positions after the current active item into view.
   * When omitted, scrolls by ~85% of the viewport ("one page") per the
   * CSS Overflow 5 §3.2 spec.
   */
  step?: number;
}

const ScrollGalleryNext = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryNextProps
>(function ScrollGalleryNext(props, forwardedRef) {
  const { render, step, ...elementProps } = props;

  const {
    canScrollNext,
    getItemElements,
    orientation,
    scrollTargetRef,
    viewportRef,
  } = useScrollGalleryContext();

  const disabled = !canScrollNext;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || disabled) return;

    const isHorizontal = orientation === 'horizontal';

    // Clear any lingering "current scroll target" from a prior marker click.
    // Neither page nor step mode sets scrollingRef — both allow
    // computeActiveIndex to run on every scroll event, giving real-time
    // marker transitions during the animation (matching trackpad behavior).
    scrollTargetRef.current = null;

    if (step != null) {
      // Step mode: find the item physically closest to the viewport start
      // and scroll to the one N positions after it. We use visual position
      // (getBoundingClientRect) rather than activeIndex because the
      // redistribution algorithm can inflate activeIndex at scroll boundaries,
      // targeting items that can't actually be brought to the viewport start.
      const items = getItemElements();
      const viewportRect = viewport.getBoundingClientRect();
      const viewportStart = isHorizontal ? viewportRect.left : viewportRect.top;

      let anchorIndex = 0;
      let minDist = Infinity;
      for (let i = 0; i < items.length; i++) {
        const rect = items[i].getBoundingClientRect();
        const dist = Math.abs((isHorizontal ? rect.left : rect.top) - viewportStart);
        if (dist < minDist) {
          minDist = dist;
          anchorIndex = i;
        }
      }

      const targetIndex = Math.min(items.length - 1, anchorIndex + step);
      const target = items[targetIndex];
      if (!target) return;

      const targetRect = target.getBoundingClientRect();
      const distance = isHorizontal
        ? targetRect.left - viewportRect.left
        : targetRect.top - viewportRect.top;

      viewport.scrollBy({
        [isHorizontal ? 'left' : 'top']: distance,
        behavior: 'smooth',
      });
    } else {
      // Page mode (default): scroll by ~85% of the viewport.
      const pageSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;

      viewport.scrollBy({
        [isHorizontal ? 'left' : 'top']: pageSize * PAGE_SCROLL_FACTOR,
        behavior: 'smooth',
      });
    }
  }, [disabled, getItemElements, orientation, scrollTargetRef, step, viewportRef]);

  const state = React.useMemo<ScrollGalleryNextState>(
    () => ({ disabled }),
    [disabled],
  );

  return useRender({
    render,
    ref: forwardedRef,
    state,
    props: mergeProps<'button'>(
      {
        type: 'button',
        disabled,
        onClick: handleClick,
        ...(disabled ? { 'data-disabled': '' } : undefined),
      } as React.ComponentPropsWithRef<'button'>,
      elementProps as React.ComponentPropsWithRef<'button'>,
    ),
    defaultTagName: 'button',
  });
});

ScrollGalleryNext.displayName = 'ScrollGalleryNext';

export { ScrollGalleryNext };
export type { ScrollGalleryNextProps, ScrollGalleryNextState };

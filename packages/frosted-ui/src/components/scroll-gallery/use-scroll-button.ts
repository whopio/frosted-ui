'use client';

import * as React from 'react';

import {
  getScrollBehavior,
  getScrollDistance,
  getSnapAlignment,
  useScrollGalleryContext,
} from './scroll-gallery-context';

/**
 * CSS Overflow 5 §3.2 specifies that scroll buttons scroll by "one page"
 * in their direction, "similar to pressing PgUp/PgDn keys. (Usually, this
 * will be about 85% of the scrollport size.)"
 *
 * We use 0.85 to match the spec recommendation and leave visual overlap
 * so the user retains context of where they were before the scroll.
 */
const PAGE_SCROLL_FACTOR = 0.85;

interface UseScrollButtonOptions {
  direction: 'previous' | 'next';
  step?: number;
}

interface UseScrollButtonReturn {
  disabled: boolean;
  handleClick: () => void;
}

function useScrollButton({ direction, step }: UseScrollButtonOptions): UseScrollButtonReturn {
  const {
    canScrollPrev,
    canScrollNext,
    getItemElements,
    loop,
    orientation,
    scrollingRef,
    scrollTargetRef,
    setActiveIndex,
    viewportRef,
  } = useScrollGalleryContext();

  const isPrev = direction === 'previous';
  const canScroll = isPrev ? canScrollPrev : canScrollNext;
  const disabled = loop ? false : !canScroll;
  const sign = isPrev ? -1 : 1;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const isHorizontal = orientation === 'horizontal';
    const items = getItemElements();

    // When looping and already at the boundary, wrap to the other end.
    // Behaves like a marker click: lock the target and suppress
    // intermediate active-index updates during the smooth scroll.
    if (loop && !canScroll) {
      const wrapIndex = isPrev ? items.length - 1 : 0;
      const target = items[wrapIndex];
      if (!target) return;

      const distance = getScrollDistance(target, viewport, orientation);

      scrollTargetRef.current = wrapIndex;
      scrollingRef.current = true;

      viewport.scrollBy({
        [isHorizontal ? 'left' : 'top']: distance,
        behavior: getScrollBehavior(),
      });

      setActiveIndex(wrapIndex, 'indicator');
      return;
    }

    if (disabled) return;

    // Clear any lingering programmatic scroll state from a prior marker
    // click. Both refs must be cleared so that scroll events go through
    // Case 4 (real-time computeActiveIndex), giving smooth marker
    // transitions during the button's scroll animation.
    scrollTargetRef.current = null;
    scrollingRef.current = false;

    if (step != null) {
      // Step mode: find the currently snapped item (anchor) and scroll to
      // the one N positions away. The anchor is the item whose snap
      // reference point is closest to the viewport's matching reference.
      const snapAlign = items.length > 0 ? getSnapAlignment(items[0], orientation) : 'start';
      const viewportRect = viewport.getBoundingClientRect();

      let vpRef: number;
      if (snapAlign === 'center') {
        vpRef = isHorizontal
          ? viewportRect.left + viewportRect.width / 2
          : viewportRect.top + viewportRect.height / 2;
      } else if (snapAlign === 'end') {
        vpRef = isHorizontal ? viewportRect.right : viewportRect.bottom;
      } else {
        vpRef = isHorizontal ? viewportRect.left : viewportRect.top;
      }

      let anchorIndex = 0;
      let minDist = Infinity;
      for (let i = 0; i < items.length; i++) {
        const rect = items[i].getBoundingClientRect();
        let itemRef: number;
        if (snapAlign === 'center') {
          itemRef = isHorizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
        } else if (snapAlign === 'end') {
          itemRef = isHorizontal ? rect.right : rect.bottom;
        } else {
          itemRef = isHorizontal ? rect.left : rect.top;
        }
        const dist = Math.abs(itemRef - vpRef);
        if (dist < minDist) {
          minDist = dist;
          anchorIndex = i;
        }
      }

      const targetIndex = isPrev
        ? Math.max(0, anchorIndex - step)
        : Math.min(items.length - 1, anchorIndex + step);
      const target = items[targetIndex];
      if (!target) return;

      const distance = getScrollDistance(target, viewport, orientation);

      viewport.scrollBy({
        [isHorizontal ? 'left' : 'top']: distance,
        behavior: getScrollBehavior(),
      });
    } else {
      // Page mode (default): scroll by ~85% of the viewport.
      const pageSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;

      viewport.scrollBy({
        [isHorizontal ? 'left' : 'top']: sign * pageSize * PAGE_SCROLL_FACTOR,
        behavior: getScrollBehavior(),
      });
    }
  }, [canScroll, disabled, getItemElements, isPrev, loop, orientation, scrollingRef, scrollTargetRef, setActiveIndex, sign, step, viewportRef]);

  return { disabled, handleClick };
}

export { useScrollButton, PAGE_SCROLL_FACTOR };
export type { UseScrollButtonOptions, UseScrollButtonReturn };

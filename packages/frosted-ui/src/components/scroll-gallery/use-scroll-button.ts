'use client';

import * as React from 'react';

import {
  PAGE_SCROLL_FACTOR,
  getScrollBehavior,
  getScrollDistance,
  getSnapAlignment,
  useScrollGalleryContext,
} from './scroll-gallery-context';

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
    scrollToItem,
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
    // Delegates to scrollToItem which handles target-locking and
    // immediate active-index update (same behavior as a marker click).
    if (loop && !canScroll) {
      const wrapIndex = isPrev ? items.length - 1 : 0;
      scrollToItem(wrapIndex);
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
  }, [canScroll, disabled, getItemElements, isPrev, loop, orientation, scrollingRef, scrollTargetRef, scrollToItem, sign, step, viewportRef]);

  return { disabled, handleClick };
}

export { useScrollButton };
export type { UseScrollButtonOptions, UseScrollButtonReturn };

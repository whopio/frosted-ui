'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { getScrollBehavior, getScrollDistance, getSnapAlignment, useScrollGalleryContext } from './scroll-gallery-context';

/**
 * CSS Overflow 5 §3.2 specifies that scroll buttons scroll by "one page"
 * in their direction, "similar to pressing PgUp/PgDn keys. (Usually, this
 * will be about 85% of the scrollport size.)"
 *
 * We use 0.85 to match the spec recommendation and leave visual overlap
 * so the user retains context of where they were before the scroll.
 */
const PAGE_SCROLL_FACTOR = 0.85;

interface ScrollGalleryPreviousState extends Record<string, unknown> {
  disabled: boolean;
}

interface ScrollGalleryPreviousProps
  extends useRender.ComponentProps<'button', ScrollGalleryPreviousState> {
  /**
   * How many items to scroll by. When set to a number, the button scrolls
   * to bring the item N positions before the current active item into view.
   * When omitted, scrolls by ~85% of the viewport ("one page") per the
   * CSS Overflow 5 §3.2 spec.
   */
  step?: number;
}

const ScrollGalleryPrevious = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryPreviousProps
>(function ScrollGalleryPrevious(props, forwardedRef) {
  const { render, step, ...elementProps } = props;

  const {
    canScrollPrev,
    getItemElements,
    loop,
    orientation,
    scrollingRef,
    scrollTargetRef,
    setActiveIndex,
    viewportRef,
  } = useScrollGalleryContext();

  // When loop is enabled, the button never disables — it wraps to the end.
  const disabled = loop ? false : !canScrollPrev;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const isHorizontal = orientation === 'horizontal';
    const items = getItemElements();

    // When looping and already at the start, wrap to the last item.
    // This behaves like a marker click: lock the target and suppress
    // intermediate active-index updates during the smooth scroll.
    if (loop && !canScrollPrev) {
      const lastIndex = items.length - 1;
      const target = items[lastIndex];
      if (!target) return;

      const distance = getScrollDistance(target, viewport, orientation);

      scrollTargetRef.current = lastIndex;
      scrollingRef.current = true;

      viewport.scrollBy({
        [isHorizontal ? 'left' : 'top']: distance,
        behavior: getScrollBehavior(),
      });

      setActiveIndex(lastIndex, 'indicator');
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
      // the one N positions before it. The anchor is the item whose snap
      // reference point is closest to the viewport's matching reference.
      const snapAlign = items.length > 0 ? getSnapAlignment(items[0], orientation) : 'start';
      const viewportRect = viewport.getBoundingClientRect();

      let viewportRef: number;
      if (snapAlign === 'center') {
        viewportRef = isHorizontal
          ? viewportRect.left + viewportRect.width / 2
          : viewportRect.top + viewportRect.height / 2;
      } else if (snapAlign === 'end') {
        viewportRef = isHorizontal ? viewportRect.right : viewportRect.bottom;
      } else {
        viewportRef = isHorizontal ? viewportRect.left : viewportRect.top;
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
        const dist = Math.abs(itemRef - viewportRef);
        if (dist < minDist) {
          minDist = dist;
          anchorIndex = i;
        }
      }

      const targetIndex = Math.max(0, anchorIndex - step);
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
        [isHorizontal ? 'left' : 'top']: -pageSize * PAGE_SCROLL_FACTOR,
        behavior: getScrollBehavior(),
      });
    }
  }, [canScrollPrev, disabled, getItemElements, loop, orientation, scrollingRef, scrollTargetRef, setActiveIndex, step, viewportRef]);

  const state = React.useMemo<ScrollGalleryPreviousState>(
    () => ({ disabled }),
    [disabled],
  );

  return useRender({
    render,
    ref: forwardedRef,
    state,
    props: mergeProps<'button'>(
      {
        className: 'fui-ScrollGalleryPrevious',
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

ScrollGalleryPrevious.displayName = 'ScrollGalleryPrevious';

export { ScrollGalleryPrevious };
export type { ScrollGalleryPreviousProps, ScrollGalleryPreviousState };

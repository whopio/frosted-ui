'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryScrollMarkerState extends Record<string, unknown> {
  active: boolean;
  index: number;
}

interface ScrollGalleryScrollMarkerProps
  extends useRender.ComponentProps<'button', ScrollGalleryScrollMarkerState> {
  /**
   * The index of the item this scroll marker controls.
   */
  index: number;
}

const ScrollGalleryScrollMarker = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryScrollMarkerProps
>(function ScrollGalleryScrollMarker(props, forwardedRef) {
  const { render, index, ...elementProps } = props;

  const { activeIndex, setActiveIndex, orientation, viewportRef, getItemElements, scrollTargetRef, scrollingRef } =
    useScrollGalleryContext();

  const isActive = index === activeIndex;

  /**
   * Scroll marker click handler — mirrors native `::scroll-marker` behavior
   * from CSS Overflow 5 §2.
   *
   * Per the spec, clicking a scroll marker:
   * 1. Sets the scroll container's "current scroll target" to the linked
   *    element, making that marker immediately active.
   * 2. Initiates a smooth scroll to bring the target element into view
   *    (aligned to the scrollport start edge, matching `block: "start",
   *    inline: "start"` as specified).
   *
   * We compute the distance between the target item and the viewport start,
   * then use scrollBy with `behavior: 'smooth'` for the animation. Both
   * scrollTargetRef and scrollingRef are set so the viewport's scroll
   * handler knows to suppress active-index recomputation during the
   * animation and keep the marker locked on the clicked target.
   */
  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const items = getItemElements();
    const target = items[index];
    if (!target) return;

    const isHorizontal = orientation === 'horizontal';
    const targetRect = target.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();

    const distance = isHorizontal
      ? targetRect.left - viewportRect.left
      : targetRect.top - viewportRect.top;

    // Set "current scroll target" (CSS Overflow 5 §2.1) — this locks
    // the active marker to this index through the entire smooth scroll.
    scrollTargetRef.current = index;
    scrollingRef.current = true;

    viewport.scrollBy({
      [isHorizontal ? 'left' : 'top']: distance,
      behavior: 'smooth',
    });

    // Immediately reflect the active state — the user expects instant
    // visual feedback when clicking a marker.
    setActiveIndex(index, 'indicator');
  }, [getItemElements, index, orientation, scrollTargetRef, scrollingRef, setActiveIndex, viewportRef]);

  const state = React.useMemo<ScrollGalleryScrollMarkerState>(
    () => ({ active: isActive, index }),
    [isActive, index],
  );

  // ARIA: role="tab" + aria-selected follows the WAI-ARIA tablist pattern.
  // The marker group uses role="tablist", and each marker is a "tab".
  // Only the active marker has tabIndex=0 (roving tabindex pattern);
  // inactive markers have tabIndex=-1 so arrow keys move between them.
  //
  // We intentionally do NOT set aria-label or aria-roledescription here —
  // this is a headless primitive and we can't assume the consumer's language.
  // Consumers should provide their own aria-label via props.
  return useRender({
    render,
    ref: forwardedRef,
    state,
    props: mergeProps<'button'>(
      {
        className: 'fui-ScrollGalleryScrollMarker',
        type: 'button',
        role: 'tab',
        'aria-selected': isActive,
        tabIndex: isActive ? 0 : -1,
        'data-index': index,
        onClick: handleClick,
        ...(isActive ? { 'data-active': '' } : undefined),
      } as React.ComponentPropsWithRef<'button'>,
      elementProps as React.ComponentPropsWithRef<'button'>,
    ),
    defaultTagName: 'button',
  });
});

ScrollGalleryScrollMarker.displayName = 'ScrollGalleryScrollMarker';

export { ScrollGalleryScrollMarker };
export type { ScrollGalleryScrollMarkerProps, ScrollGalleryScrollMarkerState };

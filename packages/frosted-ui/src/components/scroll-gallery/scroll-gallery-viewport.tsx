'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

/**
 * Tolerance in pixels for scroll boundary comparisons. Accounts for
 * subpixel rounding that browsers apply to scrollLeft/scrollWidth/clientWidth.
 * Without this, buttons might not disable at the exact scroll boundaries.
 */
const SCROLL_TOLERANCE = 1;

interface ScrollGalleryViewportState extends Record<string, unknown> {
  activeIndex: number;
  orientation: 'horizontal' | 'vertical';
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrolling: boolean;
}

interface ScrollGalleryViewportProps
  extends useRender.ComponentProps<'div', ScrollGalleryViewportState> {}

const viewportStateAttributesMapping = {
  activeIndex: (value: unknown) => ({ 'data-active-index': String(value) }),
  orientation: () => null,
  canScrollPrev: (value: unknown) =>
    value ? { 'data-can-scroll-prev': '' } : null,
  canScrollNext: (value: unknown) =>
    value ? { 'data-can-scroll-next': '' } : null,
  scrolling: (value: unknown) =>
    value ? { 'data-scrolling': '' } : null,
};

const ScrollGalleryViewport = React.forwardRef<
  HTMLDivElement,
  ScrollGalleryViewportProps
>(function ScrollGalleryViewport(props, forwardedRef) {
  const { render, ...elementProps } = props;

  const {
    activeIndex,
    setActiveIndex,
    orientation,
    canScrollPrev,
    canScrollNext,
    setCanScrollPrev,
    setCanScrollNext,
    viewportRef,
    getItemElements,
    itemsVersion,
    scrollTargetRef,
    scrollingRef,
  } = useScrollGalleryContext();

  const [isScrolling, setIsScrolling] = React.useState(false);

  const internalRef = React.useRef<HTMLDivElement | null>(null);

  const mergedRefCallback = React.useCallback(
    (node: HTMLDivElement | null) => {
      internalRef.current = node;
      viewportRef.current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef, viewportRef],
  );

  /**
   * Determines whether the Previous/Next buttons should be enabled.
   *
   * Mirrors the native CSS `::scroll-button()` `:disabled` behavior
   * (CSS Overflow 5 §3.2): "When it is not possible to scroll any further
   * in a particular scroll button's scrolling direction, the button is
   * automatically disabled."
   *
   * Uses direct scroll position properties (scrollLeft, scrollWidth,
   * clientWidth) rather than IntersectionObserver for reliability — IO
   * can miss edge cases with subpixel rounding and smooth scroll timing.
   * Called on every scroll event, initial mount, and ResizeObserver callback.
   */
  const updateBoundaries = React.useCallback(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const isHorizontal = orientation === 'horizontal';
    const scrollPos = isHorizontal ? viewport.scrollLeft : viewport.scrollTop;
    const scrollSize = isHorizontal ? viewport.scrollWidth : viewport.scrollHeight;
    const clientSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;

    setCanScrollPrev(scrollPos > SCROLL_TOLERANCE);
    setCanScrollNext(scrollPos + clientSize < scrollSize - SCROLL_TOLERANCE);
  }, [orientation, setCanScrollPrev, setCanScrollNext]);

  /**
   * Implements the "Calculating the Active Scroll Marker" algorithm from
   * CSS Overflow Level 5, adapted for JavaScript.
   *
   * Reference: https://drafts.csswg.org/css-overflow-5/#scroll-marker-active
   *
   * The algorithm works in scroll-position space (not visual pixel space):
   *
   * Step 1 — For each item, compute the scroll position that would align its
   *   start edge with the viewport's start edge. This is the item's "target
   *   scroll position" — the scrollLeft (or scrollTop) the container would
   *   have when scrolled precisely to that item.
   *
   * Step 2 — Redistribute unreachable positions. When multiple items share
   *   the same scroll position (e.g., the last few items in a list whose
   *   target positions exceed maxScrollLeft), they'd all collapse to the
   *   same point and only one could ever be "active". The spec solves this
   *   by linearly spreading positions within a "distribute range" at the
   *   start and end of the scroll range: min(clientSize / 8, scrollRange / 2).
   *   This ensures every item has a unique "zone" of scroll positions where
   *   it becomes active, even at the extremes.
   *
   * Step 3 — Pick the item whose (redistributed) position is *nearest* to
   *   the current scrollPos. This "nearest" approach means the active marker
   *   transitions at the midpoint between two items, matching the behavior
   *   of native CSS scroll markers with scroll-snap: if you were to release
   *   the scroll at the midpoint, the browser would snap to the nearest
   *   target — so that's the item whose marker should be active.
   */
  const computeActiveIndex = React.useCallback(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const items = getItemElements();
    if (items.length === 0) return;

    const isHorizontal = orientation === 'horizontal';
    const scrollPos = isHorizontal ? viewport.scrollLeft : viewport.scrollTop;
    const scrollSize = isHorizontal ? viewport.scrollWidth : viewport.scrollHeight;
    const clientSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;
    const scrollRange = scrollSize - clientSize;

    if (scrollRange <= 0) {
      setActiveIndex(0, 'scroll');
      return;
    }

    const viewportRect = viewport.getBoundingClientRect();
    const viewportStart = isHorizontal ? viewportRect.left : viewportRect.top;

    // Step 1: target scroll position per item
    const positions = items.map((item) => {
      const rect = item.getBoundingClientRect();
      const itemStart = isHorizontal ? rect.left : rect.top;
      return itemStart - viewportStart + scrollPos;
    });

    // Step 2: redistribute unreachable positions (CSS Overflow 5 spec)
    // The "distribute range" is the zone at each end of the scroll range
    // where multiple item targets might cluster beyond the reachable area.
    const distributeRange = Math.min(clientSize / 8, scrollRange / 2);

    // Spread items clustering near the start (scroll position 0)
    const beforeIndices = positions
      .map((pos, i) => ({ pos, i }))
      .filter(({ pos }) => pos < distributeRange);
    if (beforeIndices.length > 1) {
      const minPos = Math.min(...beforeIndices.map((t) => t.pos));
      const denom = distributeRange - minPos;
      if (denom > 0) {
        for (const t of beforeIndices) {
          positions[t.i] = ((t.pos - minPos) / denom) * distributeRange;
        }
      }
    }

    // Spread items clustering near the end (max scroll position)
    const endThreshold = scrollRange - distributeRange;
    const afterIndices = positions
      .map((pos, i) => ({ pos, i }))
      .filter(({ pos }) => pos > endThreshold);
    if (afterIndices.length > 1) {
      const maxPos = Math.max(...afterIndices.map((t) => t.pos));
      const denom = maxPos - endThreshold;
      if (denom > 0) {
        for (const t of afterIndices) {
          positions[t.i] = ((t.pos - endThreshold) / denom) * distributeRange + endThreshold;
        }
      }
    }

    // Step 3: active = nearest item (transitions at midpoints)
    let activeIdx = 0;
    let minDistance = Infinity;
    for (let i = 0; i < positions.length; i++) {
      const distance = Math.abs(positions[i] - scrollPos);
      if (distance < minDistance) {
        minDistance = distance;
        activeIdx = i;
      }
    }

    setActiveIndex(activeIdx, 'scroll');
  }, [getItemElements, orientation, setActiveIndex]);

  /**
   * How long to wait after the last `scroll` event fires before considering
   * a programmatic smooth scroll "settled". We don't use `scrollend` because
   * browser support is still patchy; instead we use a scroll-event debounce.
   */
  const SETTLE_DELAY = 150;

  /**
   * Main scroll-event orchestrator.
   *
   * This effect coordinates two ref-based flags set by the scroll buttons
   * and scroll markers (see context.tsx for details):
   *
   *   - `scrollingRef.current` — true while a programmatic smooth scroll
   *     is animating (set by Previous, Next, or ScrollMarker on click).
   *
   *   - `scrollTargetRef.current` — the item index targeted by a marker
   *     click (CSS spec's "current scroll target"). null for button scrolls.
   *
   * The logic for each scroll event:
   *
   * 1. Always update button enable/disable state (updateBoundaries).
   *
   * 2. If `scrollingRef` is true (animation in progress):
   *    → Suppress computeActiveIndex to avoid marker flickering.
   *    → Debounce a settle handler: after SETTLE_DELAY ms of no scroll
   *      events, clear scrollingRef and recompute if no scrollTarget is set
   *      (button scrolls need to discover where they landed).
   *    → Return early.
   *
   * 3. If `scrollTargetRef` is set but `scrollingRef` is false:
   *    → The animation finished but the user is now scrolling manually.
   *    → Clear scrollTargetRef (the user has "taken over").
   *
   * 4. Otherwise (pure user scroll): run computeActiveIndex immediately
   *    with no debounce, giving live feedback as the user scrolls.
   */
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    let settleTimeout: ReturnType<typeof setTimeout>;
    let scrollIdleTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      updateBoundaries();
      setIsScrolling(true);
      clearTimeout(scrollIdleTimeout);
      scrollIdleTimeout = setTimeout(() => setIsScrolling(false), SETTLE_DELAY);

      clearTimeout(settleTimeout);

      // Case 2: programmatic animation in progress
      if (scrollingRef.current) {
        settleTimeout = setTimeout(() => {
          scrollingRef.current = false;
          // For button scrolls (scrollTargetRef is null), we need to compute
          // the active index since the button doesn't know where it will land.
          // For marker scrolls, the target is already set — no recomputation needed.
          if (scrollTargetRef.current === null) {
            computeActiveIndex();
          }
        }, SETTLE_DELAY);
        return;
      }

      // Case 3: animation settled, but user is now scrolling
      if (scrollTargetRef.current !== null) {
        scrollTargetRef.current = null;
      }

      // Case 4: pure user scroll — update active index in real time
      computeActiveIndex();
    };

    /**
     * User input detection: wheel, touchstart, pointerdown.
     *
     * When the user physically interacts with the viewport during a
     * programmatic smooth scroll, we immediately cancel the programmatic
     * state. This ensures:
     * - The active marker reflects where the user is *actually* scrolling,
     *   not the original programmatic target.
     * - No stale settleTimeout fires after the user has taken control.
     *
     * This solves the bug where clicking a marker then immediately swiping
     * would leave the marker stuck on the clicked target.
     */
    const handleUserInput = () => {
      if (scrollingRef.current || scrollTargetRef.current !== null) {
        scrollingRef.current = false;
        scrollTargetRef.current = null;
        clearTimeout(settleTimeout);
      }
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    viewport.addEventListener('wheel', handleUserInput, { passive: true });
    viewport.addEventListener('touchstart', handleUserInput, { passive: true });
    viewport.addEventListener('pointerdown', handleUserInput);
    return () => {
      viewport.removeEventListener('scroll', handleScroll);
      viewport.removeEventListener('wheel', handleUserInput);
      viewport.removeEventListener('touchstart', handleUserInput);
      viewport.removeEventListener('pointerdown', handleUserInput);
      clearTimeout(settleTimeout);
      clearTimeout(scrollIdleTimeout);
    };
  }, [computeActiveIndex, updateBoundaries, scrollTargetRef, scrollingRef]);

  // Compute initial boundaries and recompute when items or layout change.
  // ResizeObserver handles container resize (e.g., window resize, flex changes).
  // `itemsVersion` dependency ensures re-setup when items are dynamically added/removed.
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const items = getItemElements();
    if (items.length === 0) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return;
    }

    updateBoundaries();

    const resizeObserver = new ResizeObserver(updateBoundaries);
    resizeObserver.observe(viewport);
    return () => resizeObserver.disconnect();
  }, [getItemElements, setCanScrollPrev, setCanScrollNext, itemsVersion, updateBoundaries]);

  /**
   * IntersectionObserver for `data-in-view` tracking on individual items.
   *
   * This is a convenience data attribute (not used internally for active
   * index or button state) — consumers can use `[data-in-view]` in CSS
   * for things like fade-in animations as items scroll into view.
   * Separate from the active index logic which uses scroll-position math.
   */
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const items = getItemElements();
    if (items.length === 0) return;

    const inViewObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.setAttribute('data-in-view', '');
          } else {
            target.removeAttribute('data-in-view');
          }
        }
      },
      {
        root: viewport,
        threshold: [0, 0.5],
      },
    );

    for (const item of items) {
      inViewObserver.observe(item);
    }

    return () => inViewObserver.disconnect();
  }, [getItemElements, itemsVersion]);

  const state = React.useMemo<ScrollGalleryViewportState>(
    () => ({ activeIndex, orientation, canScrollPrev, canScrollNext, scrolling: isScrolling }),
    [activeIndex, orientation, canScrollPrev, canScrollNext, isScrolling],
  );

  return useRender({
    render,
    ref: mergedRefCallback,
    state,
    stateAttributesMapping: viewportStateAttributesMapping,
    props: mergeProps<'div'>(
      {
        'data-orientation': orientation,
      } as React.ComponentPropsWithRef<'div'>,
      elementProps as React.ComponentPropsWithRef<'div'>,
    ),
    defaultTagName: 'div',
  });
});

ScrollGalleryViewport.displayName = 'ScrollGalleryViewport';

export { ScrollGalleryViewport };
export type { ScrollGalleryViewportProps, ScrollGalleryViewportState };

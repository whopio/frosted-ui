'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { PAGE_SCROLL_FACTOR, getScrollBehavior, getSnapAlignment, useScrollGalleryContext } from './scroll-gallery-context';

/**
 * Tolerance in pixels for scroll boundary comparisons. Accounts for
 * subpixel rounding that browsers apply to scrollLeft/scrollWidth/clientWidth.
 * Without this, buttons might not disable at the exact scroll boundaries.
 */
const SCROLL_TOLERANCE = 1;

/**
 * How long to wait after the last `scroll` event fires before considering
 * a programmatic smooth scroll "settled". We don't use `scrollend` because
 * browser support is still patchy; instead we use a scroll-event debounce.
 */
const SETTLE_DELAY = 150;

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
    loop,
    canScrollPrev,
    canScrollNext,
    setCanScrollPrev,
    setCanScrollNext,
    viewportRef,
    getItemElements,
    itemsVersion,
    scrollTargetRef,
    scrollingRef,
    scrollToItem,
  } = useScrollGalleryContext();

  const [isScrolling, setIsScrolling] = React.useState(false);

  const internalRef = React.useRef<HTMLDivElement | null>(null);

  // Cache the resolved scroll-snap-align so we don't call getComputedStyle
  // on every scroll event. Updated when items change (itemsVersion).
  const snapAlignRef = React.useRef<'start' | 'center' | 'end'>('start');

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
   * Step 1 — For each item, compute the scroll position that would perfectly
   *   snap it according to its `scroll-snap-align` CSS value. We read the
   *   resolved snap alignment from the first item and use the matching
   *   reference point (start edge, center, or end edge) for both item and
   *   viewport. This ensures the algorithm works correctly regardless of
   *   whether the consumer uses `scroll-snap-align: start`, `center`, or
   *   `end` (or no snapping at all, which defaults to start alignment).
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

    // Step 1: compute each item's target scroll position based on the
    // cached scroll-snap-align of the items. This ensures the position
    // maps to the scrollPos the browser would set when that item is snapped.
    const snapAlign = snapAlignRef.current;

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

    const positions = items.map((item) => {
      const rect = item.getBoundingClientRect();
      let itemRef: number;
      if (snapAlign === 'center') {
        itemRef = isHorizontal
          ? rect.left + rect.width / 2
          : rect.top + rect.height / 2;
      } else if (snapAlign === 'end') {
        itemRef = isHorizontal ? rect.right : rect.bottom;
      } else {
        itemRef = isHorizontal ? rect.left : rect.top;
      }
      return itemRef - viewportRef + scrollPos;
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

      // Case 2: programmatic animation in progress (marker click or loop-wrap).
      // Suppress computeActiveIndex to keep the marker locked on the target
      // that was already set via setActiveIndex in the click handler.
      //
      // We intentionally do NOT clear scrollingRef here. It stays true until
      // the user explicitly interacts (wheel/touch/pointer via handleUserInput)
      // or a new button/marker click clears it. This prevents a race condition
      // where a late scroll event sneaks in right after the settle timeout
      // fires, entering Case 4 and running computeActiveIndex with a scroll
      // position that doesn't perfectly match the target — causing a visible
      // flicker: target → wrong → target.
      //
      // scrollTargetRef is cleared on settle since its only purpose is to
      // identify the target during animation; it's not needed afterward.
      if (scrollingRef.current) {
        settleTimeout = setTimeout(() => {
          scrollTargetRef.current = null;
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
    snapAlignRef.current = getSnapAlignment(items[0], orientation);

    const resizeObserver = new ResizeObserver(() => {
      updateBoundaries();
      // Re-read snap alignment on resize — a media query may have changed it.
      if (items.length > 0) {
        snapAlignRef.current = getSnapAlignment(items[0], orientation);
      }
    });
    resizeObserver.observe(viewport);
    return () => resizeObserver.disconnect();
  }, [getItemElements, setCanScrollPrev, setCanScrollNext, itemsVersion, updateBoundaries, orientation]);

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
        threshold: 0,
      },
    );

    for (const item of items) {
      inViewObserver.observe(item);
    }

    return () => inViewObserver.disconnect();
  }, [getItemElements, itemsVersion]);

  /**
   * Keyboard navigation on the viewport itself (WAI-ARIA Tabs pattern adapted
   * for scroll containers):
   *
   * - Arrow keys: step by one item, with loop wrap if enabled. Matches the
   *   marker group arrow behavior for consistency.
   * - Home / End: jump to first / last item.
   * - Page Up / Page Down: scroll by ~85% of the viewport ("one page"),
   *   matching the CSS Overflow 5 §3.2 scroll-button spec. These use
   *   real-time marker updates (no scrollTargetRef lock).
   *
   * All handled keys call preventDefault to suppress native scroll.
   */
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const viewport = internalRef.current;
      if (!viewport) return;

      const isHorizontal = orientation === 'horizontal';
      const count = getItemElements().length;
      if (count === 0) return;

      let targetIndex: number | null = null;
      let pageDirection: number | null = null;

      switch (event.key) {
        case isHorizontal ? 'ArrowRight' : 'ArrowDown': {
          if (loop) {
            targetIndex = (activeIndex + 1) % count;
          } else {
            targetIndex = Math.min(activeIndex + 1, count - 1);
          }
          break;
        }
        case isHorizontal ? 'ArrowLeft' : 'ArrowUp': {
          if (loop) {
            targetIndex = (activeIndex - 1 + count) % count;
          } else {
            targetIndex = Math.max(activeIndex - 1, 0);
          }
          break;
        }
        case 'Home':
          targetIndex = 0;
          break;
        case 'End':
          targetIndex = count - 1;
          break;
        case 'PageUp':
          pageDirection = -1;
          break;
        case 'PageDown':
          pageDirection = 1;
          break;
        default:
          return;
      }

      event.preventDefault();

      if (targetIndex !== null && targetIndex !== activeIndex) {
        scrollToItem(targetIndex);
      } else if (pageDirection !== null) {
        scrollTargetRef.current = null;
        scrollingRef.current = false;

        const pageSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;
        viewport.scrollBy({
          [isHorizontal ? 'left' : 'top']: pageDirection * pageSize * PAGE_SCROLL_FACTOR,
          behavior: getScrollBehavior(),
        });
      }
    },
    [activeIndex, getItemElements, loop, orientation, scrollTargetRef, scrollingRef, scrollToItem],
  );

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
        className: 'fui-ScrollGalleryViewport',
        'data-orientation': orientation,
        onKeyDown: handleKeyDown,
      } as React.ComponentPropsWithRef<'div'>,
      elementProps as React.ComponentPropsWithRef<'div'>,
    ),
    defaultTagName: 'div',
  });
});

ScrollGalleryViewport.displayName = 'ScrollGalleryViewport';

export { ScrollGalleryViewport };
export type { ScrollGalleryViewportProps, ScrollGalleryViewportState };

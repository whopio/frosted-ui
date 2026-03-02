'use client';

import * as React from 'react';

/**
 * Identifies what initiated an active index change. Consumers receive this
 * in the `onValueChange` callback so they can respond differently to
 * programmatic vs user-driven changes.
 */
type ChangeSource = 'scroll' | 'indicator';

interface ScrollGalleryContextValue {
  activeIndex: number;
  setActiveIndex: (index: number, source: ChangeSource) => void;
  orientation: 'horizontal' | 'vertical';

  /**
   * When true, navigation wraps around at boundaries:
   * - Previous/Next buttons don't disable and jump to the other end
   * - Marker group arrow keys wrap instead of clamping
   */
  loop: boolean;

  /**
   * Mirrors the native CSS `::scroll-button()` `:disabled` pseudo-class
   * (CSS Overflow 5 §3.2): a scroll button is disabled when its scroll
   * container can't be scrolled further in that direction.
   */
  canScrollPrev: boolean;
  canScrollNext: boolean;
  setCanScrollPrev: (value: boolean) => void;
  setCanScrollNext: (value: boolean) => void;

  /** Register/unregister an Item DOM element. Returns a cleanup function. */
  registerItem: (element: HTMLElement) => () => void;
  viewportRef: React.RefObject<HTMLElement | null>;
  /** Returns item elements sorted in DOM order via compareDocumentPosition. */
  getItemElements: () => HTMLElement[];
  itemCount: number;
  /** Increments when items register/unregister, used to re-trigger observer setup. */
  itemsVersion: number;

  /**
   * Implements the CSS Overflow 5 §2.1 "current scroll target" concept.
   *
   * When a scroll marker is clicked, the spec says the scroll container's
   * `current scroll target` is set to that element. The active marker then
   * reflects this target and *persists* through the smooth scroll animation
   * until the user initiates a manual scroll (which resets it to null).
   *
   * We store the item index rather than the DOM element since that's what
   * our active index state uses.
   */
  scrollTargetRef: React.RefObject<number | null>;

  /**
   * True while a programmatic smooth scroll (from a marker click or scroll
   * button click) is animating. Used by the viewport's scroll handler to
   * suppress active-index recomputation during animations, preventing the
   * marker from flickering through intermediate scroll positions.
   *
   * Cleared after scroll events stop firing (settle detection via debounce).
   */
  scrollingRef: React.RefObject<boolean>;

  /**
   * Scroll the viewport to bring the item at the given index into view,
   * locking the active marker to that index through the smooth scroll
   * animation. This is the shared "locked scroll to item" primitive used
   * by markers, viewport arrow keys, scroll button loop-wrap, and the
   * public imperative `scrollTo` API.
   */
  scrollToItem: (index: number, behavior?: ScrollBehavior) => void;
}

const ScrollGalleryContext = React.createContext<ScrollGalleryContextValue | undefined>(undefined);

function useScrollGalleryContext(): ScrollGalleryContextValue {
  const context = React.useContext(ScrollGalleryContext);
  if (context === undefined) {
    throw new Error(
      'ScrollGallery compound components must be used within a ScrollGallery.Root',
    );
  }
  return context;
}

/**
 * Resolves the scroll behavior to use for programmatic scrolls.
 * Returns 'instant' when the user prefers reduced motion, otherwise
 * returns the requested behavior. This complements the CSS
 * `scroll-behavior: auto` rule in scroll-gallery.css — the CSS property
 * only affects CSS-triggered scrolls, while our `scrollTo`/`scrollBy`
 * calls pass an explicit `behavior` option that overrides it.
 */
function getScrollBehavior(preferred: ScrollBehavior = 'smooth'): ScrollBehavior {
  if (typeof window === 'undefined') return preferred;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'instant'
    : preferred;
}

/**
 * Reads the resolved `scroll-snap-align` from an element and returns the
 * relevant axis value ('start', 'center', or 'end'). Falls back to 'start'
 * when no snap alignment is set ('none') or on SSR.
 *
 * CSS syntax: `scroll-snap-align: [block] [inline]`. One value → both axes.
 */
function getSnapAlignment(
  item: HTMLElement,
  orientation: 'horizontal' | 'vertical',
): 'start' | 'center' | 'end' {
  try {
    const raw = getComputedStyle(item).scrollSnapAlign;
    const parts = raw.split(' ');
    const align =
      orientation === 'horizontal'
        ? parts.length > 1 ? parts[1] : parts[0]
        : parts[0];
    if (align === 'center') return 'center';
    if (align === 'end') return 'end';
  } catch {
    // SSR or getComputedStyle unavailable
  }
  return 'start';
}

/**
 * Computes the scroll distance to bring a target item to its snap position
 * within the viewport. Reads `scroll-snap-align` from the target to use the
 * matching reference point (start edge, center, or end edge) for both the
 * item and viewport. This ensures the browser's scroll snapping lands on
 * the intended item rather than a neighbor.
 */
function getScrollDistance(
  target: HTMLElement,
  viewport: HTMLElement,
  orientation: 'horizontal' | 'vertical',
): number {
  const isHorizontal = orientation === 'horizontal';
  const snapAlign = getSnapAlignment(target, orientation);
  const targetRect = target.getBoundingClientRect();
  const viewportRect = viewport.getBoundingClientRect();

  let targetRef: number;
  let viewportRef: number;

  if (snapAlign === 'center') {
    targetRef = isHorizontal
      ? targetRect.left + targetRect.width / 2
      : targetRect.top + targetRect.height / 2;
    viewportRef = isHorizontal
      ? viewportRect.left + viewportRect.width / 2
      : viewportRect.top + viewportRect.height / 2;
  } else if (snapAlign === 'end') {
    targetRef = isHorizontal ? targetRect.right : targetRect.bottom;
    viewportRef = isHorizontal ? viewportRect.right : viewportRect.bottom;
  } else {
    targetRef = isHorizontal ? targetRect.left : targetRect.top;
    viewportRef = isHorizontal ? viewportRect.left : viewportRect.top;
  }

  return targetRef - viewportRef;
}

/**
 * CSS Overflow 5 §3.2: scroll buttons scroll by "one page" in their
 * direction — "similar to pressing PgUp/PgDn keys. (Usually, this will
 * be about 85% of the scrollport size.)"
 */
const PAGE_SCROLL_FACTOR = 0.85;

export { ScrollGalleryContext, useScrollGalleryContext, getScrollBehavior, getScrollDistance, getSnapAlignment, PAGE_SCROLL_FACTOR };
export type { ScrollGalleryContextValue, ChangeSource };

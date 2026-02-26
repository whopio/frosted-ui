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
  scrollTargetRef: React.MutableRefObject<number | null>;

  /**
   * True while a programmatic smooth scroll (from a marker click or scroll
   * button click) is animating. Used by the viewport's scroll handler to
   * suppress active-index recomputation during animations, preventing the
   * marker from flickering through intermediate scroll positions.
   *
   * Cleared after scroll events stop firing (settle detection via debounce).
   */
  scrollingRef: React.MutableRefObject<boolean>;
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

export { ScrollGalleryContext, useScrollGalleryContext };
export type { ScrollGalleryContextValue, ChangeSource };

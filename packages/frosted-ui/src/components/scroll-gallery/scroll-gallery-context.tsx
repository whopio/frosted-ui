'use client';

import * as React from 'react';

type ChangeSource = 'scroll' | 'indicator' | 'previous' | 'next';

interface ScrollGalleryContextValue {
  activeIndex: number;
  setActiveIndex: (index: number, source: ChangeSource) => void;
  orientation: 'horizontal' | 'vertical';
  canScrollPrev: boolean;
  canScrollNext: boolean;
  setCanScrollPrev: (value: boolean) => void;
  setCanScrollNext: (value: boolean) => void;
  registerItem: (element: HTMLElement) => () => void;
  viewportRef: React.RefObject<HTMLElement | null>;
  getItemElements: () => HTMLElement[];
  itemCount: number;
  /** Increments when items register/unregister, used to re-trigger observer setup */
  itemsVersion: number;
  /** CSS spec "current scroll target": index set by marker click, persists until user scrolls */
  scrollTargetRef: React.MutableRefObject<number | null>;
  /** True while a programmatic smooth scroll (from marker or button) is animating */
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

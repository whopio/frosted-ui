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

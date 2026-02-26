'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

const SCROLL_TOLERANCE = 1;

interface ScrollGalleryViewportState extends Record<string, unknown> {
  activeIndex: number;
  orientation: 'horizontal' | 'vertical';
}

interface ScrollGalleryViewportProps
  extends useRender.ComponentProps<'div', ScrollGalleryViewportState> {}

const ScrollGalleryViewport = React.forwardRef<
  HTMLDivElement,
  ScrollGalleryViewportProps
>(function ScrollGalleryViewport(props, forwardedRef) {
  const { render, ...elementProps } = props;

  const {
    activeIndex,
    setActiveIndex,
    orientation,
    setCanScrollPrev,
    setCanScrollNext,
    viewportRef,
    getItemElements,
    itemsVersion,
    scrollTargetRef,
    scrollingRef,
  } = useScrollGalleryContext();

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

    // Step 1: compute each item's target scroll position
    // (the scrollLeft/scrollTop that would place the item's start at the viewport start)
    const positions = items.map((item) => {
      const rect = item.getBoundingClientRect();
      const itemStart = isHorizontal ? rect.left : rect.top;
      return itemStart - viewportStart + scrollPos;
    });

    // Step 2: redistribute unreachable positions (CSS Overflow Level 5 spec)
    const distributeRange = Math.min(clientSize / 8, scrollRange / 2);

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

    // Step 3: active = last item whose redistributed position <= scrollPos
    let activeIdx = 0;
    for (let i = 0; i < positions.length; i++) {
      if (positions[i] <= scrollPos + SCROLL_TOLERANCE) {
        activeIdx = i;
      }
    }

    setActiveIndex(activeIdx, 'scroll');
  }, [getItemElements, orientation, setActiveIndex]);

  const SETTLE_DELAY = 150;

  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    let settleTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      updateBoundaries();

      clearTimeout(settleTimeout);

      if (scrollingRef.current) {
        settleTimeout = setTimeout(() => {
          scrollingRef.current = false;
          if (scrollTargetRef.current === null) {
            computeActiveIndex();
          }
        }, SETTLE_DELAY);
        return;
      }

      if (scrollTargetRef.current !== null) {
        scrollTargetRef.current = null;
      }

      computeActiveIndex();
    };

    // Physical input events indicate the user has taken over scrolling,
    // cancelling any in-progress programmatic smooth scroll.
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
    };
  }, [computeActiveIndex, updateBoundaries, scrollTargetRef, scrollingRef]);

  // Compute initial boundaries and recompute when items or layout change
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

  // IntersectionObserver for in-view tracking
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
    () => ({ activeIndex, orientation }),
    [activeIndex, orientation],
  );

  return useRender({
    render,
    ref: mergedRefCallback,
    state,
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

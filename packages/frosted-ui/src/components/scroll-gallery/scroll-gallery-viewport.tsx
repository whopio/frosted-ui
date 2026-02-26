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
    const viewportRect = viewport.getBoundingClientRect();
    const viewportStart = isHorizontal ? viewportRect.left : viewportRect.top;

    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < items.length; i++) {
      const rect = items[i].getBoundingClientRect();
      const itemStart = isHorizontal ? rect.left : rect.top;
      const distance = Math.abs(itemStart - viewportStart);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }

    setActiveIndex(closestIndex, 'scroll');
  }, [getItemElements, orientation, setActiveIndex]);

  // Scroll event handling: boundaries update in real-time, active index on settle
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const supportsScrollEnd = 'onscrollend' in window;

    const handleScroll = () => updateBoundaries();

    const handleScrollEnd = () => computeActiveIndex();

    viewport.addEventListener('scroll', handleScroll, { passive: true });

    if (supportsScrollEnd) {
      viewport.addEventListener('scrollend', handleScrollEnd);
      return () => {
        viewport.removeEventListener('scroll', handleScroll);
        viewport.removeEventListener('scrollend', handleScrollEnd);
      };
    }

    let timeout: ReturnType<typeof setTimeout>;
    const handleScrollFallback = () => {
      clearTimeout(timeout);
      timeout = setTimeout(computeActiveIndex, 100);
    };
    viewport.addEventListener('scroll', handleScrollFallback, { passive: true });
    return () => {
      viewport.removeEventListener('scroll', handleScroll);
      viewport.removeEventListener('scroll', handleScrollFallback);
      clearTimeout(timeout);
    };
  }, [computeActiveIndex, updateBoundaries]);

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

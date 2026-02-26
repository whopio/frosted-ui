'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

const BOUNDARY_THRESHOLD = 0.95;

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

  // Active index detection on scroll end
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const supportsScrollEnd = 'onscrollend' in window;

    if (supportsScrollEnd) {
      const handleScrollEnd = () => computeActiveIndex();
      viewport.addEventListener('scrollend', handleScrollEnd);
      return () => viewport.removeEventListener('scrollend', handleScrollEnd);
    }

    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(computeActiveIndex, 100);
    };
    viewport.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      viewport.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [computeActiveIndex]);

  // IntersectionObserver for in-view tracking and boundary detection
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const items = getItemElements();
    if (items.length === 0) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return;
    }

    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    // Boundary observer: watches first/last items at a high threshold
    const boundaryObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const isFullyVisible = entry.intersectionRatio >= BOUNDARY_THRESHOLD;
          if (entry.target === firstItem) {
            setCanScrollPrev(!isFullyVisible);
          }
          if (entry.target === lastItem) {
            setCanScrollNext(!isFullyVisible);
          }
        }
      },
      {
        root: viewport,
        threshold: [0, BOUNDARY_THRESHOLD],
      },
    );

    boundaryObserver.observe(firstItem);
    boundaryObserver.observe(lastItem);

    // In-view observer: tracks which items are visible
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

    return () => {
      boundaryObserver.disconnect();
      inViewObserver.disconnect();
    };
  }, [getItemElements, setCanScrollPrev, setCanScrollNext, itemsVersion]);

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

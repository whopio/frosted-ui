'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

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

  // IntersectionObserver for boundary detection and in-view tracking
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const updateBoundaries = () => {
      const items = getItemElements();
      if (items.length === 0) {
        setCanScrollPrev(false);
        setCanScrollNext(false);
        return;
      }

      const isHorizontal = orientation === 'horizontal';
      const viewportRect = viewport.getBoundingClientRect();

      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const firstRect = firstItem.getBoundingClientRect();
      const lastRect = lastItem.getBoundingClientRect();

      if (isHorizontal) {
        setCanScrollPrev(firstRect.left < viewportRect.left - 1);
        setCanScrollNext(lastRect.right > viewportRect.right + 1);
      } else {
        setCanScrollPrev(firstRect.top < viewportRect.top - 1);
        setCanScrollNext(lastRect.bottom > viewportRect.bottom + 1);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.setAttribute('data-in-view', '');
          } else {
            target.removeAttribute('data-in-view');
          }
        }
        updateBoundaries();
      },
      {
        root: viewport,
        threshold: [0, 0.5, 0.95],
      },
    );

    const items = getItemElements();
    for (const item of items) {
      observer.observe(item);
    }

    updateBoundaries();

    return () => observer.disconnect();
  }, [getItemElements, orientation, setCanScrollPrev, setCanScrollNext]);

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
        'aria-roledescription': 'carousel',
        'aria-live': 'polite',
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

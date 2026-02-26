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
  }, [getItemElements, orientation, setCanScrollPrev, setCanScrollNext]);

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

  // Scroll listener: update boundaries on every scroll frame, compute active index on scroll end
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      updateBoundaries();
    };

    const supportsScrollEnd = 'onscrollend' in window;

    if (supportsScrollEnd) {
      const handleScrollEnd = () => computeActiveIndex();
      viewport.addEventListener('scroll', handleScroll, { passive: true });
      viewport.addEventListener('scrollend', handleScrollEnd);
      return () => {
        viewport.removeEventListener('scroll', handleScroll);
        viewport.removeEventListener('scrollend', handleScrollEnd);
      };
    }

    // Fallback: debounced scroll for active index
    let timeout: ReturnType<typeof setTimeout>;
    const handleScrollWithDebounce = () => {
      updateBoundaries();
      clearTimeout(timeout);
      timeout = setTimeout(computeActiveIndex, 100);
    };
    viewport.addEventListener('scroll', handleScrollWithDebounce, { passive: true });
    return () => {
      viewport.removeEventListener('scroll', handleScrollWithDebounce);
      clearTimeout(timeout);
    };
  }, [computeActiveIndex, updateBoundaries]);

  // IntersectionObserver for in-view tracking only
  React.useEffect(() => {
    const viewport = internalRef.current;
    if (!viewport) return;

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
      },
      {
        root: viewport,
        threshold: [0, 0.5],
      },
    );

    const items = getItemElements();
    for (const item of items) {
      observer.observe(item);
    }

    return () => observer.disconnect();
  }, [getItemElements, itemsVersion]);

  // Compute initial boundaries once items are registered
  React.useEffect(() => {
    updateBoundaries();
  }, [updateBoundaries, itemsVersion]);

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

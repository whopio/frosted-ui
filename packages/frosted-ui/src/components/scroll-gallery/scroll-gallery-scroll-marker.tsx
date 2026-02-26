'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryScrollMarkerState extends Record<string, unknown> {
  active: boolean;
  index: number;
}

interface ScrollGalleryScrollMarkerProps
  extends useRender.ComponentProps<'button', ScrollGalleryScrollMarkerState> {
  /**
   * The index of the item this scroll marker controls.
   */
  index: number;
}

const ScrollGalleryScrollMarker = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryScrollMarkerProps
>(function ScrollGalleryScrollMarker(props, forwardedRef) {
  const { render, index, ...elementProps } = props;

  const { activeIndex, setActiveIndex, orientation, viewportRef, getItemElements, scrollTargetRef, scrollingRef } =
    useScrollGalleryContext();

  const isActive = index === activeIndex;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const items = getItemElements();
    const target = items[index];
    if (!target) return;

    const isHorizontal = orientation === 'horizontal';
    const targetRect = target.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();

    const distance = isHorizontal
      ? targetRect.left - viewportRect.left
      : targetRect.top - viewportRect.top;

    scrollTargetRef.current = index;
    scrollingRef.current = true;

    viewport.scrollBy({
      [isHorizontal ? 'left' : 'top']: distance,
      behavior: 'smooth',
    });

    setActiveIndex(index, 'indicator');
  }, [getItemElements, index, orientation, scrollTargetRef, scrollingRef, setActiveIndex, viewportRef]);

  const state = React.useMemo<ScrollGalleryScrollMarkerState>(
    () => ({ active: isActive, index }),
    [isActive, index],
  );

  return useRender({
    render,
    ref: forwardedRef,
    state,
    props: mergeProps<'button'>(
      {
        type: 'button',
        role: 'tab',
        'aria-selected': isActive,
        tabIndex: isActive ? 0 : -1,
        onClick: handleClick,
        ...(isActive ? { 'data-active': '' } : undefined),
      } as React.ComponentPropsWithRef<'button'>,
      elementProps as React.ComponentPropsWithRef<'button'>,
    ),
    defaultTagName: 'button',
  });
});

ScrollGalleryScrollMarker.displayName = 'ScrollGalleryScrollMarker';

export { ScrollGalleryScrollMarker };
export type { ScrollGalleryScrollMarkerProps, ScrollGalleryScrollMarkerState };

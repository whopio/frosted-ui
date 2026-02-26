'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryIndicatorState extends Record<string, unknown> {
  active: boolean;
  index: number;
}

interface ScrollGalleryIndicatorProps
  extends useRender.ComponentProps<'button', ScrollGalleryIndicatorState> {
  /**
   * The index of the item this indicator controls.
   */
  index: number;
}

const ScrollGalleryIndicator = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryIndicatorProps
>(function ScrollGalleryIndicator(props, forwardedRef) {
  const { render, index, ...elementProps } = props;

  const { activeIndex, setActiveIndex, orientation, viewportRef, getItemElements } =
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

    viewport.scrollBy({
      [isHorizontal ? 'left' : 'top']: distance,
      behavior: 'smooth',
    });

    setActiveIndex(index, 'indicator');
  }, [getItemElements, index, orientation, setActiveIndex, viewportRef]);

  const state = React.useMemo<ScrollGalleryIndicatorState>(
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
        'aria-label': `Go to slide ${index + 1}`,
        tabIndex: isActive ? 0 : -1,
        onClick: handleClick,
        ...(isActive ? { 'data-active': '' } : undefined),
      } as React.ComponentPropsWithRef<'button'>,
      elementProps as React.ComponentPropsWithRef<'button'>,
    ),
    defaultTagName: 'button',
  });
});

ScrollGalleryIndicator.displayName = 'ScrollGalleryIndicator';

export { ScrollGalleryIndicator };
export type { ScrollGalleryIndicatorProps, ScrollGalleryIndicatorState };

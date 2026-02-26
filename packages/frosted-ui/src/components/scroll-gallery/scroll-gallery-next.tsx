'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryNextState extends Record<string, unknown> {
  disabled: boolean;
}

interface ScrollGalleryNextProps
  extends useRender.ComponentProps<'button', ScrollGalleryNextState> {}

const ScrollGalleryNext = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryNextProps
>(function ScrollGalleryNext(props, forwardedRef) {
  const { render, ...elementProps } = props;

  const {
    activeIndex,
    setActiveIndex,
    canScrollNext,
    orientation,
    viewportRef,
    getItemElements,
  } = useScrollGalleryContext();

  const disabled = !canScrollNext;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || disabled) return;

    const items = getItemElements();
    const targetIndex = Math.min(items.length - 1, activeIndex + 1);
    const target = items[targetIndex];
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

    setActiveIndex(targetIndex, 'next');
  }, [activeIndex, disabled, getItemElements, orientation, setActiveIndex, viewportRef]);

  const state = React.useMemo<ScrollGalleryNextState>(
    () => ({ disabled }),
    [disabled],
  );

  return useRender({
    render,
    ref: forwardedRef,
    state,
    props: mergeProps<'button'>(
      {
        type: 'button',
        disabled,
        'aria-label': 'Next',
        onClick: handleClick,
        ...(disabled ? { 'data-disabled': '' } : undefined),
      } as React.ComponentPropsWithRef<'button'>,
      elementProps as React.ComponentPropsWithRef<'button'>,
    ),
    defaultTagName: 'button',
  });
});

ScrollGalleryNext.displayName = 'ScrollGalleryNext';

export { ScrollGalleryNext };
export type { ScrollGalleryNextProps, ScrollGalleryNextState };

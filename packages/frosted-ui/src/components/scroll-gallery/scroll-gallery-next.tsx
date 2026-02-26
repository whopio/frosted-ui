'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

const PAGE_SCROLL_FACTOR = 0.85;

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

  const { canScrollNext, orientation, viewportRef, scrollingRef } =
    useScrollGalleryContext();

  const disabled = !canScrollNext;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || disabled) return;

    const isHorizontal = orientation === 'horizontal';
    const pageSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;

    scrollingRef.current = true;

    viewport.scrollBy({
      [isHorizontal ? 'left' : 'top']: pageSize * PAGE_SCROLL_FACTOR,
      behavior: 'smooth',
    });
  }, [disabled, orientation, scrollingRef, viewportRef]);

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

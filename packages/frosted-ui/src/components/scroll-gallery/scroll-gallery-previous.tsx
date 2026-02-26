'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

const PAGE_SCROLL_FACTOR = 0.85;

interface ScrollGalleryPreviousState extends Record<string, unknown> {
  disabled: boolean;
}

interface ScrollGalleryPreviousProps
  extends useRender.ComponentProps<'button', ScrollGalleryPreviousState> {}

const ScrollGalleryPrevious = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryPreviousProps
>(function ScrollGalleryPrevious(props, forwardedRef) {
  const { render, ...elementProps } = props;

  const { canScrollPrev, orientation, viewportRef } =
    useScrollGalleryContext();

  const disabled = !canScrollPrev;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || disabled) return;

    const isHorizontal = orientation === 'horizontal';
    const pageSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;

    viewport.scrollBy({
      [isHorizontal ? 'left' : 'top']: -pageSize * PAGE_SCROLL_FACTOR,
      behavior: 'smooth',
    });
  }, [disabled, orientation, viewportRef]);

  const state = React.useMemo<ScrollGalleryPreviousState>(
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

ScrollGalleryPrevious.displayName = 'ScrollGalleryPrevious';

export { ScrollGalleryPrevious };
export type { ScrollGalleryPreviousProps, ScrollGalleryPreviousState };

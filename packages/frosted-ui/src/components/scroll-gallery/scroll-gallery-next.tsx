'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

/**
 * CSS Overflow 5 §3.2 specifies that scroll buttons scroll by "one page"
 * in their direction, "similar to pressing PgUp/PgDn keys. (Usually, this
 * will be about 85% of the scrollport size.)"
 *
 * We use 0.85 to match the spec recommendation and leave visual overlap
 * so the user retains context of where they were before the scroll.
 */
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

  const { canScrollNext, orientation, viewportRef, scrollTargetRef, scrollingRef } =
    useScrollGalleryContext();

  const disabled = !canScrollNext;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || disabled) return;

    const isHorizontal = orientation === 'horizontal';
    const pageSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;

    // Clear any lingering "current scroll target" from a prior marker click —
    // see Previous button for detailed explanation.
    scrollTargetRef.current = null;
    scrollingRef.current = true;

    viewport.scrollBy({
      [isHorizontal ? 'left' : 'top']: pageSize * PAGE_SCROLL_FACTOR,
      behavior: 'smooth',
    });
  }, [disabled, orientation, scrollTargetRef, scrollingRef, viewportRef]);

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

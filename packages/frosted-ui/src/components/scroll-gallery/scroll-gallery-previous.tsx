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

  const { canScrollPrev, orientation, viewportRef, scrollTargetRef } =
    useScrollGalleryContext();

  const disabled = !canScrollPrev;

  const handleClick = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || disabled) return;

    const isHorizontal = orientation === 'horizontal';
    const pageSize = isHorizontal ? viewport.clientWidth : viewport.clientHeight;

    // Clear any lingering "current scroll target" from a prior marker click.
    // Without this, the first scroll event would see scrollTargetRef !== null
    // and suppress computeActiveIndex, leaving markers stuck on the old target.
    scrollTargetRef.current = null;

    // Unlike marker clicks, button scrolls do NOT set scrollingRef. Buttons
    // don't have a specific target — they scroll by a page and "discover"
    // where they land. Letting computeActiveIndex run on every scroll event
    // gives real-time marker transitions during the animation, matching the
    // trackpad scroll experience.
    viewport.scrollBy({
      [isHorizontal ? 'left' : 'top']: -pageSize * PAGE_SCROLL_FACTOR,
      behavior: 'smooth',
    });
  }, [disabled, orientation, scrollTargetRef, viewportRef]);

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

'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollButton } from './use-scroll-button';

interface ScrollGalleryNextState extends Record<string, unknown> {
  disabled: boolean;
}

interface ScrollGalleryNextProps
  extends useRender.ComponentProps<'button', ScrollGalleryNextState> {
  /**
   * How many items to scroll by. When set to a number, the button scrolls
   * to bring the item N positions after the current active item into view.
   * When omitted, scrolls by ~85% of the viewport ("one page") per the
   * CSS Overflow 5 §3.2 spec.
   */
  step?: number;
}

const ScrollGalleryNext = React.forwardRef<
  HTMLButtonElement,
  ScrollGalleryNextProps
>(function ScrollGalleryNext(props, forwardedRef) {
  const { render, step, ...elementProps } = props;

  const { disabled, handleClick } = useScrollButton({ direction: 'next', step });

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
        className: 'fui-ScrollGalleryNext',
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

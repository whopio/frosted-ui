'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryIndicatorGroupState extends Record<string, unknown> {
  orientation: 'horizontal' | 'vertical';
}

interface ScrollGalleryIndicatorGroupProps
  extends useRender.ComponentProps<'div', ScrollGalleryIndicatorGroupState> {}

const ScrollGalleryIndicatorGroup = React.forwardRef<
  HTMLDivElement,
  ScrollGalleryIndicatorGroupProps
>(function ScrollGalleryIndicatorGroup(props, forwardedRef) {
  const { render, ...elementProps } = props;
  const { orientation } = useScrollGalleryContext();

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const group = event.currentTarget;
      const indicators = Array.from(
        group.querySelectorAll<HTMLElement>('[role="tab"]'),
      );

      if (indicators.length === 0) return;

      const currentIndex = indicators.findIndex(
        (el) => el === document.activeElement,
      );
      if (currentIndex === -1) return;

      const isHorizontal = orientation === 'horizontal';
      let nextIndex: number | null = null;

      switch (event.key) {
        case isHorizontal ? 'ArrowRight' : 'ArrowDown':
          nextIndex = (currentIndex + 1) % indicators.length;
          break;
        case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
          nextIndex =
            (currentIndex - 1 + indicators.length) % indicators.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = indicators.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      indicators[nextIndex].focus();
    },
    [orientation],
  );

  const state = React.useMemo<ScrollGalleryIndicatorGroupState>(
    () => ({ orientation }),
    [orientation],
  );

  return useRender({
    render,
    ref: forwardedRef,
    state,
    props: mergeProps<'div'>(
      {
        role: 'tablist',
        'data-orientation': orientation,
        onKeyDown: handleKeyDown,
      } as React.ComponentPropsWithRef<'div'>,
      elementProps as React.ComponentPropsWithRef<'div'>,
    ),
    defaultTagName: 'div',
  });
});

ScrollGalleryIndicatorGroup.displayName = 'ScrollGalleryIndicatorGroup';

export { ScrollGalleryIndicatorGroup };
export type {
  ScrollGalleryIndicatorGroupProps,
  ScrollGalleryIndicatorGroupState,
};

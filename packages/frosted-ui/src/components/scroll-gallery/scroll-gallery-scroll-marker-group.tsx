'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryScrollMarkerGroupState extends Record<string, unknown> {
  orientation: 'horizontal' | 'vertical';
}

interface ScrollGalleryScrollMarkerGroupProps
  extends useRender.ComponentProps<'div', ScrollGalleryScrollMarkerGroupState> {}

const ScrollGalleryScrollMarkerGroup = React.forwardRef<
  HTMLDivElement,
  ScrollGalleryScrollMarkerGroupProps
>(function ScrollGalleryScrollMarkerGroup(props, forwardedRef) {
  const { render, ...elementProps } = props;
  const { orientation } = useScrollGalleryContext();

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const group = event.currentTarget;
      const markers = Array.from(
        group.querySelectorAll<HTMLElement>('[role="tab"]'),
      );

      if (markers.length === 0) return;

      const currentIndex = markers.findIndex(
        (el) => el === document.activeElement,
      );
      if (currentIndex === -1) return;

      const isHorizontal = orientation === 'horizontal';
      let nextIndex: number | null = null;

      switch (event.key) {
        case isHorizontal ? 'ArrowRight' : 'ArrowDown':
          nextIndex = (currentIndex + 1) % markers.length;
          break;
        case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
          nextIndex =
            (currentIndex - 1 + markers.length) % markers.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = markers.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      markers[nextIndex].focus();
    },
    [orientation],
  );

  const state = React.useMemo<ScrollGalleryScrollMarkerGroupState>(
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

ScrollGalleryScrollMarkerGroup.displayName = 'ScrollGalleryScrollMarkerGroup';

export { ScrollGalleryScrollMarkerGroup };
export type {
  ScrollGalleryScrollMarkerGroupProps,
  ScrollGalleryScrollMarkerGroupState,
};

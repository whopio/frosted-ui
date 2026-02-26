'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryItemState extends Record<string, unknown> {
  active: boolean;
  index: number;
}

interface ScrollGalleryItemProps
  extends useRender.ComponentProps<'div', ScrollGalleryItemState> {}

/**
 * Individual gallery item. Self-registers with the Root context on mount.
 *
 * Deliberately does NOT set `role="group"` or `aria-roledescription="slide"`.
 * The CSS Overflow 5 spec treats scroll items as plain elements — they have
 * no special semantic role. Consumers can add ARIA attributes via props if
 * their specific use case requires it.
 *
 * Provides `data-active` and `data-in-view` attributes for consumer styling.
 * The `data-in-view` attribute is managed by the Viewport's IntersectionObserver.
 */
const ScrollGalleryItem = React.forwardRef<
  HTMLDivElement,
  ScrollGalleryItemProps
>(function ScrollGalleryItem(props, forwardedRef) {
  const { render, ...elementProps } = props;

  const { activeIndex, registerItem, getItemElements } =
    useScrollGalleryContext();

  const internalRef = React.useRef<HTMLDivElement | null>(null);

  const mergedRefCallback = React.useCallback(
    (node: HTMLDivElement | null) => {
      internalRef.current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef],
  );

  React.useEffect(() => {
    const element = internalRef.current;
    if (!element) return;
    return registerItem(element);
  }, [registerItem]);

  const index = React.useMemo(() => {
    const element = internalRef.current;
    if (!element) return -1;
    return getItemElements().indexOf(element);
  }, [getItemElements, activeIndex]);

  const isActive = index === activeIndex;

  const state = React.useMemo<ScrollGalleryItemState>(
    () => ({ active: isActive, index }),
    [isActive, index],
  );

  return useRender({
    render,
    ref: mergedRefCallback,
    state,
    props: mergeProps<'div'>(
      {
        ...(isActive ? { 'data-active': '' } : undefined),
      } as React.ComponentPropsWithRef<'div'>,
      elementProps as React.ComponentPropsWithRef<'div'>,
    ),
    defaultTagName: 'div',
  });
});

ScrollGalleryItem.displayName = 'ScrollGalleryItem';

export { ScrollGalleryItem };
export type { ScrollGalleryItemProps, ScrollGalleryItemState };

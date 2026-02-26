'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryScrollMarkerGroupState extends Record<string, unknown> {
  orientation: 'horizontal' | 'vertical';
}

interface ScrollGalleryScrollMarkerGroupProps
  extends useRender.ComponentProps<'div', ScrollGalleryScrollMarkerGroupState> {}

/**
 * Container for ScrollMarker buttons, named after the CSS `::scroll-marker-group`
 * pseudo-element from CSS Overflow Level 5 §2.
 *
 * Renders with role="tablist" — each child ScrollMarker has role="tab".
 * This pairing follows the WAI-ARIA tablist pattern for accessibility.
 *
 * We deliberately omit aria-roledescription="carousel" because this component
 * is not a carousel — it's a generic scrollable container with navigation.
 * The CSS Overflow 5 spec does not prescribe any special ARIA role for
 * scroll marker groups either; we chose tablist as the closest semantic
 * match for a set of mutually-exclusive navigation indicators.
 */
const ScrollGalleryScrollMarkerGroup = React.forwardRef<
  HTMLDivElement,
  ScrollGalleryScrollMarkerGroupProps
>(function ScrollGalleryScrollMarkerGroup(props, forwardedRef) {
  const { render, ...elementProps } = props;
  const { orientation } = useScrollGalleryContext();

  /**
   * Keyboard navigation follows the WAI-ARIA Tabs pattern:
   *   - Arrow keys move focus between markers one at a time (roving tabindex)
   *   - Home/End jump to first/last marker
   *   - Orientation-aware: horizontal uses Left/Right, vertical uses Up/Down
   *
   * Note: arrow keys on the *viewport* use native browser scroll (not handled
   * here). This separation matches the CSS spec: scroll buttons scroll by
   * "one page", arrow keys on the content area scroll natively, and markers
   * navigate one-by-one.
   */
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

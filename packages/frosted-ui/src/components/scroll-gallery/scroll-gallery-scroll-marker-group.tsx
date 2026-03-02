'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useScrollGalleryContext } from './scroll-gallery-context';

interface ScrollGalleryScrollMarkerGroupState extends Record<string, unknown> {
  orientation: 'horizontal' | 'vertical';
  focusWithin: boolean;
}

interface ScrollGalleryScrollMarkerGroupProps
  extends useRender.ComponentProps<'div', ScrollGalleryScrollMarkerGroupState> {}

const markerGroupStateAttributesMapping = {
  orientation: () => null,
  focusWithin: (value: unknown) =>
    value ? { 'data-focus-within': '' } : null,
};

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
  const { loop, orientation } = useScrollGalleryContext();

  const [focusWithin, setFocusWithin] = React.useState(false);

  /**
   * Keyboard navigation uses automatic activation (WAI-ARIA Tabs pattern):
   *   - Arrow keys move focus AND activate the marker (scroll to its item)
   *   - Home/End jump to first/last marker and activate
   *   - Orientation-aware: horizontal uses Left/Right, vertical uses Up/Down
   *
   * Automatic activation matches native CSS `::scroll-marker` behavior —
   * navigating between markers with arrow keys immediately scrolls to the
   * corresponding item, without requiring an additional Enter/Space press.
   *
   * Arrow keys on the viewport mirror this same step-by-one behavior for
   * consistency (handled in ScrollGalleryViewport). The viewport additionally
   * supports Page Up/Down for page-based scrolling (~85% of scrollport).
   */
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const group = event.currentTarget;
      const markers = Array.from(
        group.querySelectorAll<HTMLElement>('[role="tab"][data-index]'),
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
          if (loop) {
            nextIndex = (currentIndex + 1) % markers.length;
          } else {
            nextIndex = Math.min(currentIndex + 1, markers.length - 1);
          }
          break;
        case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
          if (loop) {
            nextIndex = (currentIndex - 1 + markers.length) % markers.length;
          } else {
            nextIndex = Math.max(currentIndex - 1, 0);
          }
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

      // If clamped to the same index, nothing to do.
      if (nextIndex === currentIndex) return;

      event.preventDefault();
      markers[nextIndex].focus();
      markers[nextIndex].click();
    },
    [loop, orientation],
  );

  const state = React.useMemo<ScrollGalleryScrollMarkerGroupState>(
    () => ({ orientation, focusWithin }),
    [orientation, focusWithin],
  );

  return useRender({
    render,
    ref: forwardedRef,
    state,
    stateAttributesMapping: markerGroupStateAttributesMapping,
    props: mergeProps<'div'>(
      {
        className: 'fui-ScrollGalleryScrollMarkerGroup',
        role: 'tablist',
        'aria-orientation': orientation,
        'data-orientation': orientation,
        onKeyDown: handleKeyDown,
        onFocus: () => setFocusWithin(true),
        onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setFocusWithin(false);
          }
        },
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

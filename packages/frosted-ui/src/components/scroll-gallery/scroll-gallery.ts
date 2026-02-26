/**
 * ScrollGallery — a headless, unstyled compound component for scrollable
 * navigation galleries. Inspired by the CSS Overflow Level 5 spec's
 * `::scroll-button()`, `::scroll-marker`, and `::scroll-marker-group`
 * pseudo-elements, implemented as a React primitive.
 *
 * Architecture follows Base UI patterns: compound components communicating
 * via React Context, `useRender` for flexible element rendering, and
 * `mergeProps` for combining consumer and internal props.
 *
 * Key design decisions:
 *
 * - **No scroll-snap enforcement**: The primitive uses native `overflow: auto`
 *   and `scrollBy`. Consumers optionally add `scroll-snap-type` via CSS.
 *
 * - **No ARIA assumptions**: No hardcoded `aria-label`, `aria-roledescription`,
 *   or `aria-live` — the consumer provides these in their language.
 *
 * - **Page-based scroll buttons**: Previous/Next scroll by ~85% of the
 *   viewport (CSS Overflow 5 §3.2), not by one item.
 *
 * - **CSS spec active marker algorithm**: Active marker is computed using
 *   the "Calculating the Active Scroll Marker" algorithm from CSS Overflow 5,
 *   with position redistribution for items at scroll boundaries and a
 *   "nearest" approach so the marker transitions at the midpoint.
 *
 * - **"Current scroll target" concept**: When a marker is clicked, its index
 *   is locked as the active marker through the smooth scroll animation
 *   (CSS Overflow 5 §2.1). User input (wheel/touch/pointer) cancels the lock.
 *
 * Sub-components:
 *   Root           — Context provider, uncontrolled active index, imperative scrollTo
 *   Viewport       — Scrollable container, scroll event orchestration
 *   Item           — Individual gallery item, self-registering
 *   Previous/Next  — Scroll buttons (page-based, auto-disable at boundaries)
 *   ScrollMarkerGroup — Container for markers (role="tablist")
 *   ScrollMarker   — Individual marker button (role="tab")
 */
export { ScrollGalleryRoot as Root } from './scroll-gallery-root';
export { ScrollGalleryViewport as Viewport } from './scroll-gallery-viewport';
export { ScrollGalleryItem as Item } from './scroll-gallery-item';
export { ScrollGalleryPrevious as Previous } from './scroll-gallery-previous';
export { ScrollGalleryNext as Next } from './scroll-gallery-next';
export { ScrollGalleryScrollMarkerGroup as ScrollMarkerGroup } from './scroll-gallery-scroll-marker-group';
export { ScrollGalleryScrollMarker as ScrollMarker } from './scroll-gallery-scroll-marker';

export type { ScrollGalleryRootProps, ScrollGalleryRootState, ScrollGalleryRootRef } from './scroll-gallery-root';
export type { ScrollGalleryViewportProps, ScrollGalleryViewportState } from './scroll-gallery-viewport';
export type { ScrollGalleryItemProps, ScrollGalleryItemState } from './scroll-gallery-item';
export type { ScrollGalleryPreviousProps, ScrollGalleryPreviousState } from './scroll-gallery-previous';
export type { ScrollGalleryNextProps, ScrollGalleryNextState } from './scroll-gallery-next';
export type {
  ScrollGalleryScrollMarkerGroupProps,
  ScrollGalleryScrollMarkerGroupState,
} from './scroll-gallery-scroll-marker-group';
export type { ScrollGalleryScrollMarkerProps, ScrollGalleryScrollMarkerState } from './scroll-gallery-scroll-marker';

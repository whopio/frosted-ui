/**
 * Lightbox — a headless, unstyled compound component for modal media viewing.
 *
 * Combines Dialog semantics (modal overlay, focus trap, Escape to close,
 * backdrop) with gallery navigation (prev/next, thumbnails, counter).
 *
 * Key design decisions:
 *
 * - **Swap-based rendering**: Only the active item (plus `preload` adjacent
 *   items) is rendered in the DOM. Unlike ScrollGallery which uses native
 *   scroll, this keeps memory usage low for large image collections.
 *
 * - **Multiple triggers**: Each Trigger accepts an `index` prop, so a grid
 *   of thumbnails can each open the lightbox at the corresponding item.
 *
 * - **No ARIA assumptions**: The consumer provides aria-label, captions,
 *   and alt text in their language. The primitive handles structural ARIA
 *   (dialog role, live regions, tablist pattern for thumbnails).
 *
 * - **CSS-driven transitions**: State is exposed via data attributes
 *   (data-active, data-direction, data-disabled, data-open, etc.)
 *   so transitions are fully controlled by the consumer's CSS.
 *
 * Sub-components:
 *   Root            — State provider (open, activeIndex, controlled/uncontrolled)
 *   Trigger         — Opens lightbox at a specific item index
 *   Content         — Portal + Backdrop + focus trap + keyboard navigation
 *   Close           — Closes the lightbox
 *   ItemGroup       — Container for items, manages swap rendering + preload
 *   Item            — Individual media item with lazy-load support
 *   Previous/Next   — Navigation buttons (auto-disable at boundaries)
 *   Counter         — "1 / 12" display with aria-live
 *   Caption         — Per-item caption from Item's caption prop
 *   ThumbnailGroup  — Tablist container for thumbnails
 *   Thumbnail       — Tab button navigating to a specific item
 */
export { LightboxRoot as Root } from './lightbox-root';
export { LightboxTrigger as Trigger } from './lightbox-trigger';
export { LightboxContent as Content } from './lightbox-content';
export { LightboxClose as Close } from './lightbox-close';
export { LightboxItemGroup as ItemGroup } from './lightbox-item-group';
export { LightboxItem as Item } from './lightbox-item';
export { LightboxPrevious as Previous } from './lightbox-previous';
export { LightboxNext as Next } from './lightbox-next';
export { LightboxCounter as Counter } from './lightbox-counter';
export { LightboxCaption as Caption } from './lightbox-caption';
export { LightboxThumbnailGroup as ThumbnailGroup } from './lightbox-thumbnail-group';
export { LightboxThumbnail as Thumbnail } from './lightbox-thumbnail';

export type { LightboxRootProps, LightboxRootRef } from './lightbox-root';
export type { LightboxTriggerProps, LightboxTriggerState } from './lightbox-trigger';
export type { LightboxContentProps } from './lightbox-content';
export type { LightboxCloseProps, LightboxCloseState } from './lightbox-close';
export type { LightboxItemGroupProps, LightboxItemGroupState } from './lightbox-item-group';
export type { LightboxItemProps, LightboxItemState } from './lightbox-item';
export type { LightboxPreviousProps, LightboxPreviousState } from './lightbox-previous';
export type { LightboxNextProps, LightboxNextState } from './lightbox-next';
export type { LightboxCounterProps, LightboxCounterState } from './lightbox-counter';
export type { LightboxCaptionProps, LightboxCaptionState } from './lightbox-caption';
export type { LightboxThumbnailGroupProps, LightboxThumbnailGroupState } from './lightbox-thumbnail-group';
export type { LightboxThumbnailProps, LightboxThumbnailState } from './lightbox-thumbnail';
export type { NavigationSource } from './lightbox-context';

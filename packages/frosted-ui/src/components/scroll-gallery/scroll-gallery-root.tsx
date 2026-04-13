'use client';

import * as React from 'react';

import {
  ScrollGalleryContext,
  getScrollBehavior,
  getScrollDistance,
  type ChangeSource,
  type ScrollGalleryContextValue,
} from './scroll-gallery-context';

interface ScrollGalleryRootProps {
  children?: React.ReactNode;
  /**
   * The initial active item index (uncontrolled mode).
   * @default 0
   */
  defaultValue?: number;
  /**
   * The active item index (controlled mode). When provided, the component
   * is fully controlled — external changes scroll the viewport to the
   * corresponding item. Use together with `onValueChange` to keep state
   * in sync with user-driven scroll.
   */
  value?: number;
  /**
   * When true, navigation wraps around at boundaries:
   * - Previous/Next buttons don't disable and jump to the other end
   * - Marker group arrow keys wrap instead of clamping
   * @default false
   */
  loop?: boolean;
  /**
   * Callback fired when the active item changes (from scrolling or
   * marker clicks). Receives the new index and a `source` field
   * indicating what triggered the change.
   */
  onValueChange?: (
    value: number,
    metadata: { source: ChangeSource },
  ) => void;
  /**
   * The scroll orientation of the gallery.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Imperative handle exposed via `ref` on ScrollGallery.Root.
 *
 * Provides `scrollTo(index)` for programmatic navigation. In uncontrolled
 * mode this is the primary way to navigate programmatically. In controlled
 * mode (`value` prop), simply update the value — the component scrolls
 * automatically.
 */
interface ScrollGalleryRootRef {
  scrollTo: (index: number, behavior?: ScrollBehavior) => void;
}

const ScrollGalleryRoot = React.forwardRef<
  ScrollGalleryRootRef,
  ScrollGalleryRootProps
>(function ScrollGalleryRoot(props, forwardedRef) {
  const {
    children,
    defaultValue = 0,
    value: valueProp,
    loop = false,
    onValueChange,
    orientation = 'horizontal',
  } = props;

  const isControlled = valueProp !== undefined;
  const [internalIndex, setInternalIndex] = React.useState(defaultValue);
  const activeIndex = isControlled ? valueProp : internalIndex;

  const onValueChangeRef = React.useRef(onValueChange);
  React.useEffect(() => {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);

  const setActiveIndex = React.useCallback(
    (index: number, source: ChangeSource) => {
      if (!isControlled) {
        setInternalIndex(index);
      }
      onValueChangeRef.current?.(index, { source });
    },
    [isControlled],
  );

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);
  const viewportRef = React.useRef<HTMLElement | null>(null);
  const itemElementsRef = React.useRef<Set<HTMLElement>>(new Set());
  const [itemsVersion, setItemsVersion] = React.useState(0);

  // CSS Overflow 5 §2.1 "current scroll target" — see context.tsx for details.
  const scrollTargetRef = React.useRef<number | null>(null);
  const scrollingRef = React.useRef(false);

  // Cached sorted item list, invalidated when itemsVersion changes.
  const sortedItemsRef = React.useRef<HTMLElement[]>([]);
  const sortedItemsVersionRef = React.useRef(-1);
  const itemsVersionRef = React.useRef(itemsVersion);
  itemsVersionRef.current = itemsVersion;

  /**
   * Returns registered item elements sorted in DOM order. Uses
   * compareDocumentPosition so the order is always correct regardless
   * of React render order or dynamic additions/removals.
   *
   * The result is cached and only re-sorted when itemsVersion changes
   * (i.e., items are added or removed), avoiding repeated O(N log N)
   * sorts on every scroll event.
   */
  const getItemElements = React.useCallback((): HTMLElement[] => {
    if (sortedItemsVersionRef.current !== itemsVersionRef.current) {
      const elements = Array.from(itemElementsRef.current);
      elements.sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
      );
      sortedItemsRef.current = elements;
      sortedItemsVersionRef.current = itemsVersionRef.current;
    }
    return sortedItemsRef.current;
  }, []);

  /**
   * Items self-register on mount and unregister on unmount, bumping
   * `itemsVersion` each time. The viewport watches `itemsVersion` to
   * re-setup its IntersectionObserver and boundary detection, ensuring
   * dynamic item changes are always reflected.
   */
  const registerItem = React.useCallback((element: HTMLElement) => {
    itemElementsRef.current.add(element);
    setItemsVersion((v) => v + 1);
    return () => {
      itemElementsRef.current.delete(element);
      setItemsVersion((v) => v + 1);
    };
  }, []);

  const itemCount = itemElementsRef.current.size;

  /**
   * Shared "locked scroll to item" primitive. Scrolls the viewport to
   * bring the item at the given index into view while locking the active
   * marker to that index through the smooth scroll animation.
   *
   * Used by: marker clicks, viewport arrow/Home/End keys, scroll button
   * loop-wrap, and the public imperative `scrollTo` API. Centralised here
   * to eliminate duplication of the scrollTargetRef + scrollingRef +
   * scrollBy + setActiveIndex pattern.
   */
  const scrollToItem = React.useCallback(
    (index: number, behavior?: ScrollBehavior) => {
      behavior = behavior ?? getScrollBehavior();
      const viewport = viewportRef.current;
      if (!viewport) return;

      const items = getItemElements();
      const target = items[index];
      if (!target) return;

      const isHorizontal = orientation === 'horizontal';
      const distance = getScrollDistance(target, viewport, orientation);

      scrollTargetRef.current = index;
      scrollingRef.current = true;

      viewport.scrollBy({
        [isHorizontal ? 'left' : 'top']: distance,
        behavior,
      });

      setActiveIndex(index, 'indicator');
    },
    [getItemElements, orientation, setActiveIndex],
  );

  React.useImperativeHandle(forwardedRef, () => ({ scrollTo: scrollToItem }), [scrollToItem]);

  // Scroll to the initial item on mount when defaultValue/value is non-zero.
  const initialValueRef = React.useRef(isControlled ? valueProp : defaultValue);
  React.useLayoutEffect(() => {
    if (initialValueRef.current !== 0) {
      scrollToItem(initialValueRef.current, 'instant');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // In controlled mode, scroll the viewport when the external value changes.
  const prevValueRef = React.useRef(valueProp);
  React.useEffect(() => {
    if (!isControlled) return;
    if (prevValueRef.current === valueProp) return;
    prevValueRef.current = valueProp;
    scrollToItem(valueProp, getScrollBehavior());
  }, [isControlled, valueProp, scrollToItem]);

  const contextValue = React.useMemo<ScrollGalleryContextValue>(
    () => ({
      activeIndex,
      setActiveIndex,
      orientation,
      loop,
      canScrollPrev,
      canScrollNext,
      setCanScrollPrev,
      setCanScrollNext,
      registerItem,
      viewportRef,
      getItemElements,
      itemCount,
      itemsVersion,
      scrollTargetRef,
      scrollingRef,
      scrollToItem,
    }),
    [
      activeIndex,
      setActiveIndex,
      orientation,
      loop,
      canScrollPrev,
      canScrollNext,
      registerItem,
      getItemElements,
      itemCount,
      scrollToItem,
      itemsVersion,
    ],
  );

  return (
    <ScrollGalleryContext.Provider value={contextValue}>
      {children}
    </ScrollGalleryContext.Provider>
  );
});

ScrollGalleryRoot.displayName = 'ScrollGalleryRoot';

export { ScrollGalleryRoot };
export type { ScrollGalleryRootProps, ScrollGalleryRootRef };

'use client';

import * as React from 'react';

import {
  ScrollGalleryContext,
  type ChangeSource,
  type ScrollGalleryContextValue,
} from './scroll-gallery-context';

interface ScrollGalleryRootProps {
  children?: React.ReactNode;
  /**
   * The initial active item index.
   * @default 0
   */
  defaultValue?: number;
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
 * Provides `scrollTo(index)` for programmatic navigation without needing
 * a controlled value prop — the DOM scroll position is the source of truth,
 * and this method simply scrolls to bring the target item into view.
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
    onValueChange,
    orientation = 'horizontal',
  } = props;

  const [activeIndex, setActiveIndexState] = React.useState(defaultValue);

  const onValueChangeRef = React.useRef(onValueChange);
  React.useEffect(() => {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);

  const setActiveIndex = React.useCallback(
    (index: number, source: ChangeSource) => {
      setActiveIndexState(index);
      onValueChangeRef.current?.(index, { source });
    },
    [],
  );

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);
  const viewportRef = React.useRef<HTMLElement | null>(null);
  const itemElementsRef = React.useRef<Set<HTMLElement>>(new Set());
  const [itemsVersion, setItemsVersion] = React.useState(0);

  // CSS Overflow 5 §2.1 "current scroll target" — see context.tsx for details.
  const scrollTargetRef = React.useRef<number | null>(null);
  const scrollingRef = React.useRef(false);

  /**
   * Returns registered item elements sorted in DOM order. Uses
   * compareDocumentPosition so the order is always correct regardless
   * of React render order or dynamic additions/removals.
   */
  const getItemElements = React.useCallback((): HTMLElement[] => {
    const elements = Array.from(itemElementsRef.current);
    elements.sort((a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
    );
    return elements;
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
   * Imperative scrollTo: scrolls the viewport to bring the item at the
   * given index into view. Behaves like a marker click — immediately
   * sets the active index and locks it through the smooth scroll.
   *
   * This is the recommended way to programmatically navigate. Unlike a
   * controlled `value` prop, it doesn't create a feedback loop — the DOM
   * scroll position remains the single source of truth.
   */
  const scrollTo = React.useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const items = getItemElements();
      const target = items[index];
      if (!target) return;

      const isHorizontal = orientation === 'horizontal';
      const targetRect = target.getBoundingClientRect();
      const viewportRect = viewport.getBoundingClientRect();

      const distance = isHorizontal
        ? targetRect.left - viewportRect.left
        : targetRect.top - viewportRect.top;

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

  React.useImperativeHandle(forwardedRef, () => ({ scrollTo }), [scrollTo]);

  // Scroll to the initial item on mount when defaultValue is non-zero.
  // Uses useLayoutEffect so the scroll happens before the browser paints,
  // avoiding a single-frame flash at scroll position 0. This works because
  // items register in useLayoutEffect too — children's layout effects fire
  // before the parent's, so items are available by the time this runs.
  const defaultValueRef = React.useRef(defaultValue);
  React.useLayoutEffect(() => {
    if (defaultValueRef.current !== 0) {
      scrollTo(defaultValueRef.current, 'instant');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = React.useMemo<ScrollGalleryContextValue>(
    () => ({
      activeIndex,
      setActiveIndex,
      orientation,
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
    }),
    [
      activeIndex,
      setActiveIndex,
      orientation,
      canScrollPrev,
      canScrollNext,
      registerItem,
      getItemElements,
      itemCount,
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

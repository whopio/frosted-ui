'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import {
  ScrollGalleryContext,
  type ChangeSource,
  type ScrollGalleryContextValue,
} from './scroll-gallery-context';

interface ScrollGalleryRootState extends Record<string, unknown> {
  activeIndex: number;
  orientation: 'horizontal' | 'vertical';
}

interface ScrollGalleryRootProps
  extends useRender.ComponentProps<'div', ScrollGalleryRootState> {
  /**
   * The controlled active item index.
   */
  value?: number;
  /**
   * The default active item index (uncontrolled).
   * @default 0
   */
  defaultValue?: number;
  /**
   * Callback fired when the active item changes.
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

const ScrollGalleryRoot = React.forwardRef<
  HTMLDivElement,
  ScrollGalleryRootProps
>(function ScrollGalleryRoot(props, forwardedRef) {
  const {
    render,
    value: valueProp,
    defaultValue = 0,
    onValueChange,
    orientation = 'horizontal',
    ...elementProps
  } = props;

  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const activeIndex = isControlled ? valueProp : uncontrolledValue;

  const onValueChangeRef = React.useRef(onValueChange);
  React.useEffect(() => {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);

  const setActiveIndex = React.useCallback(
    (index: number, source: ChangeSource) => {
      if (!isControlled) {
        setUncontrolledValue(index);
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
  const scrollTargetRef = React.useRef<number | null>(null);
  const scrollingRef = React.useRef(false);

  const getItemElements = React.useCallback((): HTMLElement[] => {
    const elements = Array.from(itemElementsRef.current);
    elements.sort((a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
    );
    return elements;
  }, []);

  const registerItem = React.useCallback((element: HTMLElement) => {
    itemElementsRef.current.add(element);
    setItemsVersion((v) => v + 1);
    return () => {
      itemElementsRef.current.delete(element);
      setItemsVersion((v) => v + 1);
    };
  }, []);

  const itemCount = itemElementsRef.current.size;

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

  const state = React.useMemo<ScrollGalleryRootState>(
    () => ({ activeIndex, orientation }),
    [activeIndex, orientation],
  );

  return (
    <ScrollGalleryContext.Provider value={contextValue}>
      {useRender({
        render,
        ref: forwardedRef,
        state,
        props: mergeProps<'div'>(
          { 'data-orientation': orientation } as React.ComponentPropsWithRef<'div'>,
          elementProps as React.ComponentPropsWithRef<'div'>,
        ),
        defaultTagName: 'div',
      })}
    </ScrollGalleryContext.Provider>
  );
});

ScrollGalleryRoot.displayName = 'ScrollGalleryRoot';

export { ScrollGalleryRoot };
export type { ScrollGalleryRootProps, ScrollGalleryRootState };

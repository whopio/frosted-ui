/**
 * Local implementations of hooks used by forked primitives.
 * These are copied from @rn-primitives/hooks to avoid bundler issues
 * where React resolves to null in certain configurations.
 */

import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type DependencyList,
  type ForwardedRef,
} from 'react';
import { Dimensions, type LayoutRectangle } from 'react-native';

// ============================================================================
// useCallbackRef
// ============================================================================

export function useCallbackRef<T extends (...args: never[]) => unknown>(
  callback: T | undefined
): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(((...args) => callbackRef.current?.(...args)) as T, []);
}

// ============================================================================
// useControllableState
// ============================================================================

function useUncontrolledState<T>({
  defaultProp,
  onChange,
}: {
  defaultProp?: T;
  onChange?: (value: T) => void;
}) {
  const uncontrolledState = useState<T | undefined>(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = useRef(value);
  const handleChange = useCallbackRef(onChange);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value as T);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);

  return uncontrolledState;
}

export function useControllableState<T>({
  prop,
  defaultProp,
  onChange = () => {},
}: {
  prop?: T;
  defaultProp?: T;
  onChange?: (value: T) => void;
}): [T | undefined, (value: T | ((prev: T | undefined) => T)) => void] {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange,
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);

  const setValue = useCallback(
    (nextValue: T | ((prev: T | undefined) => T)) => {
      if (isControlled) {
        const setter = nextValue as (prev: T | undefined) => T;
        const newValue = typeof nextValue === 'function' ? setter(prop) : nextValue;
        if (newValue !== prop) handleChange(newValue);
      } else {
        setUncontrolledProp(nextValue as T);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );

  return [value, setValue];
}

// ============================================================================
// useAugmentedRef - uses useImperativeHandle like the original
// ============================================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAugmentedRef<T = any>({
  ref,
  methods,
  deps = [],
}: {
  ref: ForwardedRef<T>;
  methods: Record<string, (...args: unknown[]) => unknown>;
  deps?: DependencyList;
}) {
  const augmentedRef = useRef<T>(null);

  useImperativeHandle(
    ref,
    () => {
      if (typeof augmentedRef === 'function' || !augmentedRef?.current) {
        return {} as T;
      }
      return {
        ...augmentedRef.current,
        ...methods,
      } as T;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );

  return augmentedRef;
}

// ============================================================================
// useRelativePosition
// ============================================================================

interface Insets {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface TriggerPosition {
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}

interface UseRelativePositionArgs {
  align: 'start' | 'center' | 'end';
  avoidCollisions: boolean;
  triggerPosition: TriggerPosition | null;
  contentLayout: LayoutRectangle | null;
  alignOffset: number;
  insets?: Insets;
  sideOffset: number;
  side: 'top' | 'bottom';
  disablePositioningStyle?: boolean;
}

export function useRelativePosition({
  align,
  avoidCollisions,
  triggerPosition,
  contentLayout,
  alignOffset,
  insets,
  sideOffset,
  side,
  disablePositioningStyle,
}: UseRelativePositionArgs) {
  // Get dimensions once and extract values to avoid object reference issues
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

  return useMemo(() => {
    if (disablePositioningStyle) {
      return {};
    }

    if (!triggerPosition || !contentLayout) {
      return {
        position: 'absolute' as const,
        opacity: 0,
      };
    }

    const { width: triggerWidth, height: triggerHeight, pageX, pageY } = triggerPosition;
    const { width: contentWidth, height: contentHeight } = contentLayout;

    const insetsTop = insets?.top ?? 0;
    const insetsBottom = insets?.bottom ?? 0;
    const insetsLeft = insets?.left ?? 0;
    const insetsRight = insets?.right ?? 0;

    let top = 0;
    let left = 0;

    // Calculate vertical position
    if (side === 'bottom') {
      top = pageY + triggerHeight + sideOffset;
    } else {
      top = pageY - contentHeight - sideOffset;
    }

    // Calculate horizontal position based on alignment
    if (align === 'start') {
      left = pageX + alignOffset;
    } else if (align === 'center') {
      left = pageX + triggerWidth / 2 - contentWidth / 2 + alignOffset;
    } else {
      left = pageX + triggerWidth - contentWidth + alignOffset;
    }

    // Avoid collisions
    if (avoidCollisions) {
      // Horizontal collision detection
      if (left < insetsLeft) {
        left = insetsLeft;
      } else if (left + contentWidth > screenWidth - insetsRight) {
        left = screenWidth - insetsRight - contentWidth;
      }

      // Vertical collision detection
      if (side === 'bottom' && top + contentHeight > screenHeight - insetsBottom) {
        // Flip to top
        top = pageY - contentHeight - sideOffset;
      } else if (side === 'top' && top < insetsTop) {
        // Flip to bottom
        top = pageY + triggerHeight + sideOffset;
      }
    }

    return {
      position: 'absolute' as const,
      top,
      left,
    };
  }, [
    align,
    avoidCollisions,
    triggerPosition,
    contentLayout,
    alignOffset,
    insets,
    sideOffset,
    side,
    screenWidth,
    screenHeight,
    disablePositioningStyle,
  ]);
}

'use client';

import * as React from 'react';

import { LightboxContext, type LightboxContextValue, type NavigationSource } from './lightbox-context';

interface LightboxRootProps {
  children?: React.ReactNode;
  /** Uncontrolled initial open state. @default false */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  /** Callback when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Uncontrolled initial active index. @default 0 */
  defaultValue?: number;
  /** Controlled active index. */
  value?: number;
  /** Callback when active index changes. */
  onValueChange?: (value: number, metadata: { source: NavigationSource }) => void;
  /** Wrap navigation at boundaries. @default false */
  loop?: boolean;
}

interface LightboxRootRef {
  open: (index?: number) => void;
  close: () => void;
  goTo: (index: number) => void;
}

const LightboxRoot = React.forwardRef<LightboxRootRef, LightboxRootProps>(
  function LightboxRoot(props, forwardedRef) {
    const {
      children,
      defaultOpen = false,
      open: openProp,
      onOpenChange,
      defaultValue = 0,
      value: valueProp,
      onValueChange,
      loop = false,
    } = props;

    // Open state — controlled or uncontrolled
    const isControlledOpen = openProp !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const open = isControlledOpen ? openProp : uncontrolledOpen;

    const onOpenChangeRef = React.useRef(onOpenChange);
    React.useEffect(() => {
      onOpenChangeRef.current = onOpenChange;
    }, [onOpenChange]);

    const setOpen = React.useCallback(
      (nextOpen: boolean) => {
        if (!isControlledOpen) {
          setUncontrolledOpen(nextOpen);
        }
        onOpenChangeRef.current?.(nextOpen);
      },
      [isControlledOpen],
    );

    // Active index — controlled or uncontrolled
    const isControlledValue = valueProp !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const activeIndex = isControlledValue ? valueProp : uncontrolledValue;

    const onValueChangeRef = React.useRef(onValueChange);
    React.useEffect(() => {
      onValueChangeRef.current = onValueChange;
    }, [onValueChange]);

    const setActiveIndex = React.useCallback(
      (index: number, source: NavigationSource) => {
        if (!isControlledValue) {
          setUncontrolledValue(index);
        }
        onValueChangeRef.current?.(index, { source });
      },
      [isControlledValue],
    );

    // Item count — set by ItemGroup
    const [itemCount, setItemCount] = React.useState(0);

    // Caption registry
    const [captions, setCaptions] = React.useState<Map<number, React.ReactNode>>(new Map());

    const registerCaption = React.useCallback((index: number, caption: React.ReactNode) => {
      setCaptions((prev) => {
        const next = new Map(prev);
        next.set(index, caption);
        return next;
      });
      return () => {
        setCaptions((prev) => {
          const next = new Map(prev);
          next.delete(index);
          return next;
        });
      };
    }, []);

    // Imperative handle
    React.useImperativeHandle(
      forwardedRef,
      () => ({
        open: (index?: number) => {
          if (index !== undefined) {
            setActiveIndex(index, 'trigger');
          }
          setOpen(true);
        },
        close: () => setOpen(false),
        goTo: (index: number) => setActiveIndex(index, 'button'),
      }),
      [setActiveIndex, setOpen],
    );

    const contextValue = React.useMemo<LightboxContextValue>(
      () => ({
        open,
        setOpen,
        activeIndex,
        setActiveIndex,
        itemCount,
        setItemCount,
        loop,
        captions,
        registerCaption,
      }),
      [open, setOpen, activeIndex, setActiveIndex, itemCount, setItemCount, loop, captions, registerCaption],
    );

    return <LightboxContext.Provider value={contextValue}>{children}</LightboxContext.Provider>;
  },
);

LightboxRoot.displayName = 'LightboxRoot';

export { LightboxRoot };
export type { LightboxRootProps, LightboxRootRef };

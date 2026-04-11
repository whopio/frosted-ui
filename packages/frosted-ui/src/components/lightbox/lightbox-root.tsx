'use client';

import * as React from 'react';
import { flushSync } from 'react-dom';

import {
  LightboxContext,
  VIEW_TRANSITION_NAME,
  findMorphTarget,
  supportsViewTransitions,
  type LightboxContextValue,
  type NavigationSource,
} from './lightbox-context';

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
  /**
   * Enable view transition morph animation between trigger and lightbox item.
   * When clicking a trigger, the element smoothly morphs into the fullscreen
   * lightbox item. On close, it morphs back. Requires browser support for
   * the View Transitions API. Falls back to normal fade when unsupported
   * or when prefers-reduced-motion is set.
   * @default false
   */
  viewTransition?: boolean;
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
      viewTransition = false,
    } = props;

    // Open state — controlled or uncontrolled
    const isControlledOpen = openProp !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const open = isControlledOpen ? openProp : uncontrolledOpen;

    const onOpenChangeRef = React.useRef(onOpenChange);
    React.useEffect(() => {
      onOpenChangeRef.current = onOpenChange;
    }, [onOpenChange]);

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

    // Portal mount state — stays true during exit animations so elements
    // remain in the DOM for CSS transitions (non-VT) or are removed
    // immediately inside flushSync (VT close).
    const [mounted, setMounted] = React.useState(defaultOpen);
    const exitTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    // View transition refs
    const triggerElementsRef = React.useRef<Map<number, HTMLElement>>(new Map());
    const activeItemElementRef = React.useRef<HTMLElement | null>(null);
    const openingTriggerIndexRef = React.useRef(0);
    const activeIndexRef = React.useRef(activeIndex);
    activeIndexRef.current = activeIndex;
    // Tracks the trigger element hidden during VT open so we can restore it on close
    const hiddenTriggerRef = React.useRef<HTMLElement | null>(null);

    const setOpen = React.useCallback(
      (nextOpen: boolean) => {
        if (exitTimerRef.current) {
          clearTimeout(exitTimerRef.current);
          exitTimerRef.current = null;
        }

        const useVT = viewTransition && supportsViewTransitions();

        if (useVT) {
          const docEl = document.documentElement;
          docEl.setAttribute('data-lightbox-view-transition', '');

          if (nextOpen) {
            // --- OPEN with view transition ---
            const triggerIdx = openingTriggerIndexRef.current;
            const triggerEl = triggerElementsRef.current.get(triggerIdx);
            const triggerTarget = triggerEl ? findMorphTarget(triggerEl) : null;

            if (triggerTarget) {
              triggerTarget.style.viewTransitionName = VIEW_TRANSITION_NAME;
              const fromRadius = getComputedStyle(triggerTarget).borderRadius;
              docEl.style.setProperty('--fui-morph-border-radius-from', fromRadius);
            }

            const transition = (document as any).startViewTransition(() => {
              if (triggerTarget) {
                triggerTarget.style.viewTransitionName = '';
              }
              // Hide trigger in the new-state snapshot so it doesn't show
              // through behind the dialog (which is in the top layer and
              // therefore outside the root VT capture). It stays hidden
              // for the lifetime of the dialog and is restored on close.
              if (triggerEl) {
                triggerEl.style.visibility = 'hidden';
                hiddenTriggerRef.current = triggerEl;
              }
              flushSync(() => {
                setMounted(true);
                if (!isControlledOpen) {
                  setUncontrolledOpen(true);
                }
                onOpenChangeRef.current?.(true);
              });
              const itemEl = activeItemElementRef.current;
              const itemTarget = itemEl ? findMorphTarget(itemEl) : null;
              if (itemTarget) {
                itemTarget.style.viewTransitionName = VIEW_TRANSITION_NAME;
                const toRadius = getComputedStyle(itemTarget).borderRadius;
                docEl.style.setProperty('--fui-morph-border-radius-to', toRadius);
              }
              if (itemEl) {
                itemEl.setAttribute('data-skip-fade', '');
              }
            });

            transition.finished.then(() => {
              const itemEl = activeItemElementRef.current;
              const itemTarget = itemEl ? findMorphTarget(itemEl) : null;
              if (itemTarget) {
                itemTarget.style.viewTransitionName = '';
              }
              docEl.removeAttribute('data-lightbox-view-transition');
              docEl.style.removeProperty('--fui-morph-border-radius-from');
              docEl.style.removeProperty('--fui-morph-border-radius-to');
            });
          } else {
            // --- CLOSE with view transition ---
            const itemEl = activeItemElementRef.current;
            const itemTarget = itemEl ? findMorphTarget(itemEl) : null;
            const triggerIdx = activeIndexRef.current;
            const triggerEl = triggerElementsRef.current.get(triggerIdx);
            const triggerTarget = triggerEl ? findMorphTarget(triggerEl) : null;

            if (itemTarget) {
              itemTarget.style.viewTransitionName = VIEW_TRANSITION_NAME;
              const fromRadius = getComputedStyle(itemTarget).borderRadius;
              docEl.style.setProperty('--fui-morph-border-radius-from', fromRadius);
            }
            if (triggerTarget) {
              const toRadius = getComputedStyle(triggerTarget).borderRadius;
              docEl.style.setProperty('--fui-morph-border-radius-to', toRadius);
            }

            const transition = (document as any).startViewTransition(() => {
              if (itemTarget) {
                itemTarget.style.viewTransitionName = '';
              }
              flushSync(() => {
                if (!isControlledOpen) {
                  setUncontrolledOpen(false);
                }
                onOpenChangeRef.current?.(false);
                setMounted(false);
              });
              // Restore the trigger hidden during open so the morph
              // target is visible in the new-state snapshot.
              if (hiddenTriggerRef.current) {
                hiddenTriggerRef.current.style.visibility = '';
                hiddenTriggerRef.current = null;
              }
              if (triggerTarget) {
                triggerTarget.style.viewTransitionName = VIEW_TRANSITION_NAME;
              }
            });

            transition.finished.then(() => {
              if (triggerTarget) {
                triggerTarget.style.viewTransitionName = '';
              }
              docEl.removeAttribute('data-lightbox-view-transition');
              docEl.style.removeProperty('--fui-morph-border-radius-from');
              docEl.style.removeProperty('--fui-morph-border-radius-to');
            });
          }
        } else {
          // --- No view transition ---
          if (nextOpen) {
            setMounted(true);
            if (!isControlledOpen) {
              setUncontrolledOpen(true);
            }
            onOpenChangeRef.current?.(true);
          } else {
            if (hiddenTriggerRef.current) {
              hiddenTriggerRef.current.style.visibility = '';
              hiddenTriggerRef.current = null;
            }
            if (!isControlledOpen) {
              setUncontrolledOpen(false);
            }
            onOpenChangeRef.current?.(false);
            exitTimerRef.current = setTimeout(() => setMounted(false), 350);
          }
        }
      },
      [isControlledOpen, viewTransition],
    );

    // Imperative handle
    React.useImperativeHandle(
      forwardedRef,
      () => ({
        open: (index?: number) => {
          if (index !== undefined) {
            openingTriggerIndexRef.current = index;
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
        mounted,
        activeIndex,
        setActiveIndex,
        itemCount,
        setItemCount,
        loop,
        captions,
        registerCaption,
        viewTransition,
        triggerElementsRef,
        activeItemElementRef,
        openingTriggerIndexRef,
      }),
      [open, setOpen, mounted, activeIndex, setActiveIndex, itemCount, setItemCount, loop, captions, registerCaption, viewTransition],
    );

    return <LightboxContext.Provider value={contextValue}>{children}</LightboxContext.Provider>;
  },
);

LightboxRoot.displayName = 'LightboxRoot';

export { LightboxRoot };
export type { LightboxRootProps, LightboxRootRef };

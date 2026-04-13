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

function startViewTransition(callback: () => void): { finished: Promise<void> } {
  return (document as Document & { startViewTransition: (cb: () => void) => { finished: Promise<void> } }).startViewTransition(callback);
}

interface LightboxRootProps {
  children?: React.ReactNode;
  /** Uncontrolled initial open state. @default false */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  /** Callback when open state changes (fires immediately, before animations). */
  onOpenChange?: (open: boolean) => void;
  /**
   * Callback when the open/close transition finishes. Receives the
   * final open state — `true` after the open animation completes,
   * `false` after the close animation completes.
   */
  onOpenChangeComplete?: (open: boolean) => void;
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
  /**
   * Scroll the active trigger element into the viewport so close
   * animations land on-screen instead of animating off-viewport.
   *
   * - `null` (default) — no automatic scrolling
   * - `{ type: "onClose" }` — scroll to the active trigger just before closing
   * - `{ type: "onChange" }` — scroll to the active trigger whenever the active
   *   index changes while the lightbox is open (preemptive; trigger
   *   is always in view by the time the user closes)
   *
   * `behavior` controls the scroll animation: `"smooth"` (default) or `"instant"`.
   *
   * @default null
   */
  scrollTriggerIntoView?: null | {
    type: 'onChange' | 'onClose';
    behavior?: 'smooth' | 'instant';
  };
  /**
   * Controls which trigger receives the View Transition morph on close.
   *
   * - `'active'` (default) — morph to the trigger matching the current
   *   active index. No morph if no trigger exists for that index.
   * - `'origin'` — always morph back to the trigger that originally
   *   opened the lightbox, regardless of which item is active.
   * - `'closest'` — morph to the trigger at the active index if it
   *   exists, otherwise fall back to the nearest registered trigger.
   *
   * @default 'active'
   */
  morphTo?: 'active' | 'origin' | 'closest';
}

interface LightboxRootRef {
  open: (index?: number) => void;
  close: () => void;
  goTo: (index: number) => void;
}

function scrollTriggerEl(el: HTMLElement | undefined, behavior: ScrollBehavior = 'smooth') {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  if (!fullyVisible) {
    el.scrollIntoView({ block: 'center', behavior });
  }
}

function resolveTriggerIndex(
  activeIndex: number,
  morphTo: 'active' | 'origin' | 'closest',
  openingIndex: number,
  triggerElements: Map<number, HTMLElement>,
): number {
  if (morphTo === 'origin') return openingIndex;
  if (morphTo === 'active' || triggerElements.has(activeIndex)) return activeIndex;
  let best = -1;
  let bestDist = Infinity;
  for (const idx of triggerElements.keys()) {
    const dist = Math.abs(idx - activeIndex);
    if (dist < bestDist) {
      bestDist = dist;
      best = idx;
    }
  }
  return best >= 0 ? best : activeIndex;
}

const LightboxRoot = React.forwardRef<LightboxRootRef, LightboxRootProps>(
  function LightboxRoot(props, forwardedRef) {
    const {
      children,
      defaultOpen = false,
      open: openProp,
      onOpenChange,
      onOpenChangeComplete,
      defaultValue = 0,
      value: valueProp,
      onValueChange,
      loop = false,
      viewTransition = false,
      scrollTriggerIntoView = null,
      morphTo = 'active',
    } = props;

    // Open state — controlled or uncontrolled
    const isControlledOpen = openProp !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const open = isControlledOpen ? openProp : uncontrolledOpen;

    const onOpenChangeRef = React.useRef(onOpenChange);
    React.useEffect(() => {
      onOpenChangeRef.current = onOpenChange;
    }, [onOpenChange]);

    const onOpenChangeCompleteRef = React.useRef(onOpenChangeComplete);
    React.useEffect(() => {
      onOpenChangeCompleteRef.current = onOpenChangeComplete;
    }, [onOpenChangeComplete]);

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

    // Scroll the active trigger into view when activeIndex changes while open
    React.useEffect(() => {
      if (scrollTriggerIntoView?.type === 'onChange' && open) {
        const el = triggerElementsRef.current.get(activeIndex);
        scrollTriggerEl(el, scrollTriggerIntoView.behavior);
      }
    }, [scrollTriggerIntoView, open, activeIndex]);

    // Item registry — tracks mounted items so count can grow and shrink
    const registeredItemsRef = React.useRef(new Set<number>());
    const [itemCount, setItemCount] = React.useState(0);

    const registerItem = React.useCallback((index: number) => {
      registeredItemsRef.current.add(index);
      setItemCount(registeredItemsRef.current.size);
      return () => {
        registeredItemsRef.current.delete(index);
        setItemCount(registeredItemsRef.current.size);
      };
    }, []);

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
    const closeGenRef = React.useRef(0);

    // View transition refs
    const triggerElementsRef = React.useRef<Map<number, HTMLElement>>(new Map());
    const activeItemElementRef = React.useRef<HTMLElement | null>(null);
    const openingTriggerIndexRef = React.useRef(0);
    const dialogElementRef = React.useRef<HTMLElement | null>(null);
    const activeIndexRef = React.useRef(activeIndex);
    activeIndexRef.current = activeIndex;

    const setOpen = React.useCallback(
      (nextOpen: boolean) => {
        closeGenRef.current += 1;

        const useVT = viewTransition && supportsViewTransitions();

        if (useVT) {
          const docEl = document.documentElement;
          docEl.setAttribute('data-lightbox-view-transition', '');

          const gen = closeGenRef.current;

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

            const transition = startViewTransition(() => {
              if (triggerTarget) {
                triggerTarget.style.viewTransitionName = '';
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

            transition.finished.finally(() => {
              if (closeGenRef.current !== gen) return;
              const itemEl = activeItemElementRef.current;
              const itemTarget = itemEl ? findMorphTarget(itemEl) : null;
              if (itemTarget) {
                itemTarget.style.viewTransitionName = '';
              }
              docEl.removeAttribute('data-lightbox-view-transition');
              docEl.style.removeProperty('--fui-morph-border-radius-from');
              docEl.style.removeProperty('--fui-morph-border-radius-to');
              onOpenChangeCompleteRef.current?.(true);
            });
          } else {
            // --- CLOSE with view transition ---
            const itemEl = activeItemElementRef.current;
            const itemTarget = itemEl ? findMorphTarget(itemEl) : null;
            const triggerIdx = resolveTriggerIndex(
              activeIndexRef.current,
              morphTo,
              openingTriggerIndexRef.current,
              triggerElementsRef.current,
            );
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

            const transition = startViewTransition(() => {
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
              if (scrollTriggerIntoView) {
                scrollTriggerEl(triggerEl, 'instant');
              }
              if (triggerTarget) {
                triggerTarget.style.viewTransitionName = VIEW_TRANSITION_NAME;
              }
            });

            transition.finished.finally(() => {
              if (triggerTarget) {
                triggerTarget.style.viewTransitionName = '';
              }
              docEl.removeAttribute('data-lightbox-view-transition');
              docEl.style.removeProperty('--fui-morph-border-radius-from');
              docEl.style.removeProperty('--fui-morph-border-radius-to');
              if (closeGenRef.current === gen) {
                triggerEl?.focus({ preventScroll: true });
                onOpenChangeCompleteRef.current?.(false);
              }
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
            const gen = closeGenRef.current;
            requestAnimationFrame(() => {
              if (closeGenRef.current !== gen) return;
              const el = dialogElementRef.current;
              if (el) {
                Promise.allSettled(el.getAnimations().map((a) => a.finished)).then(() => {
                  if (closeGenRef.current === gen) {
                    onOpenChangeCompleteRef.current?.(true);
                  }
                });
              } else {
                onOpenChangeCompleteRef.current?.(true);
              }
            });
          } else {
            const closeTriggerIdx = resolveTriggerIndex(
              activeIndexRef.current,
              morphTo,
              openingTriggerIndexRef.current,
              triggerElementsRef.current,
            );
            if (scrollTriggerIntoView) {
              const triggerEl = triggerElementsRef.current.get(closeTriggerIdx);
              scrollTriggerEl(triggerEl, 'instant');
            }
            if (!isControlledOpen) {
              setUncontrolledOpen(false);
            }
            onOpenChangeRef.current?.(false);
            const el = dialogElementRef.current;
            const gen = closeGenRef.current;
            const focusTarget = triggerElementsRef.current.get(closeTriggerIdx);
            if (el) {
              Promise.allSettled(el.getAnimations().map((a) => a.finished)).then(() => {
                if (closeGenRef.current === gen) {
                  setMounted(false);
                  requestAnimationFrame(() => focusTarget?.focus({ preventScroll: true }));
                  onOpenChangeCompleteRef.current?.(false);
                }
              });
            } else {
              setMounted(false);
              requestAnimationFrame(() => focusTarget?.focus({ preventScroll: true }));
              onOpenChangeCompleteRef.current?.(false);
            }
          }
        }
      },
      [isControlledOpen, viewTransition, scrollTriggerIntoView, morphTo],
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
        registerItem,
        loop,
        captions,
        registerCaption,
        viewTransition,
        morphTo,
        triggerElementsRef,
        activeItemElementRef,
        openingTriggerIndexRef,
        dialogElementRef,
      }),
      [open, setOpen, mounted, activeIndex, setActiveIndex, itemCount, registerItem, loop, captions, registerCaption, viewTransition, morphTo],
    );

    return <LightboxContext.Provider value={contextValue}>{children}</LightboxContext.Provider>;
  },
);

LightboxRoot.displayName = 'LightboxRoot';

export { LightboxRoot };
export type { LightboxRootProps, LightboxRootRef };


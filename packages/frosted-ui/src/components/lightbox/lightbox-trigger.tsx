'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

interface LightboxTriggerState extends Record<string, unknown> {
  open: boolean;
  active: boolean;
  morphTarget: boolean;
}

interface LightboxTriggerProps extends useRender.ComponentProps<'button', LightboxTriggerState> {
  /** The item index this trigger opens the lightbox at. */
  index: number;
}

const triggerStateAttributesMapping = {
  open: (value: unknown) => (value ? { 'data-open': '' } : null),
  active: (value: unknown) => (value ? { 'data-active': '' } : null),
  morphTarget: (value: unknown) => (value ? { 'data-morph-target': '' } : null),
};

/**
 * A trigger that opens the Lightbox at a specific item index.
 * Multiple triggers can exist — each opens the lightbox at its `index`.
 *
 * When `viewTransition` is enabled on Root, the trigger element is
 * used as the morph source for the view transition animation.
 */
const LightboxTrigger = React.forwardRef<HTMLButtonElement, LightboxTriggerProps>(
  function LightboxTrigger(props, forwardedRef) {
    const { render, index, ...elementProps } = props;
    const { open, activeIndex, setOpen, setActiveIndex, triggerElementsRef, openingTriggerIndexRef, morphTo } = useLightboxContext();

    const internalRef = React.useRef<HTMLButtonElement | null>(null);

    const mergedRefCallback = React.useCallback(
      (node: HTMLButtonElement | null) => {
        internalRef.current = node;
        // Register in the trigger elements map for view transitions
        if (node) {
          triggerElementsRef.current.set(index, node);
        } else {
          triggerElementsRef.current.delete(index);
        }
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef, index, triggerElementsRef],
    );

    const handleClick = React.useCallback(() => {
      openingTriggerIndexRef.current = index;
      setActiveIndex(index, 'trigger');
      setOpen(true);
    }, [index, setActiveIndex, setOpen, openingTriggerIndexRef]);

    const active = open && activeIndex === index;

    const morphTarget = React.useMemo(() => {
      if (!open) return false;
      if (morphTo === 'origin') return index === openingTriggerIndexRef.current;
      if (morphTo === 'closest') {
        if (triggerElementsRef.current.has(activeIndex)) return activeIndex === index;
        let best = -1;
        let bestDist = Infinity;
        for (const idx of triggerElementsRef.current.keys()) {
          const dist = Math.abs(idx - activeIndex);
          if (dist < bestDist) { bestDist = dist; best = idx; }
        }
        return index === best;
      }
      return active;
    }, [open, morphTo, activeIndex, index, active, openingTriggerIndexRef, triggerElementsRef]);

    const state = React.useMemo<LightboxTriggerState>(() => ({ open, active, morphTarget }), [open, active, morphTarget]);

    return useRender({
      render,
      ref: mergedRefCallback,
      state,
      stateAttributesMapping: triggerStateAttributesMapping,
      props: mergeProps<'button'>(
        {
          className: 'fui-LightboxTrigger',
          type: 'button',
          onClick: handleClick,
        } as React.ComponentPropsWithRef<'button'>,
        elementProps as React.ComponentPropsWithRef<'button'>,
      ),
      defaultTagName: 'button',
    });
  },
);

LightboxTrigger.displayName = 'LightboxTrigger';

export { LightboxTrigger };
export type { LightboxTriggerProps, LightboxTriggerState };

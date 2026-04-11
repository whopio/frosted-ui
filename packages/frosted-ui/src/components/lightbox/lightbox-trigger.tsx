'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

interface LightboxTriggerState extends Record<string, unknown> {
  open: boolean;
}

interface LightboxTriggerProps extends useRender.ComponentProps<'button', LightboxTriggerState> {
  /** The item index this trigger opens the lightbox at. */
  index: number;
}

const triggerStateAttributesMapping = {
  open: (value: unknown) => (value ? { 'data-open': '' } : null),
};

/**
 * A trigger that opens the Lightbox at a specific item index.
 * Multiple triggers can exist — each opens the lightbox at its `index`.
 */
const LightboxTrigger = React.forwardRef<HTMLButtonElement, LightboxTriggerProps>(
  function LightboxTrigger(props, forwardedRef) {
    const { render, index, ...elementProps } = props;
    const { open, setOpen, setActiveIndex } = useLightboxContext();

    const handleClick = React.useCallback(() => {
      setActiveIndex(index, 'trigger');
      setOpen(true);
    }, [index, setActiveIndex, setOpen]);

    const state = React.useMemo<LightboxTriggerState>(() => ({ open }), [open]);

    return useRender({
      render,
      ref: forwardedRef,
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

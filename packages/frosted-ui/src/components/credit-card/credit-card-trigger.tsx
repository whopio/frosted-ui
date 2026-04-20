'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { type CardFace, useCreditCardContext } from './credit-card-context';

interface CreditCardTriggerState extends Record<string, unknown> {
  face: CardFace;
}

interface CreditCardTriggerProps
  extends useRender.ComponentProps<'button', CreditCardTriggerState> {}

const stateAttributesMapping = {
  face: (value: unknown) => ({ 'data-face': String(value) }),
};

const CreditCardTrigger = React.forwardRef<HTMLButtonElement, CreditCardTriggerProps>(
  function CreditCardTrigger(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const { face, toggle } = useCreditCardContext();

    const state = React.useMemo<CreditCardTriggerState>(
      () => ({ face }),
      [face],
    );

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping,
      props: mergeProps<'button'>(
        {
          className: 'fui-CreditCardTrigger',
          type: 'button',
          'aria-expanded': face === 'back',
          onClick: toggle,
        } as React.ComponentPropsWithRef<'button'>,
        elementProps as React.ComponentPropsWithRef<'button'>,
      ),
      defaultTagName: 'button',
    });
  },
);

CreditCardTrigger.displayName = 'CreditCardTrigger';

export { CreditCardTrigger };
export type { CreditCardTriggerProps, CreditCardTriggerState };

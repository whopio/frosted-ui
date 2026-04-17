'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useCreditCardContext } from './credit-card-context';

interface CreditCardBackState extends Record<string, unknown> {
  active: boolean;
}

interface CreditCardBackProps
  extends useRender.ComponentProps<'div', CreditCardBackState> {
  /**
   * Accent color for the back face. Overrides the Root-level `color`.
   */
  color?: string;
}

const stateAttributesMapping = {
  active: (value: unknown) => (value ? { 'data-active': '' } : null),
};

const CreditCardBack = React.forwardRef<HTMLDivElement, CreditCardBackProps>(
  function CreditCardBack(props, forwardedRef) {
    const { render, color, ...elementProps } = props;
    const { face, color: contextColor } = useCreditCardContext();
    const active = face === 'back';
    const resolvedColor = color ?? contextColor;

    const state = React.useMemo<CreditCardBackState>(
      () => ({ active }),
      [active],
    );

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping,
      props: mergeProps<'div'>(
        {
          className: 'fui-CreditCardBack',
          inert: !active ? true : undefined,
          ...(resolvedColor ? { 'data-accent-color': resolvedColor } : undefined),
        } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);

CreditCardBack.displayName = 'CreditCardBack';

export { CreditCardBack };
export type { CreditCardBackProps, CreditCardBackState };

'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useCreditCardContext } from './credit-card-context';

interface CreditCardFrontState extends Record<string, unknown> {
  active: boolean;
}

interface CreditCardFrontProps
  extends useRender.ComponentProps<'div', CreditCardFrontState> {}

const stateAttributesMapping = {
  active: (value: unknown) => (value ? { 'data-active': '' } : null),
};

const CreditCardFront = React.forwardRef<HTMLDivElement, CreditCardFrontProps>(
  function CreditCardFront(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const { face } = useCreditCardContext();
    const active = face === 'front';

    const state = React.useMemo<CreditCardFrontState>(
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
          className: 'fui-CreditCardFront',
        } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);

CreditCardFront.displayName = 'CreditCardFront';

export { CreditCardFront };
export type { CreditCardFrontProps, CreditCardFrontState };

'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { type CardFace, useCreditCardContext } from './credit-card-context';

interface CreditCardContentState extends Record<string, unknown> {
  face: CardFace;
}

interface CreditCardContentProps
  extends useRender.ComponentProps<'div', CreditCardContentState> {}

const stateAttributesMapping = {
  face: (value: unknown) => ({ 'data-face': String(value) }),
};

const CreditCardContent = React.forwardRef<HTMLDivElement, CreditCardContentProps>(
  function CreditCardContent(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const { face } = useCreditCardContext();

    const state = React.useMemo<CreditCardContentState>(
      () => ({ face }),
      [face],
    );

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping,
      props: mergeProps<'div'>(
        {
          className: 'fui-CreditCardContent',
        } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);

CreditCardContent.displayName = 'CreditCardContent';

export { CreditCardContent };
export type { CreditCardContentProps, CreditCardContentState };

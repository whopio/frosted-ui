'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { CreditCardContext, type CardFace, useCreditCardContext } from './credit-card-context';

interface CreditCardContentState extends Record<string, unknown> {
  face: CardFace;
}

interface CreditCardContentProps
  extends useRender.ComponentProps<'div', CreditCardContentState> {
  /** Accent color applied to the card. Inherited by Front and Back faces. */
  color?: string;
}

const stateAttributesMapping = {
  face: (value: unknown) => ({ 'data-face': String(value) }),
};

const CreditCardContent = React.forwardRef<HTMLDivElement, CreditCardContentProps>(
  function CreditCardContent(props, forwardedRef) {
    const { render, color, ...elementProps } = props;
    const parentCtx = useCreditCardContext();

    const ctxWithColor = React.useMemo(
      () => ({ ...parentCtx, color }),
      [parentCtx, color],
    );

    const state = React.useMemo<CreditCardContentState>(
      () => ({ face: parentCtx.face }),
      [parentCtx.face],
    );

    return (
      <CreditCardContext.Provider value={ctxWithColor}>
        {useRender({
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
        })}
      </CreditCardContext.Provider>
    );
  },
);

CreditCardContent.displayName = 'CreditCardContent';

export { CreditCardContent };
export type { CreditCardContentProps, CreditCardContentState };

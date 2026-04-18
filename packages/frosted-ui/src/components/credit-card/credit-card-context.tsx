'use client';

import * as React from 'react';

type CardFace = 'front' | 'back';

interface CreditCardContextValue {
  face: CardFace;
  setFace: (face: CardFace) => void;
  toggle: () => void;
  color?: string;
  errorsContainer: HTMLDivElement | null;
  setErrorsContainer: (el: HTMLDivElement | null) => void;
  cardType: string | null;
  setCardType: (type: string | null) => void;
}

const CreditCardContext = React.createContext<CreditCardContextValue | undefined>(undefined);

function useCreditCardContext(): CreditCardContextValue {
  const context = React.useContext(CreditCardContext);
  if (context === undefined) {
    throw new Error(
      'CreditCard compound components must be used within a CreditCard.Root',
    );
  }
  return context;
}

interface UseCreditCardResult {
  face: CardFace;
  setFace: (face: CardFace) => void;
  toggle: () => void;
  cardType: string | null;
}

function useCreditCard(): UseCreditCardResult {
  const ctx = useCreditCardContext();
  return {
    face: ctx.face,
    setFace: ctx.setFace,
    toggle: ctx.toggle,
    cardType: ctx.cardType,
  };
}

export { CreditCardContext, useCreditCard, useCreditCardContext };
export type { CardFace, CreditCardContextValue, UseCreditCardResult };

'use client';

import type { CreditCardTypeCardBrandId } from 'credit-card-type/dist/types';
import * as React from 'react';

type CardFace = 'front' | 'back';

interface CreditCardContextValue {
  face: CardFace;
  setFace: (face: CardFace) => void;
  toggle: () => void;
  color?: string;
  errorsContainer: HTMLDivElement | null;
  setErrorsContainer: (el: HTMLDivElement | null) => void;
  cardType: CreditCardTypeCardBrandId | null;
  setCardType: (type: CreditCardTypeCardBrandId | null) => void;
  /** Human-readable brand name (e.g. "American Express") derived from detected cardType */
  cardNiceType: string | null;
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
  /** Detected card brand ID (e.g. "visa", "american-express") */
  cardType: CreditCardTypeCardBrandId | null;
  /** Human-readable brand name (e.g. "Visa", "American Express") */
  cardNiceType: string | null;
}

function useCreditCard(): UseCreditCardResult {
  const ctx = useCreditCardContext();
  return {
    face: ctx.face,
    setFace: ctx.setFace,
    toggle: ctx.toggle,
    cardType: ctx.cardType,
    cardNiceType: ctx.cardNiceType,
  };
}

export { CreditCardContext, useCreditCard, useCreditCardContext };
export type { CardFace, CreditCardContextValue, UseCreditCardResult };

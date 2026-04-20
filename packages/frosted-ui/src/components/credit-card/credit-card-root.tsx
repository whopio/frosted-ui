'use client';

import creditCardType from 'credit-card-type';
import type { CreditCardTypeCardBrandId } from 'credit-card-type/dist/types';
import * as React from 'react';

import { CreditCardContext, type CardFace, type CreditCardContextValue } from './credit-card-context';

interface CreditCardRootRef {
  /** Set the active face. */
  setFace: (face: CardFace) => void;
  /** Toggle between front and back. */
  flip: () => void;
}

interface CreditCardRootProps {
  children?: React.ReactNode;
  /** Imperative handle exposed via ref. */
  ref?: React.Ref<CreditCardRootRef>;
  /**
   * The active face in controlled mode.
   * Use together with `onFaceChange` to keep state in sync.
   */
  face?: CardFace;
  /**
   * The initial face in uncontrolled mode.
   * @default 'front'
   */
  defaultFace?: CardFace;
  /**
   * Callback fired when the active face changes.
   */
  onFaceChange?: (face: CardFace) => void;
}

function CreditCardRoot(props: CreditCardRootProps) {
  const {
    children,
    ref,
    face: faceProp,
    defaultFace = 'front',
    onFaceChange,
  } = props;

  const isControlled = faceProp !== undefined;
  const [internalFace, setInternalFace] = React.useState<CardFace>(defaultFace);
  const face = isControlled ? faceProp : internalFace;
  const [errorsContainer, setErrorsContainer] = React.useState<HTMLDivElement | null>(null);
  const [cardType, setCardType] = React.useState<CreditCardTypeCardBrandId | null>(null);

  const cardNiceType = React.useMemo(
    () => (cardType ? creditCardType.getTypeInfo(cardType)?.niceType ?? null : null),
    [cardType],
  );

  const onFaceChangeRef = React.useRef(onFaceChange);
  React.useEffect(() => {
    onFaceChangeRef.current = onFaceChange;
  }, [onFaceChange]);

  const setFace = React.useCallback(
    (newFace: CardFace) => {
      if (!isControlled) {
        setInternalFace(newFace);
      }
      onFaceChangeRef.current?.(newFace);
    },
    [isControlled],
  );

  const toggle = React.useCallback(() => {
    setFace(face === 'front' ? 'back' : 'front');
  }, [face, setFace]);

  React.useImperativeHandle(ref, () => ({
    setFace,
    flip: toggle,
  }), [setFace, toggle]);

  const contextValue = React.useMemo<CreditCardContextValue>(
    () => ({ face, setFace, toggle, errorsContainer, setErrorsContainer, cardType, setCardType, cardNiceType }),
    [face, setFace, toggle, errorsContainer, cardType, cardNiceType],
  );

  return (
    <CreditCardContext.Provider value={contextValue}>
      {children}
    </CreditCardContext.Provider>
  );
}

CreditCardRoot.displayName = 'CreditCardRoot';

export { CreditCardRoot };
export type { CreditCardRootProps, CreditCardRootRef };

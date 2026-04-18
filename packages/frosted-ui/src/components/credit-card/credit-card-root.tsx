'use client';

import * as React from 'react';

import { CreditCardContext, type CardFace, type CreditCardContextValue } from './credit-card-context';

interface CreditCardRootProps {
  children?: React.ReactNode;
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
  /**
   * Accent color applied to the card. Inherited by Front and Back faces
   * unless they specify their own `color` override.
   */
  color?: string;
}

const CreditCardRoot = React.forwardRef<HTMLDivElement, CreditCardRootProps>(
  function CreditCardRoot(props, forwardedRef) {
    const {
      children,
      face: faceProp,
      defaultFace = 'front',
      onFaceChange,
      color,
    } = props;

    const isControlled = faceProp !== undefined;
    const [internalFace, setInternalFace] = React.useState<CardFace>(defaultFace);
    const face = isControlled ? faceProp : internalFace;
    const [errorsContainer, setErrorsContainer] = React.useState<HTMLDivElement | null>(null);
    const [cardType, setCardType] = React.useState<string | null>(null);

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

    const contextValue = React.useMemo<CreditCardContextValue>(
      () => ({ face, setFace, toggle, color, errorsContainer, setErrorsContainer, cardType, setCardType }),
      [face, setFace, toggle, color, errorsContainer, cardType],
    );

    return (
      <CreditCardContext.Provider value={contextValue}>
        <div ref={forwardedRef} {...(color ? { 'data-accent-color': color } : undefined)}>
          {children}
        </div>
      </CreditCardContext.Provider>
    );
  },
);

CreditCardRoot.displayName = 'CreditCardRoot';

export { CreditCardRoot };
export type { CreditCardRootProps };

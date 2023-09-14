'use client';

import React from 'react';

interface ModalContext {
  onClose: (open: boolean) => void;
}

export const ModalContext = React.createContext<ModalContext | null>(null);

export function useModalContext() {
  const context = React.useContext(ModalContext);
  if (!context) throw Error('ModalContext must be provided');

  return context;
}

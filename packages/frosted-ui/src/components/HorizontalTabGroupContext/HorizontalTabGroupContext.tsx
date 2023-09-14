'use client';

import { createContext, useContext } from 'react';

export interface HorizontalTabContextState {
  previousIndex: number | undefined;
  selectedIndex: number;
}

export const HorizontalTabContext =
  createContext<HorizontalTabContextState | null>(null);

export function useHorizontalTabContext() {
  const context = useContext(HorizontalTabContext);
  if (!context) throw Error('HorizontalTabContext must be provided');

  return context;
}

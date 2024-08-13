import React from 'react';

// Avoiding SSR hydration warnings
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

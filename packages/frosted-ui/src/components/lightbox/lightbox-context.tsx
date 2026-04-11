'use client';

import * as React from 'react';

type NavigationSource = 'trigger' | 'keyboard' | 'thumbnail' | 'button';

interface LightboxContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeIndex: number;
  setActiveIndex: (index: number, source: NavigationSource) => void;
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
  loop: boolean;
  captions: Map<number, React.ReactNode>;
  registerCaption: (index: number, caption: React.ReactNode) => () => void;
}

const LightboxContext = React.createContext<LightboxContextValue | undefined>(undefined);

function useLightboxContext(): LightboxContextValue {
  const context = React.useContext(LightboxContext);
  if (context === undefined) {
    throw new Error('Lightbox compound components must be used within a Lightbox.Root');
  }
  return context;
}

/**
 * Resolves scroll/animation behavior respecting prefers-reduced-motion.
 */
function getAnimationBehavior(): 'smooth' | 'instant' {
  if (typeof window === 'undefined') return 'smooth';
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
}

export { LightboxContext, useLightboxContext, getAnimationBehavior };
export type { LightboxContextValue, NavigationSource };

import { Provider, TooltipProviderProps } from '@radix-ui/react-tooltip';
import React, { ReactNode } from 'react';

export const TooltipProvider = ({
  children,
  delayDuration = 0,
  ...props
}: { children: ReactNode } & TooltipProviderProps) => {
  return (
    <Provider delayDuration={delayDuration} {...props}>
      {children}
    </Provider>
  );
};

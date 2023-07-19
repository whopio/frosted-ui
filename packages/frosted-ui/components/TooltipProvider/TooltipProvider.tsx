import { Provider, TooltipProviderProps } from '@radix-ui/react-tooltip';
import * as React from 'react';

export const TooltipProvider = ({
  children,
  delayDuration = 0,
  ...props
}: { children: React.ReactNode } & TooltipProviderProps) => {
  return (
    <Provider delayDuration={delayDuration} {...props}>
      {children}
    </Provider>
  );
};

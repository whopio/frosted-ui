import * as React from 'react';
import { IconProps } from './types';

export const TradingView32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M21.0388 11.2469C21.0388 13.0092 19.6103 14.4378 17.848 14.4378C16.0858 14.4378 14.6573 13.0092 14.6573 11.2469C14.6573 9.4847 16.0858 8.05612 17.848 8.05612C19.6103 8.05612 21.0388 9.4847 21.0388 11.2469ZM13.1283 8.20237H0.365038L0.36499 14.584H6.74665V23.9439H13.1283V8.20237ZM24.3174 8.20237H31.635L25.0408 23.9439H17.7018L24.3174 8.20237Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default TradingView32;
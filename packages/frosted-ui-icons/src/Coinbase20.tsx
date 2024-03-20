import * as React from 'react';
import { IconProps } from './types';

export const Coinbase20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle
          cx="10"
          cy="10"
          r="8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0141 8.43919C14.3495 6.30188 12.356 4.75 10 4.75C7.10051 4.75 4.75 7.10051 4.75 10C4.75 12.8995 7.10051 15.25 10 15.25C12.356 15.25 14.3495 13.6981 15.0141 11.5608"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Coinbase20;

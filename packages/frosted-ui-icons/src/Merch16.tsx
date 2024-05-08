import * as React from 'react';
import { IconProps } from './types';

export const Merch16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8 3.75C10.0625 3.75 10.3125 1.75 10.3125 1.75L14.88 4.03376C15.1212 4.15434 15.2233 4.44442 15.1109 4.68948L14.0592 6.98153C13.9556 7.20739 13.7018 7.32287 13.4634 7.25263L12.25 6.89503V13.75C12.25 14.0261 12.0261 14.25 11.75 14.25H4.25C3.97386 14.25 3.75 14.0261 3.75 13.75V6.89503L2.53656 7.25263C2.29819 7.32287 2.0444 7.20739 1.94077 6.98153L0.889145 4.68948C0.776706 4.44442 0.878826 4.15434 1.11999 4.03376L5.68751 1.75C5.68751 1.75 5.9375 3.75 8 3.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Merch16;

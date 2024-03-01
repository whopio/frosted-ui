import * as React from 'react';
import { IconProps } from './types';

export const Megaphone32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 12V20C2.75 21.2426 3.75736 22.25 5 22.25 6.24264 22.25 7.25 21.2426 7.25 20V12C7.25 10.7574 6.24264 9.75 5 9.75 3.75736 9.75 2.75 10.7574 2.75 12zM9.75 21.75V26.5C9.75 27.4665 10.5335 28.25 11.5 28.25V28.25C12.4665 28.25 13.25 27.4665 13.25 26.5V22.75M24.75 26L7.25 20M7.25 12L24.75 6M24.75 5V26C24.75 27.2426 25.7574 28.25 27 28.25 28.2426 28.25 29.25 27.2426 29.25 26V5C29.25 3.75736 28.2426 2.75 27 2.75 25.7574 2.75 24.75 3.75736 24.75 5z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Megaphone32;
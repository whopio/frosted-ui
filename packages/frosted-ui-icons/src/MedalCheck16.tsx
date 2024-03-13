import * as React from 'react';
import { IconProps } from './types';

export const MedalCheck16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle
          cx="7"
          cy="9.216"
          r="4.034"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="16"
        />
        <path
          d="M5.68549 5.09713C5.68549 5.09713 4.73218 3.96489 4.37003 2.14123 4.21943 1.38284 3.6059.749998 2.8327.749998H1.72798C1.14808.749998.667256 1.22481.772238 1.79513 1.31325 4.73416 3.99949 6.14044 3.99949 6.14044M8.31399 5.09713C8.31399 5.09713 9.2673 3.96489 9.62945 2.14123 9.78005 1.38284 10.3936.749998 11.1668.749998H12.2715C12.8514.749998 13.3322 1.22481 13.2272 1.79513 12.6862 4.73416 9.99999 6.14044 9.99999 6.14044"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.51079 9.46396L6.33797 10.2912L8.48838 8.14065"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MedalCheck16;

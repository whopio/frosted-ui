import * as React from 'react';
import { IconProps } from './types';

export const Coinbase16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_882_550)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="7.25" />
          <path d="M12.5547 6.58783C11.9534 4.65408 10.1497 3.25 8.01813 3.25C5.39477 3.25 3.26813 5.37664 3.26813 8C3.26813 10.6233 5.39477 12.75 8.01813 12.75C10.1497 12.75 11.9534 11.3459 12.5547 9.41216" />
        </g>
        <defs>
          <clipPath id="clip0_882_550">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Coinbase16;

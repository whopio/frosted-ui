import * as React from 'react';
import { IconProps } from './types';

export const Usd12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle
          cx="6"
          cy="6"
          r="5.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.25 8.25H7.125C7.74632 8.25 8.25 7.74632 8.25 7.125V7.125C8.25 6.50368 7.74632 6 7.125 6H4.875C4.25368 6 3.75 5.49632 3.75 4.875V4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H7.75M6 8.25L6 9.25M6 2.75L6 3.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Usd12;

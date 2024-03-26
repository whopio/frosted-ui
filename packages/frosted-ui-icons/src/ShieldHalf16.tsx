import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 4.14716C13.5 3.86021 13.3164 3.60545 13.0441 3.51471L8.2108 1.90359C8.074 1.85798 7.926 1.85798 7.7892 1.90359L2.95585 3.51471C2.68362 3.60545 2.5 3.86021 2.5 4.14716V7.94153C2.5 11.2565 5.33333 12.8333 8 14.2719C10.6667 12.8333 13.5 11.2565 13.5 7.94153V4.14716Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M8 1.26938C7.8647 1.26938 7.72941 1.29105 7.59944 1.33438L2.76614 2.94548C2.2489 3.11788 1.90002 3.60193 1.90002 4.14714V7.94151C1.90002 9.79992 2.70516 11.1716 3.83703 12.2456C4.94633 13.2982 6.39434 14.0874 7.71515 14.8C7.80404 14.8479 7.90202 14.8719 8 14.8719V1.26938Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ShieldHalf16;

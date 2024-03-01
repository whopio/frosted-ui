import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkShield12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M5.43284 1.06024C4.60052 2.22887 3.16325 2.86496 2.35223 3.147C2.00356 3.26826 1.75 3.59025 1.75 3.95941V4.52632C1.75 7.35369 3.12658 10.3233 5.81161 11.2091C5.89199 11.2356 5.95594 11.25 5.99996 11.25C6.04398 11.25 6.10794 11.2356 6.18831 11.2091C8.87337 10.3233 10.25 7.35371 10.25 4.52632V3.95942C10.25 3.59026 9.99644 3.26826 9.64776 3.147C8.83672 2.86496 7.39941 2.22887 6.56709 1.06024C6.43493 0.874671 6.22779 0.75 5.99996 0.75C5.77214 0.75 5.565 0.874672 5.43284 1.06024Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.51562 6.51562L5.53906 7.5L7.51385 5.50161"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CheckmarkShield12;

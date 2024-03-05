import * as React from 'react';
import { IconProps } from './types';

export const HourGlass20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_190_46)">
          <path
            d="M8 10C8 7.83286 4.40423 8.7478 4.03117 3.00415C3.99538 2.45302 4.44772 2 5 2H15C15.5523 2 16.0046 2.45302 15.9688 3.00415C15.5958 8.7478 12 7.83286 12 10C12 12.1671 15.5958 11.2522 15.9688 16.9959C16.0046 17.547 15.5523 18 15 18H5C4.44772 18 3.99538 17.547 4.03117 16.9959C4.40423 11.2522 8 12.1671 8 10Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.45283 6.75425C8.35808 6.20771 7.36395 5.37205 7.08049 4.49131C6.99589 4.22844 7.22414 4 7.50028 4H12.4997C12.7759 4 13.0041 4.22844 12.9195 4.49131C12.636 5.37205 11.6419 6.20771 10.5472 6.75425C10.2026 6.92629 9.79744 6.9263 9.45283 6.75425Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_190_46">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default HourGlass20;

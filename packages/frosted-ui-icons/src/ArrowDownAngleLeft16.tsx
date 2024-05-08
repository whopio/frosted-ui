import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_1388)">
          <path
            d="M14 11C15.1046 11 16 10.1046 16 9V2.75C16 2.33579 15.6642 2 15.25 2C14.8358 2 14.5 2.33579 14.5 2.75V9C14.5 9.27614 14.2761 9.5 14 9.5H2.69958L4.76554 7.54472C5.06638 7.26 5.07944 6.7853 4.79472 6.48446C4.51 6.18362 4.0353 6.17056 3.73446 6.45528L0.234461 9.76778C0.0829754 9.91115 -0.00196552 10.1111 3.43323e-05 10.3197C0.00203466 10.5283 0.090795 10.7266 0.245003 10.867L3.745 14.0545C4.05125 14.3334 4.5256 14.3112 4.80451 14.005C5.08341 13.6988 5.06124 13.2244 4.755 12.9455L2.61877 11H14Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_1388">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ArrowDownAngleLeft16;

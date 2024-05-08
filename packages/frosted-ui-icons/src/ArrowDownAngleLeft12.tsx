import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_1392)">
          <path
            d="M10.3125 8C11.2445 8 12 7.24448 12 6.3125V2.25C12 1.83579 11.6642 1.5 11.25 1.5C10.8358 1.5 10.5 1.83579 10.5 2.25V6.3125C10.5 6.41605 10.4161 6.5 10.3125 6.5H2.52874L3.7245 5.27358C4.01366 4.977 4.00765 4.50216 3.71108 4.213C3.4145 3.92384 2.93966 3.92985 2.6505 4.22642L0.213 6.72643C-0.0709999 7.01771 -0.0709999 7.48229 0.213 7.77357L2.6505 10.2736C2.93966 10.5702 3.4145 10.5762 3.71108 10.287C4.00765 9.99784 4.01366 9.523 3.7245 9.22642L2.52874 8H10.3125Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_1392">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ArrowDownAngleLeft12;

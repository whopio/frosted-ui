import * as React from 'react';
import { IconProps } from './types';

export const DocumentPlus24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g
          stroke={color}
          clipPath="url(#clip0_285_66)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <g clipPath="url(#clip1_285_66)">
            <path
              d="M21 13.5C21 8.80251 21 8.70219 21 6.00065C21 4.34379 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34303 21 5.99988 21C8.51331 21 11.1327 21 13.5 21"
              strokeLinejoin="round"
            />
            <path d="M7 8H17M7 16H12M7 12H17" />
          </g>
          <path d="M20.25 23.25V20.25M20.25 17.25V20.25M20.25 20.25H17.25M20.25 20.25H23.25" />
        </g>
        <defs>
          <clipPath id="clip0_285_66">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
          <clipPath id="clip1_285_66">
            <path fill={color} transform="translate(2 2)" d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DocumentPlus24;

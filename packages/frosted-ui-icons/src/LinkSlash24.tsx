import * as React from 'react';
import { IconProps } from './types';

export const LinkSlash24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_274_54)">
          <g
            stroke={color}
            clipPath="url(#clip1_274_54)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M8.36268 15.8384L9.77689 14.4242M16.0195 8.18152L14.6053 9.59573M10.7773 6.70727L12.3687 5.11592C14.8432 2.64154 17.672 2.99474 19.4398 4.76236 21.2076 6.52999 21.5606 9.35899 19.0862 11.8334L17.4948 13.4248M13.6062 17.3136L11.9362 18.9836C9.54043 21.3794 6.63272 21.105 4.8651 19.3372 3.09747 17.5695 2.8229 14.6619 5.21865 12.2661L6.88873 10.5961M20.0195 19.8384L4.36267 4.18152" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_274_54">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
          <clipPath id="clip1_274_54">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default LinkSlash24;

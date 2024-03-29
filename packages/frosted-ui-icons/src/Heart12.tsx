import * as React from 'react';
import { IconProps } from './types';

export const Heart12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 2.78597C9.16655 -0.433825 14.5949 5.5458 6 10.375C-2.59491 5.5458 2.83344 -0.433825 6 2.78597Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Heart12;

import * as React from 'react';
import { IconProps } from './types';

export const Split20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M19.25 15.5H14.2816C13.3374 15.5 12.4687 14.9843 12.0166 14.1554L9.75 10 12.0166 5.84456C12.4687 5.01571 13.3374 4.5 14.2816 4.5H19.25M19.25 15.5L16.75 18.25M19.25 15.5L16.75 12.75M19.25 4.5L16.75 7.25M19.25 4.5L16.75 1.75M9.75003 10L6.25 10"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="3.5"
          cy="10"
          r="2.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Split20;

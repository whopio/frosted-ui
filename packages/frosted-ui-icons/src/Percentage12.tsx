import * as React from 'react';
import { IconProps } from './types';

export const Percentage12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx="3" cy="2.75" r="1.25" fill={color} />
        <circle
          cx="9"
          cy="9.25"
          r="1.25"
          transform="rotate(180 9 9.25)"
          fill={color}
        />
        <path
          d="M9.75 2.25L2.25 9.75001"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Percentage12;

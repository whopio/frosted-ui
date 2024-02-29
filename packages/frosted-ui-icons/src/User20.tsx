import * as React from 'react';
import { IconProps } from './types';

export const User20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx="10" cy="5.5" r="3.75" stroke={color} strokeWidth="1.5" />
        <path
          d="M17.25 18.25C17.25 14.6601 14.0041 11.75 10 11.75C5.99594 11.75 2.75 14.6601 2.75 18.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default User20;

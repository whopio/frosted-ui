import * as React from 'react';
import { IconProps } from './types';

export const User32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle cx="16" cy="8" r="6.25" stroke={color} strokeWidth="1.5" />
        <path
          d="M28.25 29.25C28.25 22.3464 22.6965 17.75 16 17.75C9.30355 17.75 3.75 22.3464 3.75 29.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default User32;

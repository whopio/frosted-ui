import * as React from 'react';
import { IconProps } from './types';

export const User24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx="12" cy="6.5" r="4.75" stroke={color} strokeWidth="1.5" />
        <path
          d="M21.25 22.25C21.25 17.5556 17.1086 13.75 12 13.75C6.89137 13.75 2.75 17.5556 2.75 22.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default User24;

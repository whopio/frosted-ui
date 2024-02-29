import * as React from 'react';
import { IconProps } from './types';

export const User12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx="6" cy="3" r="2.25" stroke={color} strokeWidth="1.5" />
        <path
          d="M10.75 11.25C10.75 9.317 8.87335 7.25 6 7.25C3.12665 7.25 1.25 9.317 1.25 11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default User12;

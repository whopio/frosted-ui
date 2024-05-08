import * as React from 'react';
import { IconProps } from './types';

export const Browser32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M6 7C6 7.55228 5.55228 8 5 8 4.44772 8 4 7.55228 4 7 4 6.44772 4.44772 6 5 6 5.55228 6 6 6.44772 6 7zM9 7C9 7.55228 8.55229 8 8 8 7.44772 8 7 7.55228 7 7 7 6.44772 7.44772 6 8 6 8.55229 6 9 6.44772 9 7zM11 8C11.5523 8 12 7.55228 12 7 12 6.44772 11.5523 6 11 6 10.4477 6 10 6.44772 10 7 10 7.55228 10.4477 8 11 8z"
          fill={color}
        />
        <path
          d="M0.5 6C0.5 4.067 2.067 2.5 4 2.5H28C29.933 2.5 31.5 4.067 31.5 6V26C31.5 27.933 29.933 29.5 28 29.5H4C2.067 29.5 0.5 27.933 0.5 26V6ZM4 4C2.89543 4 2 4.89543 2 6V10H30V6C30 4.89543 29.1046 4 28 4H4ZM28 28C29.1046 28 30 27.1046 30 26V11.5H2V26C2 27.1046 2.89543 28 4 28H28Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Browser32;

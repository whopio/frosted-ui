import * as React from 'react';
import { IconProps } from './types';

export const XCircle32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 12L12 20M20 20L12 12M28.3333 16C28.3333 22.8115 22.8115 28.3333 16 28.3333C9.1885 28.3333 3.66667 22.8115 3.66667 16C3.66667 9.18848 9.1885 3.66666 16 3.66666C22.8115 3.66666 28.3333 9.18848 28.3333 16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default XCircle32;

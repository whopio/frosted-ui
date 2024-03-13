import * as React from 'react';
import { IconProps } from './types';

export const XCircleSize32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 12L12 20M20 20L12 12M28.3334 16C28.3334 22.8115 22.8115 28.3333 16 28.3333C9.18851 28.3333 3.66669 22.8115 3.66669 16C3.66669 9.18849 9.18851 3.66666 16 3.66666C22.8115 3.66666 28.3334 9.18849 28.3334 16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default XCircleSize32;

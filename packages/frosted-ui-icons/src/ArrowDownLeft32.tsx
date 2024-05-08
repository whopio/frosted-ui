import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.955 8.04503L8.04506 23.9549M8.04506 23.9549L19.8891 23.7782M8.04506 23.9549L8.22184 12.1109"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowDownLeft32;

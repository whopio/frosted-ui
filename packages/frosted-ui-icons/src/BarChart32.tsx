import * as React from 'react';
import { IconProps } from './types';

export const BarChart32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M25.75 27.25L25.75 4.75M5.75 22.75L5.75 27.25M15.75 27.25L15.75 9.75M20.75 27.25L20.75 15.75M10.75 27.25L10.75 15.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default BarChart32;

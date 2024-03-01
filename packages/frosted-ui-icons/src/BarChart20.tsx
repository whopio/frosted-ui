import * as React from 'react';
import { IconProps } from './types';

export const BarChart20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M10 6.75L10 17.25M13.5 11.75L13.5 17.25M17 2.75L17 17.25M6.5 10.75L6.5 17.25M3 14.75L3 17.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default BarChart20;

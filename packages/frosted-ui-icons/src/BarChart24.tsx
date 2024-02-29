import * as React from 'react';
import { IconProps } from './types';

export const BarChart24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M11.75 6.75L11.75 20.25M15.75 11.75L15.75 20.25M19.75 2.75L19.75 20.25M7.75 10.75L7.75 20.25M3.75 16.75L3.75 20.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default BarChart24;

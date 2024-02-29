import * as React from 'react';
import { IconProps } from './types';

export const Pencil20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 18.2499L7.25 17.4999 17.4103 7.33961C17.948 6.80198 18.25 6.07279 18.25 5.31246 18.25 4.55212 17.9479 3.82291 17.4103 3.28528L16.7147 2.58967C16.177 2.05204 15.4478 1.75 14.6875 1.75 13.9271 1.75 13.1979 2.05205 12.6602 2.58971L2.5 12.7499 1.75 18.2499zM10.375 4.875L15.125 9.62497"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Pencil20;

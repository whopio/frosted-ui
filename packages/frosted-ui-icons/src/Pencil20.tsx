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
          d="M10.375 4.875L15.125 9.62497M7.25 17.4999L1.75 18.2499L2.5 12.7499L12.6602 2.58971C13.1979 2.05205 13.9271 1.75 14.6875 1.75C15.4478 1.75 16.177 2.05204 16.7147 2.58967L17.4103 3.28528C17.9479 3.82291 18.25 4.55212 18.25 5.31246C18.25 6.07279 17.948 6.80198 17.4103 7.33961L7.25 17.4999Z"
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

import * as React from 'react';
import { IconProps } from './types';

export const Monitor32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.95835 18.7917H28.0417M9.75002 28.4167L22.25 28.4167M12.2709 23V28.4167M19.7292 23V28.4167M6.33335 23H25.6667C27.1395 23 28.3334 21.8061 28.3334 20.3333V7.66667C28.3334 6.19391 27.1395 5 25.6667 5H6.33335C4.86059 5 3.66669 6.19391 3.66669 7.66667V20.3333C3.66669 21.8061 4.86059 23 6.33335 23Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Monitor32;

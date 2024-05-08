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
          d="M3.95832 18.7917H28.0417M9.74999 28.4167L22.25 28.4167M12.2708 23V28.4167M19.7292 23V28.4167M6.33332 23H25.6667C27.1395 23 28.3333 21.8061 28.3333 20.3333V7.66667C28.3333 6.19391 27.1395 5 25.6667 5H6.33332C4.86056 5 3.66666 6.19391 3.66666 7.66667V20.3333C3.66666 21.8061 4.86056 23 6.33332 23Z"
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

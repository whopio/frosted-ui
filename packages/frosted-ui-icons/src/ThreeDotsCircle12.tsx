import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircle12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4 6V5.995M4.125 6C4.125 6.06905 4.06903 6.125 4 6.125 3.93096 6.125 3.875 6.06905 3.875 6 3.875 5.93095 3.93096 5.875 4 5.875 4.06903 5.875 4.125 5.93095 4.125 6zM6 6V5.995M6.125 6C6.125 6.06905 6.06905 6.125 6 6.125 5.93095 6.125 5.875 6.06905 5.875 6 5.875 5.93095 5.93095 5.875 6 5.875 6.06905 5.875 6.125 5.93095 6.125 6zM8 6V5.995M8.125 6C8.125 6.06905 8.06905 6.125 8 6.125 7.93095 6.125 7.875 6.06905 7.875 6 7.875 5.93095 7.93095 5.875 8 5.875 8.06905 5.875 8.125 5.93095 8.125 6z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.625 6C10.625 8.5543 8.5543 10.625 6 10.625C3.44568 10.625 1.375 8.5543 1.375 6C1.375 3.44568 3.44568 1.375 6 1.375C8.5543 1.375 10.625 3.44568 10.625 6Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ThreeDotsCircle12;

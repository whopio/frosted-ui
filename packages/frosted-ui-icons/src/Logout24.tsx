import * as React from 'react';
import { IconProps } from './types';

export const Logout24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 7V4.5C14 3.11929 12.8807 2 11.5 2H6.5C5.11929 2 4 3.11929 4 4.5V19.5C4 20.8807 5.11929 22 6.5 22H11.5C12.8807 22 14 20.8807 14 19.5V17M9.75 12H22.25M22.25 12L17.75 7.75M22.25 12L17.75 16.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout24;

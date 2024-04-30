import * as React from 'react';
import { IconProps } from './types';

export const Profile16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10.5007 4.33334C10.5007 5.71405 9.38145 6.83334 8.00072 6.83334 6.62002 6.83334 5.50073 5.71405 5.50073 4.33334 5.50073 2.95262 6.62002 1.83334 8.00072 1.83334 9.38145 1.83334 10.5007 2.95262 10.5007 4.33334zM8.00073 8.83334C5.73998 8.83334 4.02474 10.1762 3.3224 12.0753 3.04986 12.8121 3.67962 13.5 4.4653 13.5H11.5362C12.3219 13.5 12.9516 12.8121 12.6791 12.0753 11.9767 10.1762 10.2615 8.83334 8.00073 8.83334z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile16;

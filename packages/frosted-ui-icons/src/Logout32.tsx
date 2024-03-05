import * as React from 'react';
import { IconProps } from './types';

export const Logout32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 9.37736V6.23C19 4.44612 17.5539 3 15.77 3H7.23C5.44612 3 4 4.44612 4 6.23V25.77C4 27.5539 5.44612 29 7.23 29H15.77C17.5539 29 19 27.5539 19 25.77V22.6226M12.75 16H29.25M29.25 16L23.75 10.75M29.25 16L23.75 21.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout32;

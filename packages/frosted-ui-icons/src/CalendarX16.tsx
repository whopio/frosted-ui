import * as React from 'react';
import { IconProps } from './types';

export const CalendarX16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.16667 3.16659V1.83325M10.8333 3.16659V1.83325M6.33201 6.66658L9.66647 10.0011M9.6678 6.66658L6.33333 10.0011M3.83333 13.4999H12.1667C12.9031 13.4999 13.5 12.903 13.5 12.1666V4.49992C13.5 3.76354 12.9031 3.16659 12.1667 3.16659H3.83333C3.09695 3.16659 2.5 3.76354 2.5 4.49992V12.1666C2.5 12.903 3.09695 13.4999 3.83333 13.4999Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarX16;

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
          d="M5.16667 3.16671V1.83337M10.8333 3.16671V1.83337M6.33201 6.66671L9.66647 10.0012M9.6678 6.66671L6.33333 10.0012M3.83333 13.5H12.1667C12.9031 13.5 13.5 12.9031 13.5 12.1667V4.50004C13.5 3.76366 12.9031 3.16671 12.1667 3.16671H3.83333C3.09695 3.16671 2.5 3.76366 2.5 4.50004V12.1667C2.5 12.9031 3.09695 13.5 3.83333 13.5Z"
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

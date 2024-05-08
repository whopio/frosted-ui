import * as React from 'react';
import { IconProps } from './types';

export const CalendarX20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.45833 3.95841V2.29175M13.5417 3.95841V2.29175M7.91502 8.33341L12.0831 12.5015M12.0848 8.33341L7.91667 12.5015M4.79167 16.8751H15.2083C16.1288 16.8751 16.875 16.1289 16.875 15.2084V5.62508C16.875 4.70461 16.1288 3.95841 15.2083 3.95841H4.79167C3.87119 3.95841 3.125 4.70461 3.125 5.62508V15.2084C3.125 16.1289 3.87119 16.8751 4.79167 16.8751Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarX20;

import * as React from 'react';
import { IconProps } from './types';

export const CalendarX32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.3333 6.33341V3.66675M21.6667 6.33341V3.66675M12.664 13.3334L19.3329 20.0023M19.3356 13.3334L12.6667 20.0023M7.66667 27.0001H24.3333C25.8061 27.0001 27 25.8062 27 24.3334V9.00008C27 7.52732 25.8061 6.33341 24.3333 6.33341H7.66667C6.19391 6.33341 5 7.52732 5 9.00008V24.3334C5 25.8062 6.19391 27.0001 7.66667 27.0001Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarX32;

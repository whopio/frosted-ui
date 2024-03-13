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
          d="M6.45833 3.95829V2.29163M13.5417 3.95829V2.29163M7.91502 8.33329L12.0831 12.5014M12.0848 8.33329L7.91667 12.5014M4.79167 16.875H15.2083C16.1288 16.875 16.875 16.1288 16.875 15.2083V5.62496C16.875 4.70448 16.1288 3.95829 15.2083 3.95829H4.79167C3.87119 3.95829 3.125 4.70448 3.125 5.62496V15.2083C3.125 16.1288 3.87119 16.875 4.79167 16.875Z"
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

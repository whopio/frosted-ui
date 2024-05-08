import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.45833 3.95841H4.79167C3.87119 3.95841 3.125 4.70461 3.125 5.62508V7.70841M6.45833 3.95841H13.5417M6.45833 3.95841V2.29175M3.125 7.70841V15.2084C3.125 16.1289 3.87119 16.8751 4.79167 16.8751H9.375M3.125 7.70841H16.875M13.5417 3.95841H15.2083C16.1288 3.95841 16.875 4.70461 16.875 5.62508V7.70841M13.5417 3.95841V2.29175M16.875 7.70841V9.37508M14.7917 12.2917V15.0001M14.7917 15.0001V17.7084M14.7917 15.0001H12.0833M14.7917 15.0001H17.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarPlus20;

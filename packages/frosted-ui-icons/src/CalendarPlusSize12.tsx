import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlusSize12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.875 2.375H2.875C2.32271 2.375 1.875 2.82271 1.875 3.375V4.625M3.875 2.375H8.125M3.875 2.375V1.375M1.875 4.625V9.125C1.875 9.6773 2.32271 10.125 2.875 10.125H5.625M1.875 4.625H10.125M8.125 2.375H9.125C9.6773 2.375 10.125 2.82271 10.125 3.375V4.625M8.125 2.375V1.375M10.125 4.625V5.625M8.875 7.375V9M8.875 9V10.625M8.875 9H7.25M8.875 9H10.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarPlusSize12;

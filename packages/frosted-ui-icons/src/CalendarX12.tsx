import * as React from 'react';
import { IconProps } from './types';

export const CalendarX12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.875 2.375V1.375M8.125 2.375V1.375M4.74901 5L7.24985 7.50085M7.25085 5L4.75 7.50085M2.875 10.125H9.125C9.6773 10.125 10.125 9.6773 10.125 9.125V3.375C10.125 2.82271 9.6773 2.375 9.125 2.375H2.875C2.32271 2.375 1.875 2.82271 1.875 3.375V9.125C1.875 9.6773 2.32271 10.125 2.875 10.125Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarX12;

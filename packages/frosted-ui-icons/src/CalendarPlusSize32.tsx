import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlusSize32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.3333 6.33329H7.66667C6.19391 6.33329 5 7.5272 5 8.99996V12.3333M10.3333 6.33329H21.6667M10.3333 6.33329V3.66663M5 12.3333V24.3333C5 25.8061 6.19391 27 7.66667 27H15M5 12.3333H27M21.6667 6.33329H24.3333C25.8061 6.33329 27 7.5272 27 8.99996V12.3333M21.6667 6.33329V3.66663M27 12.3333V15M23.6667 19.6666V24M23.6667 24V28.3333M23.6667 24H19.3333M23.6667 24H28"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarPlusSize32;

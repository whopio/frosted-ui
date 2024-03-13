import * as React from 'react';
import { IconProps } from './types';

export const CalendarX24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.75 4.75V2.75M16.25 4.75V2.75M9.49802 10L14.4997 15.0017M14.5017 10L9.5 15.0017M5.75 20.25H18.25C19.3546 20.25 20.25 19.3546 20.25 18.25V6.75C20.25 5.64543 19.3546 4.75 18.25 4.75H5.75C4.64543 4.75 3.75 5.64543 3.75 6.75V18.25C3.75 19.3546 4.64543 20.25 5.75 20.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarX24;

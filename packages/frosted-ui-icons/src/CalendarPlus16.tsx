import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.16667 3.16659H3.83333C3.09695 3.16659 2.5 3.76354 2.5 4.49992V6.16659M5.16667 3.16659H10.8333M5.16667 3.16659V1.83325M2.5 6.16659V12.1666C2.5 12.903 3.09695 13.4999 3.83333 13.4999H7.5M2.5 6.16659H13.5M10.8333 3.16659H12.1667C12.9031 3.16659 13.5 3.76354 13.5 4.49992V6.16659M10.8333 3.16659V1.83325M13.5 6.16659V7.49992M11.8333 9.83325V11.9999M11.8333 11.9999V14.1666M11.8333 11.9999H9.66667M11.8333 11.9999H14"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarPlus16;

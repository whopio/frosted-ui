import * as React from 'react';
import { IconProps } from './types';

export const Calendar12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.25 4C1.25 3.30964 1.80964 2.75 2.5 2.75H9.5C10.1904 2.75 10.75 3.30964 10.75 4V10C10.75 10.6904 10.1904 11.25 9.5 11.25H2.5C1.80964 11.25 1.25 10.6904 1.25 10V4zM1.25 5.75H10.75M3.75.75L3.75 2.75M8.25.75L8.25 2.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Calendar12;

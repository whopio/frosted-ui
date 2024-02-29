import * as React from 'react';
import { IconProps } from './types';

export const Calendar16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 5.25C1.75 3.86929 2.86929 2.75 4.25 2.75H11.75C13.1307 2.75 14.25 3.86929 14.25 5.25V11.75C14.25 13.1307 13.1307 14.25 11.75 14.25H4.25C2.86929 14.25 1.75 13.1307 1.75 11.75V5.25zM1.75 6.75H14.25M4.75.75L4.75 2.75M11.25.75L11.25 2.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Calendar16;

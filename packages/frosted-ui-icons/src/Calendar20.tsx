import * as React from 'react';
import { IconProps } from './types';

export const Calendar20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 6.32C1.75 4.90063 2.90063 3.75 4.32 3.75H15.68C17.0994 3.75 18.25 4.90063 18.25 6.32V15.68C18.25 17.0994 17.0994 18.25 15.68 18.25H4.32C2.90063 18.25 1.75 17.0994 1.75 15.68V6.32zM1.75 7.75H18.25M6.75 1.75L6.75 3.75M13.25 1.75L13.25 3.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Calendar20;

import * as React from 'react';
import { IconProps } from './types';

export const Calendar24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 7.32C2.75 5.90063 3.90063 4.75 5.32 4.75H18.68C20.0994 4.75 21.25 5.90063 21.25 7.32V18.68C21.25 20.0994 20.0994 21.25 18.68 21.25H5.32C3.90063 21.25 2.75 20.0994 2.75 18.68V7.32zM3.75 9.75H20.25M7.75 1.75L7.75 4.75M16.25 1.75L16.25 4.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Calendar24;

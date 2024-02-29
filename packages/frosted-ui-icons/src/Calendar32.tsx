import * as React from 'react';
import { IconProps } from './types';

export const Calendar32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.25 9.32C3.25 7.34834 4.84834 5.75 6.82 5.75H25.18C27.1517 5.75 28.75 7.34834 28.75 9.32V25.18C28.75 27.1517 27.1517 28.75 25.18 28.75H6.82C4.84834 28.75 3.25 27.1517 3.25 25.18V9.32zM3.75 12.25H28.25M10.75 2.25L10.75 5.75M21.25 2.25L21.25 5.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Calendar32;

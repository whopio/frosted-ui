import * as React from 'react';
import { IconProps } from './types';

export const Command16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.25 6.25V4C6.25 2.75736 5.24264 1.75 4 1.75C2.75736 1.75 1.75 2.75736 1.75 4C1.75 5.24264 2.75736 6.25 4 6.25H6.25ZM6.25 6.25H9.75M6.25 6.25V9.75M6.25 9.75V12C6.25 13.2426 5.24264 14.25 4 14.25C2.75736 14.25 1.75 13.2426 1.75 12C1.75 10.7574 2.75736 9.75 4 9.75H6.25ZM6.25 9.75H9.75M9.75 6.25V4C9.75 2.75736 10.7574 1.75 12 1.75C13.2426 1.75 14.25 2.75736 14.25 4C14.25 5.24264 13.2426 6.25 12 6.25H9.75ZM9.75 6.25V9.75M9.75 9.75V12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75H9.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Command16;

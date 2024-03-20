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
          d="M1.75 4C1.75 2.75736 2.75736 1.75 4 1.75V1.75C5.24264 1.75 6.25 2.75736 6.25 4V6.25H4C2.75736 6.25 1.75 5.24264 1.75 4V4zM1.75 12C1.75 13.2426 2.75736 14.25 4 14.25V14.25C5.24264 14.25 6.25 13.2426 6.25 12V9.75H4C2.75736 9.75 1.75 10.7574 1.75 12V12zM14.25 4C14.25 2.75736 13.2426 1.75 12 1.75V1.75C10.7574 1.75 9.75 2.75736 9.75 4V6.25H12C13.2426 6.25 14.25 5.24264 14.25 4V4zM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V14.25C10.7574 14.25 9.75 13.2426 9.75 12V9.75H12C13.2426 9.75 14.25 10.7574 14.25 12V12zM6.25 6.25H9.75V9.75H6.25z"
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

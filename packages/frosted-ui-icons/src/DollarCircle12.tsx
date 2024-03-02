import * as React from 'react';
import { IconProps } from './types';

export const DollarCircle12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.25 8.25H7.125C7.74632 8.25 8.25 7.74632 8.25 7.125C8.25 6.50368 7.74632 6 7.125 6H4.875C4.25368 6 3.75 5.49632 3.75 4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H7.75M6 9.25V8.25M6 3.75V2.75M11.25 6C11.25 8.89949 8.89949 11.25 6 11.25C3.10051 11.25 0.75 8.89949 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.89949 0.75 11.25 3.10051 11.25 6Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default DollarCircle12;

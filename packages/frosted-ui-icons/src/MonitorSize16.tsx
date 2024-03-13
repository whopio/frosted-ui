import * as React from 'react';
import { IconProps } from './types';

export const MonitorSize16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.16668 11.5H12.8333C13.5697 11.5 14.1667 10.9031 14.1667 10.1667V3.83333C14.1667 3.09695 13.5697 2.5 12.8333 2.5H3.16668C2.4303 2.5 1.83334 3.09695 1.83334 3.83333V10.1667C1.83334 10.9031 2.4303 11.5 3.16668 11.5zM1.83334 8.83331H13.375M5 14.2083L11 14.2083M6.13541 11.5V14.2083M9.86456 11.5V14.2083"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MonitorSize16;

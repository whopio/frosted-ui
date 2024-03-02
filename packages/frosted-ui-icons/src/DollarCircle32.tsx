import * as React from 'react';
import { IconProps } from './types';

export const DollarCircle32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.75 22.25H18.125C19.8509 22.25 21.25 20.8509 21.25 19.125C21.25 17.3991 19.8509 16 18.125 16H13.875C12.1491 16 10.75 14.6009 10.75 12.875C10.75 11.1491 12.1491 9.75 13.875 9.75H20.25M16 25.25V6.75M30.25 16C30.25 23.8701 23.8701 30.25 16 30.25C8.12994 30.25 1.75 23.8701 1.75 16C1.75 8.12994 8.12994 1.75 16 1.75C23.8701 1.75 30.25 8.12994 30.25 16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default DollarCircle32;

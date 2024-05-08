import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.75 9.5H19C20.7949 9.5 22.25 10.9551 22.25 12.75C22.25 14.5449 20.7949 16 19 16M19 16H12M19 16C20.7949 16 22.25 17.4551 22.25 19.25C22.25 21.0449 20.7949 22.5 19 22.5H9.75M11.75 9.49986L11.7896 22.5001M13.25 6.99986V9.5M13.25 22.5V25.0001M18.75 6.99986V9.5M18.75 22.5V25.0001M30.25 16C30.25 23.8701 23.8701 30.25 16 30.25C8.12994 30.25 1.75 23.8701 1.75 16C1.75 8.12994 8.12994 1.75 16 1.75C23.8701 1.75 30.25 8.12994 30.25 16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bitcoin32;

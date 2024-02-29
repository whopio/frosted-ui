import * as React from 'react';
import { IconProps } from './types';

export const Photo12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75 9.25V2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H9.25C10.3546 0.75 11.25 1.64543 11.25 2.75V9.25C11.25 10.3546 10.3546 11.25 9.25 11.25H2.75C1.64543 11.25 0.75 10.3546 0.75 9.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 8L2.37024 6.11527C2.84245 5.56598 3.53077 5.25 4.25513 5.25V5.25C4.89444 5.25 5.50918 5.49634 5.97159 5.93782L10.75 10.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="4" r="1" fill={color} />
      </svg>
    );
  },
);

export default Photo12;

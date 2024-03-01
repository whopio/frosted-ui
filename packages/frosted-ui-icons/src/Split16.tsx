import * as React from 'react';
import { IconProps } from './types';

export const Split16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_16_107)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15.25 12.5H11.4386C10.705 12.5 10.029 12.1023 9.67278 11.461L7.75 8 9.67278 4.539C10.029 3.89772 10.705 3.5 11.4386 3.5H15.25M15.25 12.5L12.75 15.25M15.25 12.5L12.75 9.75M15.25 3.5L12.75 6.25M15.25 3.5L12.75.75M7.75003 8L5.25 8" />
          <circle cx="3" cy="8" r="2.25" />
        </g>
        <defs>
          <clipPath id="clip0_16_107">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Split16;

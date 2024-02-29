import * as React from 'react';
import { IconProps } from './types';

export const DollarCircle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_16_130)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5.75 10.75H9.375C10.1344 10.75 10.75 10.1344 10.75 9.375V9.375C10.75 8.61561 10.1344 8 9.375 8H6.625C5.86561 8 5.25 7.38439 5.25 6.625V6.625C5.25 5.86561 5.86561 5.25 6.625 5.25H10.25" />
          <circle cx="8" cy="8" r="7.25" />
          <path d="M8 10.75L8 12.25M8 3.75L8 5.25" />
        </g>
        <defs>
          <clipPath id="clip0_16_130">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DollarCircle16;

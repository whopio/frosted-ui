import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g stroke={color} clipPath="url(#clip0_198_62)">
          <circle
            cx="8"
            cy="8"
            r="7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4L8 9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="12" r=".5" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_198_62">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ExclamationCircle16;

import * as React from 'react';
import { IconProps } from './types';

export const Ban12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_16_96)">
          <path
            d="M9.71238 2.28721L2.28776 9.71183M11.25 6C11.25 8.89949 8.89949 11.25 6 11.25C3.10051 11.25 0.75 8.89949 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.89949 0.75 11.25 3.10051 11.25 6Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_96">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Ban12;

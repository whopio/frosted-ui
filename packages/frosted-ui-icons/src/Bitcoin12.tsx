import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_392)">
          <path
            d="M3.75 3.75H7.125C7.74632 3.75 8.25 4.25368 8.25 4.875C8.25 5.49633 7.74632 6.00001 7.125 6.00001M7.125 6.00001H4.77633M7.125 6.00001C7.74632 6.00001 8.25 6.50369 8.25 7.12501C8.25 7.74633 7.74632 8.25002 7.125 8.25002H3.75M4.75741 3.75001V8.25001M5.25 2.75V3.75M5.25 8.25002V9.25002M7.25 2.75V3.75M7.25 8.25002V9.25002M11.25 6C11.25 8.89949 8.89949 11.25 6 11.25C3.10051 11.25 0.75 8.89949 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.89949 0.75 11.25 3.10051 11.25 6Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_392">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Bitcoin12;

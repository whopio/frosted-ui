import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_321_129)">
          <g clipPath="url(#clip1_321_129)">
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 11C7.05228 11 7.5 10.5523 7.5 10C7.5 9.44772 7.05228 9 6.5 9C5.94772 9 5.5 9.44772 5.5 10C5.5 10.5523 5.94772 11 6.5 11ZM11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10ZM14.5 10C14.5 10.5523 14.0523 11 13.5 11C12.9477 11 12.5 10.5523 12.5 10C12.5 9.44772 12.9477 9 13.5 9C14.0523 9 14.5 9.44772 14.5 10Z"
              fill={color}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_321_129">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
          <clipPath id="clip1_321_129">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ThreeDotsCircle20;

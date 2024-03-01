import * as React from 'react';
import { IconProps } from './types';

export const Parachute16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_16_225)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M4.25 14.54V12.25H11.75V14.54C11.75 14.9321 11.4321 15.25 11.04 15.25H4.96C4.56788 15.25 4.25 14.9321 4.25 14.54Z" />
          <path
            d="M.75 8.25L4.5 12.25M11.5 12.25L15.25 8.25M8 8V12.25M.75 8.25C.75 8.25 1 .75 8 .75 15 .75 15.25 8.25 15.25 8.25"
            strokeLinejoin="round"
          />
          <path
            d="M15.25 8.25C15.25 8.25 14.25 6.25 11.625 6.25C9 6.25 8 8.25 8 8.25C8 8.25 7 6.25 4.375 6.25C1.75 6.25 0.75 8.25 0.75 8.25"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_225">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Parachute16;

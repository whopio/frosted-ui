import * as React from 'react';
import { IconProps } from './types';

export const Rotate16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_1_6729)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M.75 6.25C.75 4.25 3.5.75 7.5.75 11.5.75 14.25 4.25 14.25 6.25M14.25 6.25H10.75M14.25 6.25V6.25C14.8023 6.25 15.25 5.80303 15.25 5.25074 15.25 4.29189 15.25 2.83363 15.25 1.75M15.25 9.75C15.25 11.75 12.5 15.25 8.5 15.25 4.5 15.25 1.75 11.75 1.75 9.75M1.75 9.75H5.25M1.75 9.75V9.75C1.19772 9.75.75 10.1977.75 10.75V14.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_6729">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Rotate16;

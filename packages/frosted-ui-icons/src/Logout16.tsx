import * as React from 'react';
import { IconProps } from './types';

export const Logout16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_14_1614)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.75 4.25V2.52C9.75 1.54246 8.95754.75 7.98.75H2.52C1.54246.75.75 1.54246.75 2.52V13.48C.75 14.4575 1.54246 15.25 2.52 15.25H7.98C8.95754 15.25 9.75 14.4575 9.75 13.48V11.75M6.75 8H15.25M15.25 8L11.75 4.75M15.25 8L11.75 11.25" />
        </g>
        <defs>
          <clipPath id="clip0_14_1614">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Logout16;

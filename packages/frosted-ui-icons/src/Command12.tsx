import * as React from 'react';
import { IconProps } from './types';

export const Command12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_1268)">
          <path
            d="M4.75 4.75V2.75C4.75 1.64543 3.85457 0.75 2.75 0.75C1.64543 0.75 0.75 1.64543 0.75 2.75C0.75 3.85457 1.64543 4.75 2.75 4.75H4.75ZM4.75 4.75H7.25M4.75 4.75V7.25M4.75 7.25V9.25C4.75 10.3546 3.85457 11.25 2.75 11.25C1.64543 11.25 0.75 10.3546 0.75 9.25C0.75 8.14543 1.64543 7.25 2.75 7.25H4.75ZM4.75 7.25H7.25M7.25 4.75V2.75C7.25 1.64543 8.14543 0.75 9.25 0.75C10.3546 0.75 11.25 1.64543 11.25 2.75C11.25 3.85457 10.3546 4.75 9.25 4.75H7.25ZM7.25 4.75V7.25M7.25 7.25V9.25C7.25 10.3546 8.14543 11.25 9.25 11.25C10.3546 11.25 11.25 10.3546 11.25 9.25C11.25 8.14543 10.3546 7.25 9.25 7.25H7.25Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_1268">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Command12;

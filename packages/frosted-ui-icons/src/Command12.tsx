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
        <g
          stroke={color}
          clipPath="url(#clip0_882_1268)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M.75 2.75C.75 1.64543 1.64543.75 2.75.75V.75C3.85457.75 4.75 1.64543 4.75 2.75V4.75H2.75C1.64543 4.75.75 3.85457.75 2.75V2.75zM.75 9.25C.75 10.3546 1.64543 11.25 2.75 11.25V11.25C3.85457 11.25 4.75 10.3546 4.75 9.25V7.25H2.75C1.64543 7.25.75 8.14543.75 9.25V9.25zM11.25 2.75C11.25 1.64543 10.3546.75 9.25.75V.75C8.14543.75 7.25 1.64543 7.25 2.75V4.75H9.25C10.3546 4.75 11.25 3.85457 11.25 2.75V2.75zM11.25 9.25C11.25 10.3546 10.3546 11.25 9.25 11.25V11.25C8.14543 11.25 7.25 10.3546 7.25 9.25V7.25H9.25C10.3546 7.25 11.25 8.14543 11.25 9.25V9.25zM4.75 4.75H7.25V7.25H4.75z" />
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

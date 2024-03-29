import * as React from 'react';
import { IconProps } from './types';

export const Export12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_882_201)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M.75 7.75L.75 9.75C.75 10.5784 1.42157 11.25 2.25 11.25L9.75 11.25C10.5784 11.25 11.25 10.5784 11.25 9.75L11.25 7.75M4.75 7.25V4.80966C4.75 3.67214 5.67214 2.75 6.80966 2.75L9.75 2.75M9.75 2.75L7.75.75M9.75 2.75L7.75 4.75" />
        </g>
        <defs>
          <clipPath id="clip0_882_201">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Export12;

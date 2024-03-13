import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M4.1286 6.41671H2.50004C1.71765 6.41671 1.08337 7.05095 1.08337 7.83337V12.8334C1.08337 13.6158 1.71765 14.25 2.50004 14.25H11.6147C12.9738 14.25 14.1289 13.2573 14.3334 11.9137L14.8914 8.24707C15.1447 6.58266 13.8563 5.08337 12.1726 5.08337H9.55343L9.80222 3.48766C9.99956 2.22201 9.01685 1.08337 7.74071 1.08337C7.21135 1.08337 6.72391 1.3787 6.48051 1.85126L4.1286 6.41671ZM3.75004 12.75V7.91671H2.58337V12.75H3.75004Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbUpFilled16;

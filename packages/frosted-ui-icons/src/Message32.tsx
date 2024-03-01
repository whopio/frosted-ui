import * as React from 'react';
import { IconProps } from './types';

export const Message32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.75 7.92C1.75 5.61697 3.61697 3.75 5.92 3.75H26.08C28.383 3.75 30.25 5.61697 30.25 7.92V20.08C30.25 22.383 28.383 24.25 26.08 24.25H20.9719C20.4288 24.25 19.9069 24.4615 19.517 24.8396L16 28.25L12.483 24.8396C12.0931 24.4615 11.5712 24.25 11.0281 24.25H5.92C3.61697 24.25 1.75 22.383 1.75 20.08V7.92Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="16"
          cy="14.5"
          r="1.5"
          transform="rotate(-90 16 14.5)"
          fill={color}
        />
        <circle
          cx="9.5"
          cy="14.5"
          r="1.5"
          transform="rotate(-90 9.5 14.5)"
          fill={color}
        />
        <circle
          cx="23.5"
          cy="14.5"
          r="1.5"
          transform="rotate(-90 23.5 14.5)"
          fill={color}
        />
      </svg>
    );
  },
);

export default Message32;

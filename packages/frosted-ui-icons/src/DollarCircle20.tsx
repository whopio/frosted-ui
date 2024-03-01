import * as React from 'react';
import { IconProps } from './types';

export const DollarCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M7.25 13.25H11.625C12.5225 13.25 13.25 12.5225 13.25 11.625V11.625C13.25 10.7275 12.5225 10 11.625 10H8.375C7.47754 10 6.75 9.27246 6.75 8.375V8.375C6.75 7.47754 7.47754 6.75 8.375 6.75H12.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="10"
          r="8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13.25L10 15.25M10 4.75L10 6.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default DollarCircle20;

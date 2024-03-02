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
          d="M7.25 13.25H11.625C12.5225 13.25 13.25 12.5225 13.25 11.625C13.25 10.7275 12.5225 10 11.625 10H8.375C7.47754 10 6.75 9.27246 6.75 8.375C6.75 7.47754 7.47754 6.75 8.375 6.75H12.75M10 15.25V13.25M10 6.75V4.75M18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10Z"
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

import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_882_392)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="5.25" />
          <path d="M3.75 3.75H7.125C7.74632 3.75 8.25 4.25368 8.25 4.875V4.875C8.25 5.49633 7.74632 6.00001 7.125 6.00001H4.77634" />
          <path d="M3.75 8.25H7.125C7.74632 8.25 8.25 7.74632 8.25 7.125V7.125C8.25 6.50367 7.74632 5.99999 7.125 5.99999H4.77634M4.75741 3.75001L4.75742 6M4.75741 8.25002L4.75742 6.00003M5.25 2.75L5.25 3.75M5.25 8.25L5.25 9.25M7.25 2.75L7.25 3.75M7.25 8.25L7.25 9.25" />
        </g>
        <defs>
          <clipPath id="clip0_882_392">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Bitcoin12;

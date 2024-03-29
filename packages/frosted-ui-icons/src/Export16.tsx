import * as React from 'react';
import { IconProps } from './types';

export const Export16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_882_197)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M.75 10.75L.75 13.25C.75 14.3546 1.64543 15.25 2.75 15.25L13.25 15.25C14.3546 15.25 15.25 14.3546 15.25 13.25L15.25 10.75M6.25 10.25L6.25 6.58258C6.25 5.06589 7.47952 3.83637 8.99621 3.83637L13.25 3.83637M13.25 3.83637L10.75 6.00303M13.25 3.83637L10.75 1.5" />
        </g>
        <defs>
          <clipPath id="clip0_882_197">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Export16;

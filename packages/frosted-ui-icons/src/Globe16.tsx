import * as React from 'react';
import { IconProps } from './types';

export const Globe16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_882_1366)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="6.75" />
          <ellipse cx="8" cy="8" rx="2.75" ry="6.75" />
          <path d="M1.66357 5.74988L14.3346 5.74988M1.66357 10.2501L14.3346 10.2501" />
        </g>
        <defs>
          <clipPath id="clip0_882_1366">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Globe16;

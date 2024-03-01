import * as React from 'react';
import { IconProps } from './types';

export const Message16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75 3.87C0.75 2.69916 1.69916 1.75 2.87 1.75H13.13C14.3008 1.75 15.25 2.69916 15.25 3.87V10.13C15.25 11.3008 14.3008 12.25 13.13 12.25H10.7619C10.512 12.25 10.2702 12.3383 10.0791 12.4992L8 14.25L5.92092 12.4992C5.7298 12.3383 5.48798 12.25 5.23813 12.25H2.87C1.69916 12.25 0.75 11.3008 0.75 10.13V3.87Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="7" r="1" transform="rotate(-90 8 7)" fill={color} />
        <circle
          cx="12"
          cy="7"
          r="1"
          transform="rotate(-90 12 7)"
          fill={color}
        />
        <circle cx="4" cy="7" r="1" transform="rotate(-90 4 7)" fill={color} />
      </svg>
    );
  },
);

export default Message16;

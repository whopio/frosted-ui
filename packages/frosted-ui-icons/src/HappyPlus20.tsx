import * as React from 'react';
import { IconProps } from './types';

export const HappyPlus20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.625 6.45834V3.95834M15.625 3.95834V1.45834M15.625 3.95834H13.125M15.625 3.95834H18.125M12.036 2.00314C11.3848 1.83784 10.7026 1.75 10 1.75 5.44365 1.75 1.75 5.44365 1.75 10 1.75 14.5563 5.44365 18.25 10 18.25 14.5563 18.25 18.25 14.5563 18.25 10 18.25 9.30686 18.1645 8.63368 18.0035 7.99044"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="11" r="1" fill={color} />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(-1 0 0 1 15 10)"
          fill={color}
        />
        <path
          d="M12.6563 13.5938C12.6563 13.5938 11.875 15.1562 10 15.1562C8.125 15.1562 7.34375 13.5938 7.34375 13.5938"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default HappyPlus20;

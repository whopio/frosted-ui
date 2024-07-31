import * as React from 'react';
import { IconProps } from './types';

export const Logout24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.5 21H14C15.6569 21 17 19.6569 17 18V17.25M1 5V4C1 2.34315 2.34315 1 4 1H13C15.2091 1 17 2.79086 17 5V5.75M16 11.5H23M23 11.5L20.5 9M23 11.5L20.5 14"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 4.04508C1 2.18663 2.95578 0.977891 4.61803 1.80902L10.7889 4.89443C12.144 5.572 13 6.95705 13 8.47214V20.1459C13 22.376 10.6531 23.8265 8.65836 22.8292L3.21114 20.1056C1.85601 19.428 1 18.043 1 16.5279V4.04508Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout24;

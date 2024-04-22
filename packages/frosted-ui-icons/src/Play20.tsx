import * as React from 'react';
import { IconProps } from './types';

export const Play20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.235 9.24904L15.8049 9.86346L16.235 9.24904L6.69234 2.56915C6.0848 2.14386 5.25 2.5785 5.25 3.32011V16.6799C5.25 17.4215 6.0848 17.8561 6.69234 17.4309L6.26518 16.8206L6.69234 17.4309L16.235 10.751C16.7564 10.386 16.7564 9.61396 16.235 9.24904Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Play20;

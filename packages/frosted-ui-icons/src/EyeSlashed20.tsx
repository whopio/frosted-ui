import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashed20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 17.25L17.25 2.75M16.9196 6.61586C18.1812 8.08256 18.9795 9.49645 19.1925 9.8914 19.2305 9.96182 19.2305 10.0382 19.1925 10.1086 18.7051 11.0122 15.1539 17.25 9.99998 17.25 8.92425 17.25 7.91834 16.9783 6.99553 16.54M3.08031 13.3841C1.81875 11.9174 1.02045 10.5036.807421 10.1086.769434 10.0382.769434 9.96182.807421 9.8914 1.29484 8.98775 4.8461 2.75 9.99998 2.75 11.0757 2.75 12.0816 3.02175 13.0044 3.46002"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="3.25" stroke={color} strokeWidth="1.5" />
      </svg>
    );
  },
);

export default EyeSlashed20;

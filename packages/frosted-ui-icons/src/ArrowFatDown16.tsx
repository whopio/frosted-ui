import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.49992 1.83337H6.49995C6.13175 1.83337 5.83328 2.13185 5.83328 2.50004V9.16671H3.5602C3.27506 9.16671 3.12155 9.50151 3.30761 9.71757L7.49479 14.58C7.76072 14.8889 8.23912 14.8889 8.50512 14.58L12.6923 9.71757C12.8783 9.50151 12.7249 9.16671 12.4397 9.16671H10.1666V2.50004C10.1666 2.13185 9.86812 1.83337 9.49992 1.83337Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown16;

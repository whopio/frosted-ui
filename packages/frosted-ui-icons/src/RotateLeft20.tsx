import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.53368 12.2917C4.47752 14.9619 7.0241 16.875 10.0175 16.875C13.8145 16.875 16.8925 13.7969 16.8925 10C16.8925 6.20304 13.8145 3.125 10.0175 3.125C7.66985 3.125 6.10077 4.12865 4.58335 5.84076M3.95835 3.33333V6.04167C3.95835 6.38684 4.23818 6.66667 4.58335 6.66667H7.29168"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateLeft20;

import * as React from 'react';
import { IconProps } from './types';

export const RotateRight20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.4663 12.2917C15.5225 14.9619 12.9759 16.875 9.98248 16.875C6.18553 16.875 3.10748 13.7969 3.10748 10C3.10748 6.20304 6.18553 3.125 9.98248 3.125C12.3301 3.125 13.8992 4.12865 15.4167 5.84076M16.0417 3.33333V6.04167C16.0417 6.38684 15.7618 6.66667 15.4167 6.66667H12.7083"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateRight20;

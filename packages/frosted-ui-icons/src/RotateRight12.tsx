import * as React from 'react';
import { IconProps } from './types';

export const RotateRight12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9.8798 7.375C9.3135 8.97715 7.78555 10.125 5.9895 10.125C3.71133 10.125 1.8645 8.27815 1.8645 6C1.8645 3.72182 3.71133 1.875 5.9895 1.875C7.3981 1.875 8.33955 2.47719 9.25 3.50446M9.625 1.5V3.625C9.625 3.8321 9.4571 4 9.25 4H6.8125"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateRight12;

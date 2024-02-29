import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkShield24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.75 12.75L11.25 15.25L16.25 9.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8901 2.3538C9.22899 4.64422 6.20543 5.8873 4.50252 6.43534C3.77914 6.66813 3.25012 7.32797 3.25012 8.08789V9.12281C3.25012 14.7462 6.30393 20.4683 11.6607 22.1793C11.8043 22.2252 11.9193 22.25 12 22.25C12.0807 22.25 12.1956 22.2252 12.3392 22.1793C17.6961 20.4683 20.7501 14.7463 20.7501 9.12281V8.08793C20.7501 7.32799 20.2211 6.66814 19.4977 6.43534C17.7947 5.88731 14.771 4.64422 13.1099 2.3538C12.8488 1.99373 12.4448 1.75 12 1.75C11.5552 1.75 11.1512 1.99373 10.8901 2.3538Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CheckmarkShield24;

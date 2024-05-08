import * as React from 'react';
import { IconProps } from './types';

export const Apps16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99988 0.749989V2.74996M7.99988 2.74996C6.75726 2.74996 5.74991 3.7573 5.74991 4.99992C5.74991 6.24255 6.75726 7.24989 7.99988 7.24989C9.2425 7.24989 10.2498 6.24255 10.2498 4.99992C10.2498 3.7573 9.2425 2.74996 7.99988 2.74996ZM6.81992 6.91603L2.74996 15.2498M13.2498 15.2498L9.17983 6.91603M14.2498 8.99986C14.2498 8.99986 12.209 12.2498 7.99988 12.2498C3.7908 12.2498 1.74997 8.99986 1.74997 8.99986"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps16;

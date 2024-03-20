import * as React from 'react';
import { IconProps } from './types';

export const Component1912 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 4.75L6 6.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="9" r=".75" fill={color} />
        <path
          d="M7.17998 1.97464L11.1409 9.78489C11.2126 9.92631 11.25 10.0826 11.25 10.2412C11.25 10.7983 10.7983 11.25 10.2412 11.25H1.75882C1.20166 11.25 0.75 10.7983 0.75 10.2412C0.75 10.0826 0.787373 9.92631 0.859088 9.7849L4.81999 1.97464C5.04543 1.53011 5.50156 1.25 5.99998 1.25C6.49841 1.25 6.95454 1.53011 7.17998 1.97464Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Component1912;
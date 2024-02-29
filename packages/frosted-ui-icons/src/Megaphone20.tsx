import * as React from 'react';
import { IconProps } from './types';

export const Megaphone20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 7V13C1.75 13.9665 2.5335 14.75 3.5 14.75 4.4665 14.75 5.25 13.9665 5.25 13V7C5.25 6.0335 4.4665 5.25 3.5 5.25 2.5335 5.25 1.75 6.0335 1.75 7zM8.75 14V17.25M5.25 7.24997L14.75 4M14.75 16L5.25 12.75M14.75 3.5V16.5C14.75 17.4665 15.5335 18.25 16.5 18.25 17.4665 18.25 18.25 17.4665 18.25 16.5V3.5C18.25 2.5335 17.4665 1.75 16.5 1.75 15.5335 1.75 14.75 2.5335 14.75 3.5z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Megaphone20;

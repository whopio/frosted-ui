import * as React from 'react';
import { IconProps } from './types';

export const Megaphone24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.25 8.5V15.5C2.25 16.4665 3.0335 17.25 4 17.25 4.9665 17.25 5.75 16.4665 5.75 15.5V8.5C5.75 7.5335 4.9665 6.75 4 6.75 3.0335 6.75 2.25 7.5335 2.25 8.5zM9.25 16.5V20.5C9.25 21.4665 10.0335 22.25 11 22.25V22.25C11.9665 22.25 12.75 21.4665 12.75 20.5V18M5.75 8.99997L18.25 4.25M18.25 19.75L5.75 15M18.25 3.5V20.5C18.25 21.4665 19.0335 22.25 20 22.25 20.9665 22.25 21.75 21.4665 21.75 20.5V3.5C21.75 2.5335 20.9665 1.75 20 1.75 19.0335 1.75 18.25 2.5335 18.25 3.5z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Megaphone24;

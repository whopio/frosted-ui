import * as React from 'react';
import { IconProps } from './types';

export const Export20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.25 11.5V15.68C16.25 17.0994 15.0994 18.25 13.68 18.25H4.32C2.90063 18.25 1.75 17.0994 1.75 15.68V6.32C1.75 4.90063 2.90063 3.75 4.32 3.75H8.5M18.2499 1.75H12.9999M18.2499 1.75V7M18.2499 1.75L9.75 10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Export20;

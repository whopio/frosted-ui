import * as React from 'react';
import { IconProps } from './types';

export const LilstNumber20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.79167 16.875H15.2083C16.1288 16.875 16.875 16.1288 16.875 15.2083V4.79167C16.875 3.87119 16.1288 3.125 15.2083 3.125H4.79167C3.87119 3.125 3.125 3.87119 3.125 4.79167V15.2083C3.125 16.1288 3.87119 16.875 4.79167 16.875Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.875 12.375H14.125M9.875 7.625H14.125M7.125 8.875V6.375L5.875 7.25M6 11.4659C6 11.4659 6.36187 11.125 6.80443 11.125C7.247 11.125 7.60577 11.4359 7.60577 11.8195C7.60577 12.7192 5.875 12.875 5.875 13.625H7.75"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LilstNumber20;

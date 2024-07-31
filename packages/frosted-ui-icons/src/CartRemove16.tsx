import * as React from 'react';
import { IconProps } from './types';

export const CartRemove16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.1666 3.83331L13.2011 9.07485C13.0846 9.70745 12.533 10.1666 11.8898 10.1666H5.09303C4.45746 10.1666 3.91024 9.71805 3.78559 9.09478L2.49407 2.6372C2.40059 2.16977 1.99017 1.83331 1.51349 1.83331H1.16663M6.96789 6.19871L8.49996 4.66665M8.49996 4.66665L10.032 3.13458M8.49996 4.66665L6.96789 3.13458M8.49996 4.66665L10.032 6.19871M6.16663 12.6666C6.16663 13.1269 5.79353 13.5 5.33329 13.5C4.87305 13.5 4.49996 13.1269 4.49996 12.6666C4.49996 12.2064 4.87305 11.8333 5.33329 11.8333C5.79353 11.8333 6.16663 12.2064 6.16663 12.6666ZM12.1666 12.6666C12.1666 13.1269 11.7936 13.5 11.3333 13.5C10.873 13.5 10.5 13.1269 10.5 12.6666C10.5 12.2064 10.873 11.8333 11.3333 11.8333C11.7936 11.8333 12.1666 12.2064 12.1666 12.6666Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CartRemove16;

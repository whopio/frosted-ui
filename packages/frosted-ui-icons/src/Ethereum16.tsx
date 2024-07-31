import * as React from 'react';
import { IconProps } from './types';

export const Ethereum16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.29382 6.85527L7.99996 9.14474L12.7061 6.85527L7.99996 0.75001L3.29382 6.85527Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.29382 8.89035L7.99996 11.4342L12.7061 8.89035L7.99996 15.25L3.29382 8.89035Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Ethereum16;

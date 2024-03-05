import * as React from 'react';
import { IconProps } from './types';

export const Sparkles12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 8C4 6.8058 3.1942 6 2 6 3.1942 6 4 5.1942 4 4 4 5.1942 4.8058 6 6 6 4.8058 6 4 6.8058 4 8zM8 4C8 3.4029 7.5971 3 7 3 7.5971 3 8 2.5971 8 2 8 2.5971 8.4029 3 9 3 8.4029 3 8 3.4029 8 4zM8 10C8 9.4029 7.5971 9 7 9 7.5971 9 8 8.5971 8 8 8 8.5971 8.4029 9 9 9 8.4029 9 8 9.4029 8 10z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sparkles12;

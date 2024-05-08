import * as React from 'react';
import { IconProps } from './types';

export const Subtract12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 5.25L10.25 5.25C10.6642 5.25 11 5.58579 11 6C11 6.41421 10.6642 6.75 10.25 6.75L1.75 6.75C1.33579 6.75 1 6.41421 1 6C1 5.58579 1.33579 5.25 1.75 5.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Subtract12;

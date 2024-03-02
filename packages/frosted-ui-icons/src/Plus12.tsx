import * as React from 'react';
import { IconProps } from './types';

export const Plus12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.25 10.25C5.25 10.6642 5.58579 11 6 11C6.41421 11 6.75 10.6642 6.75 10.25V6.75L10.25 6.75C10.6642 6.75 11 6.41421 11 6C11 5.58579 10.6642 5.25 10.25 5.25L6.75 5.25V1.75C6.75 1.33579 6.41421 1 6 1C5.58579 1 5.25 1.33579 5.25 1.75V5.25L1.75 5.25C1.33579 5.25 1 5.58579 1 6C1 6.41421 1.33579 6.75 1.75 6.75L5.25 6.75V10.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Plus12;

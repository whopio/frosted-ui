import * as React from 'react';
import { IconProps } from './types';

export const Download16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.8334 8.83331L8.47142 11.1952C8.21109 11.4556 7.78895 11.4556 7.52862 11.1952L5.16669 8.83331M8.00002 1.83331V11.1666M12.8334 14.1666H3.16669"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Download16;

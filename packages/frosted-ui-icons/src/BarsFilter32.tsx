import * as React from 'react';
import { IconProps } from './types';

export const BarsFilter32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2 8.25C2 7.83579 2.33579 7.5 2.75 7.5H29.25C29.6642 7.5 30 7.83579 30 8.25 30 8.66421 29.6642 9 29.25 9H2.75C2.33579 9 2 8.66421 2 8.25zM6 16.25C6 15.8358 6.33579 15.5 6.75 15.5H25.25C25.6642 15.5 26 15.8358 26 16.25 26 16.6642 25.6642 17 25.25 17H6.75C6.33579 17 6 16.6642 6 16.25zM11 24.25C11 23.8358 11.3358 23.5 11.75 23.5H20.25C20.6642 23.5 21 23.8358 21 24.25 21 24.6642 20.6642 25 20.25 25H11.75C11.3358 25 11 24.6642 11 24.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default BarsFilter32;

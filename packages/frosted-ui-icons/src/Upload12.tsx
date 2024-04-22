import * as React from 'react';
import { IconProps } from './types';

export const Upload12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.125 3.375L6.35355 1.60355C6.1583 1.4083 5.8417 1.4083 5.64645 1.60355L3.875 3.375M6 8.625V1.625M9.625 11.375H2.375"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload12;

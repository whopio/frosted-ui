import * as React from 'react';
import { IconProps } from './types';

export const Sun20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99853 2.74236V1.47298M4.86657 15.1322L3.96898 16.0298M9.99853 18.5273V17.2578M16.0279 3.97057L15.1302 4.86816M17.2559 10.0001H18.5253M15.1302 15.1322L16.0279 16.0298M1.47137 10.0001H2.74076M3.96892 3.97052L4.8665 4.86811M13.092 6.90651C14.8005 8.61508 14.8005 11.3852 13.092 13.0937C11.3834 14.8023 8.61336 14.8023 6.90481 13.0937C5.19626 11.3852 5.19626 8.61508 6.90481 6.90651C8.61336 5.19797 11.3834 5.19797 13.092 6.90651Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sun20;

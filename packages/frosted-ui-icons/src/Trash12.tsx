import * as React from 'react';
import { IconProps } from './types';

export const Trash12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 3.25L2.9244 10.0405C2.9669 10.7203 3.53069 11.25 4.21189 11.25H7.78811C8.46931 11.25 9.0331 10.7203 9.0756 10.0405L9.5 3.25M3.75 3.25L4.2862 1.46265C4.4131 1.03967 4.80242.75 5.24403.75H6.75597C7.19758.75 7.5869 1.03967 7.7138 1.46265L8.25 3.25M.75 3.25H11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Trash12;

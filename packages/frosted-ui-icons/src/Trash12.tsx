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
          d="M10 3.25L9.0756 10.0405C9.0331 10.7203 8.46931 11.25 7.78811 11.25H4.21189C3.53069 11.25 2.9669 10.7203 2.9244 10.0405L2 3.25M8.25 3.25L7.7138 1.46265C7.5869 1.03967 7.19758 0.75 6.75597 0.75H5.24403C4.80242 0.75 4.4131 1.03967 4.2862 1.46265L3.75 3.25M0.75 3.25H11.25"
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

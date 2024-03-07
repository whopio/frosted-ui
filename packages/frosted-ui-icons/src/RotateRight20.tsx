import * as React from 'react';
import { IconProps } from './types';

export const RotateRight20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5 8C16.5 6 14.5 3 10 3C5.5 3 3 6.5 3 10C3 13.5 6 17 10 17C15.5 17 16.5 12 16.5 12M16.5 8H12M16.5 8V8C16.7761 8 17 7.77614 17 7.5V3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateRight20;

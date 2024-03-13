import * as React from 'react';
import { IconProps } from './types';

export const DashedCircle32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <rect
          x=".75"
          y=".75"
          width="30.5"
          height="30.5"
          rx="15.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeDasharray="5 4"
        />
      </svg>
    );
  },
);

export default DashedCircle32;

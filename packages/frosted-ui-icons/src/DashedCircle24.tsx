import * as React from 'react';
import { IconProps } from './types';

export const DashedCircle24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <rect
          x=".75"
          y=".75"
          width="22.5"
          height="22.5"
          rx="11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeDasharray="5 4"
        />
      </svg>
    );
  },
);

export default DashedCircle24;

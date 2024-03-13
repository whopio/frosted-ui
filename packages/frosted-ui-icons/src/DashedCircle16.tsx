import * as React from 'react';
import { IconProps } from './types';

export const DashedCircle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <rect
          x=".75"
          y=".75"
          width="14.5"
          height="14.5"
          rx="7.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeDasharray="4 4"
        />
      </svg>
    );
  },
);

export default DashedCircle16;

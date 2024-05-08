import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.4194 12.4195L3.58055 3.58071M3.58055 3.58071L10.4748 3.75749M3.58055 3.58071L3.75732 10.475"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowUpLeft16;

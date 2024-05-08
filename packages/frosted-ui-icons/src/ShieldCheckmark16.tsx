import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmark16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.16667 7.66666L7.33333 8.83333L9.83333 6.33335M13.5 7.9416V4.6277C13.5 4.05379 13.1327 3.54427 12.5883 3.36278L8.42167 1.9739C8.14793 1.88266 7.85207 1.88266 7.57833 1.9739L3.41169 3.36278C2.86724 3.54427 2.5 4.05379 2.5 4.6277V7.9416C2.5 11.2565 5.33333 12.8333 8 14.2719C10.6667 12.8333 13.5 11.2565 13.5 7.9416Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ShieldCheckmark16;

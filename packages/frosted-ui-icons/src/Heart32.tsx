import * as React from 'react';
import { IconProps } from './types';

export const Heart32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M16 7.42924C24.4441 -1.15687 38.9197 14.7888 16 27.6667C-6.91979 14.7888 7.5558 -1.15687 16 7.42924Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Heart32;

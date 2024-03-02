import * as React from 'react';
import { IconProps } from './types';

export const LockFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5V6H4.5V5ZM3 6.26756V5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5V6.26756C13.5978 6.61337 14 7.25972 14 8V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V8C2 7.25972 2.4022 6.61337 3 6.26756Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default LockFilled16;

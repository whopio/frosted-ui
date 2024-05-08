import * as React from 'react';
import { IconProps } from './types';

export const Italic16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.49999 2.5H9.66666M9.66666 2.5H12.8333M9.66666 2.5L6.33332 13.5M6.33332 13.5H3.16666M6.33332 13.5H9.50672"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Italic16;

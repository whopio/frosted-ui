import * as React from 'react';
import { IconProps } from './types';

export const Reply16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.09101 1.94435V4.62398C7.09101 4.71281 7.16339 4.78459 7.25222 4.78441C10.5953 4.77798 13.9229 5.35803 14.9548 7.97037C16.0033 10.6247 13.382 13.8099 12.8578 14.3408C12.3335 14.8716 12.8578 11.6864 11.8093 10.6247C10.7877 9.59019 9.26831 9.56367 7.25124 9.56299C7.16287 9.56296 7.09101 9.6346 7.09101 9.72297V11.8729C7.09101 12.009 6.93185 12.083 6.82783 11.9952L0.944896 7.03092C0.869145 6.967 0.869145 6.85028 0.944896 6.78636L6.82783 1.82206C6.93185 1.73428 7.09101 1.80823 7.09101 1.94435Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Reply16;

import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4 3.17662V8.82338C4 8.90111 4.0848 8.94912 4.15145 8.90913L8.85708 6.08575C8.92182 6.04691 8.92182 5.95309 8.85708 5.91425L4.15145 3.09087C4.0848 3.05088 4 3.09889 4 3.17662Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M3.25 3.17662V8.82338C3.25 9.48408 3.97078 9.89218 4.53732 9.55225L9.24296 6.72887C9.7932 6.39873 9.7932 5.60127 9.24296 5.27113L4.53732 2.44775C3.97077 2.10782 3.25 2.51592 3.25 3.17662Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default PlayFilled12;

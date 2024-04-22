import * as React from 'react';
import { IconProps } from './types';

export const Play12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.25 3.17662V8.82338C3.25 9.48408 3.97078 9.89218 4.53732 9.55225L9.24296 6.72887C9.7932 6.39873 9.7932 5.60127 9.24296 5.27113L4.53732 2.44775C3.97077 2.10782 3.25 2.51592 3.25 3.17662Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Play12;

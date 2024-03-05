import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.26351 3.03885L1.70987 11.0077C.94798 12.341 1.91071 14 3.44636 14H12.5536C14.0893 14 15.052 12.341 14.2901 11.0077L9.73649 3.03885C8.9687 1.69522 7.0313 1.69522 6.26351 3.03885zM8 5V8"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="11" r="1" fill={color} />
      </svg>
    );
  },
);

export default ExclamationTriangle16;

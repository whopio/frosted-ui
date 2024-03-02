import * as React from 'react';
import { IconProps } from './types';

export const Book20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10 3.49996L10 18M0.75 4.01116V18.25C3 16 8 16 10 18.25C12 16 17 16 19.25 18.25V4.01409C19.25 3.73494 19.1364 3.4651 18.9167 3.29281C16.5796 1.4596 12.382 1.12161 10 3.57636C7.61802 1.12162 3.42043 1.45963 1.08326 3.29281C0.863608 3.4651 0.75 3.732 0.75 4.01116Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Book20;

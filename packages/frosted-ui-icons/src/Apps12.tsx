import * as React from 'react';
import { IconProps } from './types';

export const Apps12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.99994 0.749992V2.74997M5.99994 2.74997C5.30959 2.74997 4.74995 3.30961 4.74995 3.99996C4.74995 4.69031 5.30959 5.24995 5.99994 5.24995C6.69029 5.24995 7.24993 4.69031 7.24993 3.99996C7.24993 3.30961 6.69029 2.74997 5.99994 2.74997ZM5.36769 5.0785L1.74998 11.2499M10.2499 11.2499L6.63218 5.0785M10.2499 5.99994C10.2499 5.99994 9.36212 9.24991 5.99994 9.24991C2.63776 9.24991 1.74998 5.99994 1.74998 5.99994"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps12;

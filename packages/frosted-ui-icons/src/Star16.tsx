import * as React from 'react';
import { IconProps } from './types';

export const Star16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.90699 1.92152L6.90696 1.92157L5.51894 4.71306L2.31269 5.11864C1.33252 5.24264 0.849877 6.46802 1.64143 7.18908L3.96661 9.30724L3.38423 12.3254L4.12065 12.4675L3.38423 12.3254C3.18072 13.3801 4.30831 14.0477 5.14887 13.6099L8 12.1249L10.8511 13.6099C10.8511 13.6099 10.8511 13.6099 10.8512 13.6099C11.6918 14.0477 12.8192 13.38 12.6157 12.3254L12.0334 9.30722L14.3585 7.18911C15.1501 6.46805 14.6675 5.24263 13.6873 5.11864L10.481 4.71305L9.09304 1.92157L9.09302 1.92152C8.64773 1.02616 7.35227 1.02616 6.90699 1.92152ZM3.99996 9.13436L3.99996 9.13438L3.99996 9.13436Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star16;

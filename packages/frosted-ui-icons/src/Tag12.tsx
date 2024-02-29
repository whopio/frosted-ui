import * as React from 'react';
import { IconProps } from './types';

export const Tag12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.44 0.75H6.8461C6.62504 0.75 6.41357 0.840356 6.26076 1.00011L1.5527 5.92218C1.19798 6.29302 1 6.78642 1 7.29959C1 7.82809 1.20995 8.33495 1.58365 8.70865L3.29135 10.4163C3.66505 10.7901 4.17191 11 4.70041 11C5.21358 11 5.70698 10.802 6.07782 10.4473L10.9999 5.73924C11.1596 5.58643 11.25 5.37496 11.25 5.1539V1.56C11.25 1.11265 10.8874 0.75 10.44 0.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="4" r="1" fill={color} />
      </svg>
    );
  },
);

export default Tag12;

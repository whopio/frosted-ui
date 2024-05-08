import * as React from 'react';
import { IconProps } from './types';

export const ListNumber20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.79167 13.9584H16.875M9.79167 6.04171H16.875M5.20833 8.12504V3.95837L3.125 5.41671M3.33333 12.4432C3.33333 12.4432 3.93644 11.875 4.67405 11.875C5.41167 11.875 6.00962 12.3933 6.00962 13.0325C6.00962 14.5321 3.125 14.7917 3.125 16.0417H6.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ListNumber20;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownToLineSize12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.125 6.625L6.35355 8.39645C6.1583 8.5917 5.8417 8.5917 5.64645 8.39645L3.875 6.625M6 1.375V8.375M9.625 10.625H2.375"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowDownToLineSize12;

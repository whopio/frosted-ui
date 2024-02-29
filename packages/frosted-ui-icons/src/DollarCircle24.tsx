import * as React from 'react';
import { IconProps } from './types';

export const DollarCircle24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.25 16.25H14.125C15.2986 16.25 16.25 15.2986 16.25 14.125V14.125C16.25 12.9514 15.2986 12 14.125 12H9.875C8.70139 12 7.75 11.0486 7.75 9.875V9.875C7.75 8.70139 8.70139 7.75 9.875 7.75H15.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5.75V18.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default DollarCircle24;

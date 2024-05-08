import * as React from 'react';
import { IconProps } from './types';

export const Compress12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.00001 4.72135V.710938M7.00001 4.72135L4.95834 2.67969M7.00001 4.72135L9.04168 2.67969M7.00002 9.27852L7.00002 13.2889M7.00002 9.27852L9.04169 11.3202M7.00002 9.27852L4.95835 11.3202M2.1875 7H11.8125"
          stroke={color}
          strokeWidth="1.313"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Compress12;

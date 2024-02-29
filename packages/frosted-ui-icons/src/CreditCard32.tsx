import * as React from 'react';
import { IconProps } from './types';

export const CreditCard32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.75 9.25C1.75 7.317 3.317 5.75 5.25 5.75H26.75C28.683 5.75 30.25 7.317 30.25 9.25V22.75C30.25 24.683 28.683 26.25 26.75 26.25H5.25C3.317 26.25 1.75 24.683 1.75 22.75V9.25zM1.75 12.25H30.25M6.75 20.75H13.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CreditCard32;

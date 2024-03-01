import * as React from 'react';
import { IconProps } from './types';

export const CreditCard24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 6.57C.75 5.01256 2.01256 3.75 3.57 3.75H20.43C21.9874 3.75 23.25 5.01256 23.25 6.57V17.43C23.25 18.9874 21.9874 20.25 20.43 20.25H3.57C2.01256 20.25.75 18.9874.75 17.43V6.57zM.75 9.25H23.25M4.75 15.75H9.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CreditCard24;

import * as React from 'react';
import { IconProps } from './types';

export const Monitor16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.83332 8.83331H13.375M4.99998 14.2083L11 14.2083M6.1354 11.5V14.2083M9.86456 11.5V14.2083M3.16665 11.5H12.8333C13.5697 11.5 14.1666 10.9031 14.1666 10.1667V3.83333C14.1666 3.09695 13.5697 2.5 12.8333 2.5H3.16665C2.43027 2.5 1.83331 3.09695 1.83331 3.83333V10.1667C1.83331 10.9031 2.43027 11.5 3.16665 11.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Monitor16;

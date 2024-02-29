import * as React from 'react';
import { IconProps } from './types';

export const Gift16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 7.75879H13.25V12.88C13.25 13.6366 12.6366 14.25 11.88 14.25H4.12C3.36337 14.25 2.75 13.6366 2.75 12.88V7.75879zM1.75 5.52758C1.75 5.10784 2.09026 4.76758 2.51 4.76758H13.49C13.9097 4.76758 14.25 5.10784 14.25 5.52758V6.99879C14.25 7.41853 13.9097 7.75879 13.49 7.75879H2.51C2.09026 7.75879 1.75 7.41853 1.75 6.99879V5.52758zM8 4.76758V14.25M8.43098 3.02607C8.61847 2.27611 9.29231 1.75 10.0653 1.75H10.25C11.0784 1.75 11.75 2.42157 11.75 3.25V3.25C11.75 4.07843 11.0784 4.75 10.25 4.75H8L8.43098 3.02607zM7.56902 3.02607C7.38153 2.27611 6.70769 1.75 5.93466 1.75H5.75C4.92157 1.75 4.25 2.42157 4.25 3.25V3.25C4.25 4.07843 4.92157 4.75 5.75 4.75H8L7.56902 3.02607z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Gift16;

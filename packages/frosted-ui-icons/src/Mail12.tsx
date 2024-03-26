import * as React from 'react';
import { IconProps } from './types';

export const Mail12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75008 3.49995L4.09721 5.68401C4.66312 6.05328 5.32426 6.2499 6 6.2499C6.67574 6.2499 7.33688 6.05328 7.90279 5.68401L11.2499 3.49995M2.26006 10.2498H9.73994C10.5739 10.2498 11.2499 9.5738 11.2499 8.73987V3.25995C11.2499 2.42601 10.5739 1.74997 9.73994 1.74997H2.26006C1.42612 1.74997 0.75008 2.42601 0.75008 3.25995V8.73987C0.75008 9.5738 1.42612 10.2498 2.26006 10.2498Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail12;

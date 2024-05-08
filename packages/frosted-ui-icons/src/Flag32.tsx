import * as React from 'react';
import { IconProps } from './types';

export const Flag32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.33333 20.1111V5.8655C6.33333 5.35816 6.62091 4.89536 7.09184 4.70664C8.10375 4.30114 9.98602 3.66666 11.8571 3.66666C14.6071 3.66666 17.3929 6.4074 20.1428 6.4074C21.402 6.4074 22.6663 6.12006 23.6669 5.80852C24.6107 5.51471 25.6667 6.1945 25.6667 7.18288V19.2827C25.6667 19.79 25.3791 20.2528 24.9081 20.4415C23.8963 20.8471 22.014 21.4815 20.1428 21.4815C17.3929 21.4815 14.6071 18.7408 11.8571 18.7408C9.10726 18.7408 6.33333 20.1111 6.33333 20.1111ZM6.33333 20.1111V28.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag32;

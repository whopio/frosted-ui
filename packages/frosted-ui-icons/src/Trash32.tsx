import * as React from 'react';
import { IconProps } from './types';

export const Trash32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.5 7.75L23.6441 26.151C23.5635 27.8853 22.1339 29.25 20.3976 29.25H11.6024C9.86614 29.25 8.43653 27.8853 8.35586 26.151L7.5 7.75M20.5 7.75L20.1971 5.73081C19.9401 4.01749 18.4683 2.75 16.7358 2.75H15.2642C13.5317 2.75 12.0599 4.01749 11.8029 5.73081L11.5 7.75M4.75 7.75H27.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Trash32;

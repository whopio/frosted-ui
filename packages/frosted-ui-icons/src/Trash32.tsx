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
          d="M7.5 7.75L8.35586 26.151C8.43653 27.8853 9.86614 29.25 11.6024 29.25H20.3976C22.1339 29.25 23.5635 27.8853 23.6441 26.151L24.5 7.75M11.5 7.75L11.8029 5.73081C12.0599 4.01749 13.5317 2.75 15.2642 2.75H16.7358C18.4683 2.75 19.9401 4.01749 20.1971 5.73081L20.5 7.75M4.75 7.75H27.25"
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

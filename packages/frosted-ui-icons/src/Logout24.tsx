import * as React from 'react';
import { IconProps } from './types';

export const Logout24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.25 6.875V4.25C14.25 2.86929 13.1307 1.75 11.75 1.75H4.25C2.86929 1.75 1.75 2.86929 1.75 4.25V19.75C1.75 21.1307 2.86929 22.25 4.25 22.25H11.75C13.1307 22.25 14.25 21.1307 14.25 19.75V17.125M9.75 12H22.25M22.25 12L17.75 7.75M22.25 12L17.75 16.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout24;

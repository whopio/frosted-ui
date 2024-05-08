import * as React from 'react';
import { IconProps } from './types';

export const ListBullet24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.75 16.75H20.25M11.75 7.25H20.25M7.75 7.25C7.75 8.35457 6.85457 9.25 5.75 9.25C4.64543 9.25 3.75 8.35457 3.75 7.25C3.75 6.14543 4.64543 5.25 5.75 5.25C6.85457 5.25 7.75 6.14543 7.75 7.25ZM7.75 16.75C7.75 17.8546 6.85457 18.75 5.75 18.75C4.64543 18.75 3.75 17.8546 3.75 16.75C3.75 15.6454 4.64543 14.75 5.75 14.75C6.85457 14.75 7.75 15.6454 7.75 16.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ListBullet24;

import * as React from 'react';
import { IconProps } from './types';

export const BarsFilter20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1 5C1 4.58579 1.33579 4.25 1.75 4.25H18.25C18.6642 4.25 19 4.58579 19 5 19 5.41421 18.6642 5.75 18.25 5.75H1.75C1.33579 5.75 1 5.41421 1 5zM3.5 10C3.5 9.58579 3.83579 9.25 4.25 9.25H15.75C16.1642 9.25 16.5 9.58579 16.5 10 16.5 10.4142 16.1642 10.75 15.75 10.75H4.25C3.83579 10.75 3.5 10.4142 3.5 10zM6.625 15C6.625 14.5858 6.96079 14.25 7.375 14.25H12.625C13.0392 14.25 13.375 14.5858 13.375 15 13.375 15.4142 13.0392 15.75 12.625 15.75H7.375C6.96079 15.75 6.625 15.4142 6.625 15z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default BarsFilter20;

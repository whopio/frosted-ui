import * as React from 'react';
import { IconProps } from './types';

export const ListBullet16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.83337 11.1667H13.5M7.83337 4.83337H13.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.83333 6.16667C4.56971 6.16667 5.16667 5.56971 5.16667 4.83333 5.16667 4.09695 4.56971 3.5 3.83333 3.5 3.09695 3.5 2.5 4.09695 2.5 4.83333 2.5 5.56971 3.09695 6.16667 3.83333 6.16667zM3.83333 12.5C4.56971 12.5 5.16667 11.9031 5.16667 11.1667 5.16667 10.4303 4.56971 9.83333 3.83333 9.83333 3.09695 9.83333 2.5 10.4303 2.5 11.1667 2.5 11.9031 3.09695 12.5 3.83333 12.5z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ListBullet16;

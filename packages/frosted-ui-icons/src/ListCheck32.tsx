import * as React from 'react';
import { IconProps } from './types';

export const ListCheck32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.0573 12.6637L11.5573 13.6637L14.0528 10.3363M18.4107 12H21.744M18.3333 20H21.6667M10.0573 20.6652L11.5573 21.6652L14.0528 18.3379M7.66667 27H24.3333C25.8061 27 27 25.8061 27 24.3333V7.66667C27 6.19391 25.8061 5 24.3333 5H7.66667C6.19391 5 5 6.19391 5 7.66667V24.3333C5 25.8061 6.19391 27 7.66667 27Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ListCheck32;

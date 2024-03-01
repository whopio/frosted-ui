import * as React from 'react';
import { IconProps } from './types';

export const GridAdd20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 4.29C2.75 3.43948 3.43948 2.75 4.29 2.75H6.71C7.56052 2.75 8.25 3.43948 8.25 4.29V6.71C8.25 7.56052 7.56052 8.25 6.71 8.25H4.29C3.43948 8.25 2.75 7.56052 2.75 6.71V4.29zM2.75 13.29C2.75 12.4395 3.43948 11.75 4.29 11.75H6.71C7.56052 11.75 8.25 12.4395 8.25 13.29V15.71C8.25 16.5605 7.56052 17.25 6.71 17.25H4.29C3.43948 17.25 2.75 16.5605 2.75 15.71V13.29zM11.75 4.29C11.75 3.43948 12.4395 2.75 13.29 2.75H15.71C16.5605 2.75 17.25 3.43948 17.25 4.29V6.71C17.25 7.56052 16.5605 8.25 15.71 8.25H13.29C12.4395 8.25 11.75 7.56052 11.75 6.71V4.29zM17.25 14.5H11.75M14.5 11.75L14.5 17.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default GridAdd20;

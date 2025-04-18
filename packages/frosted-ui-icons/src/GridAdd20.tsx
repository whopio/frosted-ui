import * as React from 'react';
import { IconProps } from './types';

export const GridAdd20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.25 14.5H11.75M14.5 11.75V17.25M4.29 8.25H6.71C7.56052 8.25 8.25 7.56052 8.25 6.71V4.29C8.25 3.43948 7.56052 2.75 6.71 2.75H4.29C3.43948 2.75 2.75 3.43948 2.75 4.29V6.71C2.75 7.56052 3.43948 8.25 4.29 8.25ZM4.29 17.25H6.71C7.56052 17.25 8.25 16.5605 8.25 15.71V13.29C8.25 12.4395 7.56052 11.75 6.71 11.75H4.29C3.43948 11.75 2.75 12.4395 2.75 13.29V15.71C2.75 16.5605 3.43948 17.25 4.29 17.25ZM13.29 8.25H15.71C16.5605 8.25 17.25 7.56052 17.25 6.71V4.29C17.25 3.43948 16.5605 2.75 15.71 2.75H13.29C12.4395 2.75 11.75 3.43948 11.75 4.29V6.71C11.75 7.56052 12.4395 8.25 13.29 8.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GridAdd20;

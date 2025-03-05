import * as React from 'react';
import { IconProps } from './types';

export const Trash24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.5 5.75L18.0074 20.854C17.9465 22.1945 16.8419 23.25 15.5 23.25H7.5C6.15808 23.25 5.05352 22.1945 4.99259 20.854L3.5 5.75M15.5 5.75L15.1706 3.99321C14.9267 2.69253 13.791 1.75 12.4677 1.75H11.5323C10.209 1.75 9.07328 2.69253 8.8294 3.99321L8.5 5.75M2 5.75H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Trash24;

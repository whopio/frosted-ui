import * as React from 'react';
import { IconProps } from './types';

export const Mail16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0.75 4.75L6.12569 8.64264C6.6709 9.03744 7.32686 9.25 8 9.25C8.67315 9.25 9.3291 9.03744 9.87432 8.64264L15.25 4.75M2.79 13.75H13.21C14.3367 13.75 15.25 12.8367 15.25 11.71V4.29C15.25 3.16334 14.3367 2.25 13.21 2.25H2.79C1.66334 2.25 0.75 3.16334 0.75 4.29V11.71C0.75 12.8367 1.66334 13.75 2.79 13.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Mail16;

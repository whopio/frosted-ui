import * as React from 'react';
import { IconProps } from './types';

export const Bold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.65625 16H17.6693C20.6148 16 23.0027 13.6121 23.0027 10.6667V10.3333C23.0027 7.38781 20.6148 5 17.6693 5H8.98958C8.2532 5 7.65625 5.59696 7.65625 6.33333V16ZM7.65625 16V25.6667C7.65625 26.4031 8.2532 27 8.98958 27H16.6693M17.3363 27H19.0029C21.9484 27 24.3363 24.6121 24.3363 21.6667V21.3333C24.3363 18.3879 21.9484 16 19.0029 16H17.3363"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bold32;

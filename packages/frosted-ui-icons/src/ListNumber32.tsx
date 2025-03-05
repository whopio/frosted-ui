import * as React from 'react';
import { IconProps } from './types';

export const ListNumber32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M15.6667 22.3334H27M15.6667 9.66671H27M8.33333 13V6.33337L5 8.66671M5.33333 19.9091C5.33333 19.9091 6.29831 19 7.47848 19C8.65867 19 9.61539 19.8292 9.61539 20.852C9.61539 23.2514 5 23.6667 5 25.6667H10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListNumber32;

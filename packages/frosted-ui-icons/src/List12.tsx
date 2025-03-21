import * as React from 'react';
import { IconProps } from './types';

export const List12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M.75 9.84V2.16C.75 1.38128 1.38128.75 2.16.75H9.84C10.6187.75 11.25 1.38128 11.25 2.16V9.84C11.25 10.6187 10.6187 11.25 9.84 11.25H2.16C1.38128 11.25.75 10.6187.75 9.84zM5.75 4.25H8.25M5.75 7.25H8.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="3.25" cy="4.25" r=".75" fill={color} />
      <circle cx="3.25" cy="7.25" r=".75" fill={color} />
    </svg>
  );
};

export default List12;

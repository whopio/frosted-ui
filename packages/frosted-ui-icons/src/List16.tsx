import * as React from 'react';
import { IconProps } from './types';

export const List16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M.75 13.3V2.7C.75 1.62304 1.62304.75 2.7.75H13.3C14.377.75 15.25 1.62304 15.25 2.7V13.3C15.25 14.377 14.377 15.25 13.3 15.25H2.7C1.62304 15.25.75 14.377.75 13.3zM6.75 5H12.25M6.75 8H11.25M6.75 11H9.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="5" r="1" fill={color} />
      <circle cx="4" cy="8" r="1" fill={color} />
      <circle cx="4" cy="11" r="1" fill={color} />
    </svg>
  );
};

export default List16;

import * as React from 'react';
import { IconProps } from './types';

export const Bold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.87109 6H6.626C7.73055 6 8.626 5.10455 8.626 4V3.875C8.626 2.77043 7.73055 1.875 6.626 1.875H3.37109C3.09495 1.875 2.87109 2.09886 2.87109 2.375V6ZM2.87109 6V9.625C2.87109 9.90115 3.09495 10.125 3.37109 10.125H6.251M6.5011 10.125H7.1261C8.23065 10.125 9.1261 9.22955 9.1261 8.125V8C9.1261 6.89545 8.23065 6 7.1261 6H6.5011"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bold12;

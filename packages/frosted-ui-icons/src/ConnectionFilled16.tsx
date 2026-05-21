import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.4688 9.89439C16.1754 10.3227 16.175 11.3484 15.4678 11.7762L8.90333 15.7479C8.34637 16.0847 7.64765 16.084 7.09083 15.7469L0.530284 11.7762C-0.176349 11.3483 -0.176847 10.3228 0.529307 9.89439L2.20704 8.87778L6.31544 11.3651C7.34954 11.991 8.64633 11.9915 9.68067 11.3661L13.791 8.87778L15.4688 9.89439ZM7.09181 0.252785C7.64871 -0.0844214 8.34725 -0.0841017 8.90431 0.252785L15.4697 4.22739C16.1767 4.65563 16.176 5.68232 15.4688 6.11021L8.90431 10.0809C8.3473 10.4178 7.64873 10.418 7.09181 10.0809L0.53126 6.10923C-0.175384 5.68116 -0.176336 4.6556 0.530284 4.22739L7.09181 0.252785Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ConnectionFilled16.category = 'Interface General';

export default ConnectionFilled16;

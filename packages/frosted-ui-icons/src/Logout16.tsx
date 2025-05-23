import * as React from 'react';
import { IconProps } from './types';

export const Logout16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 13.25H8.75C9.99264 13.25 11 12.2426 11 11V11M1 4.46667V3C1 1.89543 1.89543 1 3 1H8.5C9.88071 1 11 2.11929 11 3.5V4M11 7.49996H15M15 7.49996L13 5.5M15 7.49996L13 9.49992"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 3.32227C1 2.23317 2.12408 1.5071 3.11683 1.95496L6.52805 3.49386C7.42402 3.89805 8 4.78977 8 5.7727V13.6777C8 14.7668 6.87592 15.4929 5.88317 15.045L2.47195 13.5061C1.57598 13.1019 1 12.2102 1 11.2273V3.32227Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="11" r=".75" fill={color} />
    </svg>
  );
};

export default Logout16;

import * as React from 'react';
import { IconProps } from './types';

export const Bold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.78516 10H11.0433C12.8842 10 14.3767 8.50758 14.3767 6.66667V6.45833C14.3767 4.61738 12.8842 3.125 11.0433 3.125H5.61849C5.15825 3.125 4.78516 3.4981 4.78516 3.95833V10ZM4.78516 10V16.0417C4.78516 16.5019 5.15825 16.875 5.61849 16.875H10.4183M10.8352 16.875H11.8768C13.7177 16.875 15.2102 15.3826 15.2102 13.5417V13.3333C15.2102 11.4924 13.7177 10 11.8768 10H10.8352"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bold20;

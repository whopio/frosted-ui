import * as React from 'react';
import { IconProps } from './types';

export const Gift20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 5.75L10 18.25M10 5.75L10.3739 3.75593C10.592 2.59284 11.6075 1.75 12.7909 1.75H13.25C14.3546 1.75 15.25 2.64543 15.25 3.75C15.25 4.85457 14.3546 5.75 13.25 5.75H10ZM10 5.75L9.62611 3.75593C9.40803 2.59284 8.39248 1.75 7.20912 1.75H6.75C5.64543 1.75 4.75 2.64543 4.75 3.75C4.75 4.85457 5.64543 5.75 6.75 5.75H10ZM3.25 9.25879H16.75V16.44C16.75 17.4397 15.9396 18.25 14.94 18.25H5.06C4.06036 18.25 3.25 17.4397 3.25 16.44V9.25879ZM1.75 8.24879V6.77758C1.75 6.21977 2.20219 5.76758 2.76 5.76758H17.24C17.7978 5.76758 18.25 6.21977 18.25 6.77758V8.24879C18.25 8.8066 17.7978 9.25879 17.24 9.25879H2.76C2.20219 9.25879 1.75 8.8066 1.75 8.24879Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Gift20;

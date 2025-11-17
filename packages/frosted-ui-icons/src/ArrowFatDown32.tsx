import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.9999 3.66666H13C12.2636 3.66666 11.6666 4.2636 11.6666 4.99999V18.3333H7.12046C6.55018 18.3333 6.24317 19.0029 6.61529 19.4351L14.9896 29.16C15.5215 29.7777 16.4783 29.7777 17.0103 29.16L25.3846 19.4351C25.7567 19.0029 25.4498 18.3333 24.8794 18.3333H20.3332V4.99999C20.3332 4.26362 19.7363 3.66666 18.9999 3.66666Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatDown32;

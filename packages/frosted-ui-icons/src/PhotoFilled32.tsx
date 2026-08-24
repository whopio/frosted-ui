import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PhotoFilled32"
      {...props}
    >
      <path
        d="M22.75 1C27.306 1 31 4.694 31 9.25v13.5c0 4.556-3.694 8.25-8.25 8.25H9.25C4.694 31 1 27.306 1 22.75V9.25C1 4.694 4.694 1 9.25 1h13.5zm-.782 12.997c-1.124 0-2.201.447-2.995 1.241L5.71 28.498C6.74 29.133 7.952 29.5 9.25 29.5h13.5c3.728 0 6.75-3.022 6.75-6.75v-2.976l-4.536-4.536c-.795-.794-1.873-1.24-2.996-1.24zM11 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill={color}
      />
    </svg>
  );
};

PhotoFilled32.category = 'Interface General';

export default PhotoFilled32;

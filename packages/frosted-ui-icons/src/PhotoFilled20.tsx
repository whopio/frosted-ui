import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PhotoFilled20"
      {...props}
    >
      <path
        d="M14.65 0C17.605 0 20 2.395 20 5.35v9.3c0 2.955-2.395 5.35-5.35 5.35h-9.3C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.3zm-.775 8.438c-.8 0-1.566.317-2.13.882L3.21 17.852c.612.41 1.347.648 2.139.648h9.3c2.126 0 3.85-1.724 3.85-3.85v-2.835L16.006 9.32c-.565-.565-1.332-.883-2.131-.883zM6.75 4C5.231 4 4 5.231 4 6.75S5.231 9.5 6.75 9.5 9.5 8.269 9.5 6.75 8.269 4 6.75 4z"
        fill={color}
      />
    </svg>
  );
};

PhotoFilled20.category = 'Interface General';

export default PhotoFilled20;

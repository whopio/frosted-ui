import * as React from 'react';
import { IconProps } from './types';

export const RotateRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightFilled32"
      {...props}
    >
      <path
        d="M16 .5c5.447 0 10.236 2.81 13 7.057V4.75c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v7c0 .69-.56 1.25-1.25 1.25h-7c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h4.531C25.71 6.068 21.212 3 16 3 10.37 3 5.572 6.58 3.766 11.593 3.27 12.967 3 14.45 3 16c0 1.55.27 3.033.766 4.407C5.572 25.42 10.369 29 16 29c5.63 0 10.428-3.58 12.234-8.593.234-.65.95-.987 1.6-.753.65.234.987.95.753 1.6C28.435 27.227 22.718 31.5 16 31.5S3.565 27.227 1.413 21.254C.822 19.612.5 17.842.5 16c0-1.842.322-3.612.913-5.254C3.565 4.773 9.282.5 16 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightFilled32.category = 'Arrows';

export default RotateRightFilled32;

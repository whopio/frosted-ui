import * as React from 'react';
import { IconProps } from './types';

export const PhotosFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PhotosFilled16"
      {...props}
    >
      <path
        d="M11.75 3c1.76 0 3.27 1.07 3.916 2.595.054.128.102.258.143.391.125.4.19.824.19 1.264v4.5c0 2.347-1.902 4.25-4.25 4.25h-4.5c-1.497 0-2.813-.775-3.57-1.946l-.011-.018c-.295-.462-.503-.984-.602-1.544l-.01-.056c-.016-.101-.03-.204-.039-.308l-.007-.109-.005-.065C3 11.886 3 11.818 3 11.75v-4.5C3 4.903 4.903 3 7.25 3h4.5zM11 8c-.519 0-1.017.206-1.384.573l-4.673 4.67C5.433 14 6.283 14.5 7.25 14.5h4.5c1.519 0 2.75-1.232 2.75-2.75v-1.06l-2.116-2.117C12.017 8.206 11.519 8 11 8zM7.948.07c1.54-.272 3.032.323 3.978 1.435-.059-.002-.117-.004-.176-.004h-4.5C4.074 1.5 1.5 4.075 1.5 7.25v4.5l.002.078c-.318-.476-.546-1.024-.652-1.623L.07 5.774C-.339 3.463 1.204 1.26 3.515.851L7.948.07zM7 5.75c-.69 0-1.25.56-1.25 1.25S6.31 8.25 7 8.25 8.25 7.69 8.25 7 7.69 5.75 7 5.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PhotosFilled16.category = 'Interface General';

export default PhotosFilled16;

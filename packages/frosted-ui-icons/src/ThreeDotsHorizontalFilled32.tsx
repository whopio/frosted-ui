import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.83301 13.25C7.35151 13.2502 8.58283 14.4815 8.58301 16C8.58283 17.5185 7.35151 18.7498 5.83301 18.75C4.31449 18.7498 3.08319 17.5185 3.08301 16C3.08318 14.4815 4.31448 13.2502 5.83301 13.25ZM15.999 13.25C17.5177 13.25 18.7488 14.4814 18.749 16C18.7488 17.5186 17.5177 18.75 15.999 18.75C14.4806 18.7497 13.2492 17.5184 13.249 16C13.2492 14.4816 14.4806 13.2503 15.999 13.25ZM26.1631 13.25C27.6815 13.2503 28.9129 14.4815 28.9131 16C28.9129 17.5185 27.6815 18.7497 26.1631 18.75C24.6446 18.7498 23.4133 17.5185 23.4131 16C23.4133 14.4815 24.6446 13.2502 26.1631 13.25Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalFilled32.category = 'Interface General';

export default ThreeDotsHorizontalFilled32;

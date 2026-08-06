import * as React from 'react';
import { IconProps } from './types';

export const BrowserBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBold32"
      {...props}
    >
      <path
        d="M25 3C28.3137 3 31 5.68629 31 9V23C31 26.3137 28.3137 29 25 29H7C3.68629 29 1 26.3137 1 23V9C1 5.68629 3.68629 3 7 3H25ZM3 23C3 25.2091 4.79086 27 7 27H25C27.2091 27 29 25.2091 29 23V13H3V23ZM7 5C4.79086 5 3 6.79086 3 9V11H29V9C29 6.79086 27.2091 5 25 5H7ZM6 7C6.55228 7 7 7.44772 7 8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM9 7C9.55229 7 10 7.44772 10 8C10 8.55228 9.55229 9 9 9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
        fill={color}
      />
    </svg>
  );
};

BrowserBold32.category = 'Interface General';

export default BrowserBold32;

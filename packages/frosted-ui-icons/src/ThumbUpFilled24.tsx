import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbUpFilled24"
      {...props}
    >
      <path
        d="M6.421 10H3.75C2.784 10 2 10.784 2 11.75v7.5c0 .966.784 1.75 1.75 1.75h13.672c1.853 0 3.428-1.354 3.707-3.186l.837-5.5C22.312 10.044 20.555 8 18.26 8h-4.367l.145-.926.296-1.9C14.593 3.504 13.296 2 11.61 2c-.654 0-1.256.365-1.557.949L6.421 10zM6 19.5v-8H3.75c-.138 0-.25.112-.25.25v7.5c0 .138.112.25.25.25H6z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbUpFilled24.category = 'Interface General';

export default ThumbUpFilled24;

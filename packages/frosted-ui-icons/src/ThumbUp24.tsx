import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbUp24"
      {...props}
    >
      <path
        d="M6.75 10.75h-3c-.552 0-1 .448-1 1v7.5c0 .552.448 1 1 1h3m0 0V11l3.97-7.708c.172-.333.516-.542.891-.542 1.227 0 2.17 1.095 1.98 2.308l-.575 3.692h5.243c1.837 0 3.242 1.636 2.966 3.451l-.837 5.5c-.223 1.466-1.483 2.549-2.966 2.549H6.75z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ThumbUp24.category = 'Interface General';

export default ThumbUp24;

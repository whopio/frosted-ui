import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_6096_3)">
        <path
          d="M6 0C9.31371 1.28855e-07 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 1.28851e-07 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM7.81348 4.99219C8.05528 4.50859 7.58871 3.99668 7.10449 4.14746L7.00781 4.18652L5.87305 4.75488C5.38923 4.99679 4.99679 5.38923 4.75488 5.87305L4.18652 7.00781C3.92866 7.52355 4.47645 8.07134 4.99219 7.81348L6.42578 7.09668C6.716 6.95155 6.95155 6.716 7.09668 6.42578L7.81348 4.99219Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6096_3">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CompassFilled12;

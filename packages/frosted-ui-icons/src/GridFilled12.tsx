import * as React from 'react';
import { IconProps } from './types';

export const GridFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GridFilled12"
      {...props}
    >
      <path
        d="M3.14 7C4.167 7 5 7.833 5 8.86v1.28C5 11.167 4.167 12 3.14 12H1.86C.833 12 0 11.167 0 10.14V8.86C0 7.833.833 7 1.86 7h1.28zm7 0C11.167 7 12 7.833 12 8.86v1.28c0 1.027-.833 1.86-1.86 1.86H8.86C7.833 12 7 11.167 7 10.14V8.86C7 7.833 7.833 7 8.86 7h1.28zm-7-7C4.167 0 5 .833 5 1.86v1.28C5 4.167 4.167 5 3.14 5H1.86C.833 5 0 4.167 0 3.14V1.86C0 .833.833 0 1.86 0h1.28zm7 0C11.167 0 12 .833 12 1.86v1.28C12 4.167 11.167 5 10.14 5H8.86C7.833 5 7 4.167 7 3.14V1.86C7 .833 7.833 0 8.86 0h1.28z"
        fill={color}
      />
    </svg>
  );
};

GridFilled12.category = 'Interface General';

export default GridFilled12;

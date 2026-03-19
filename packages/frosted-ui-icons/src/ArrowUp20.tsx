import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.0001 1.75L3.49988 8.25014M10.0001 1.75L16.5003 8.25014M10.0001 1.75V18.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUp20.category = 'Arrows';

export default ArrowUp20;

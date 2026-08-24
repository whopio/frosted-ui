import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircleBoldFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM6.75 8.959c-.552 0-1 .448-1 1s.448 1 1 1h6.5c.552 0 1-.448 1-1s-.448-1-1-1h-6.5z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBoldFilled20.category = 'Interface General';

export default MinusCircleBoldFilled20;

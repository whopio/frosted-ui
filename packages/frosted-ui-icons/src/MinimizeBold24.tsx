import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinimizeBold24"
      {...props}
    >
      <path
        d="M10.5 12.5c.552 0 1 .448 1 1V22c0 .552-.448 1-1 1s-1-.448-1-1v-6.086l-6.793 6.793c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L8.086 14.5H2c-.552 0-1-.448-1-1s.448-1 1-1h8.5zM21.293 1.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L15.914 9.5H22c.552 0 1 .448 1 1s-.448 1-1 1h-8.5c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1s1 .448 1 1v6.086l6.793-6.793z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBold24.category = 'Arrows';

export default MinimizeBold24;

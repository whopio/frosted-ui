import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinimizeBold12"
      {...props}
    >
      <path
        d="M5 6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V9.414l-2.293 2.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L2.586 8H1c-.552 0-1-.448-1-1s.448-1 1-1h4zM10.293.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L9.414 4H11c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v1.586L10.293.293z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBold12.category = 'Arrows';

export default MinimizeBold12;

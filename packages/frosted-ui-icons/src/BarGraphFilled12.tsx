import * as React from 'react';
import { IconProps } from './types';

export const BarGraphFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarGraphFilled12"
      {...props}
    >
      <path
        d="M2.5 8c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V9c0-.552.448-1 1-1h1.5zm4.25-8c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1h1.5zM11 4c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1H9.5c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1H11z"
        fill={color}
      />
    </svg>
  );
};

BarGraphFilled12.category = 'Stats & Charts';

export default BarGraphFilled12;

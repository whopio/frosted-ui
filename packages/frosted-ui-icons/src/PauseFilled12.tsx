import * as React from 'react';
import { IconProps } from './types';

export const PauseFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseFilled12"
      {...props}
    >
      <path
        d="M3.5 1c.552 0 1 .448 1 1v8c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1h1zm6 0c.552 0 1 .448 1 1v8c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1h1z"
        fill={color}
      />
    </svg>
  );
};

PauseFilled12.category = 'Sound & Music';

export default PauseFilled12;

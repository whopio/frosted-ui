import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinimizeBold32"
      {...props}
    >
      <path
        d="M14 17c.552 0 1 .448 1 1v12c0 .552-.448 1-1 1s-1-.448-1-1v-9.586L2.707 30.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L11.586 19H2c-.552 0-1-.448-1-1s.448-1 1-1h12zM29.293 1.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.023 0 1.414L20.414 13H30c.552 0 1 .447 1 1 0 .552-.448 1-1 1H18c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1s1 .448 1 1v9.586L29.293 1.293z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBold32.category = 'Arrows';

export default MinimizeBold32;

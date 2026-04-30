import * as React from 'react';
import { IconProps } from './types';

export const PauseCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM4.5 3.5C5.05228 3.5 5.5 3.94772 5.5 4.5V7.5C5.5 8.05228 5.05228 8.5 4.5 8.5C3.94772 8.5 3.5 8.05228 3.5 7.5V4.5C3.5 3.94772 3.94772 3.5 4.5 3.5ZM7.5 3.5C8.05228 3.5 8.5 3.94772 8.5 4.5V7.5C8.5 8.05228 8.05228 8.5 7.5 8.5C6.94772 8.5 6.5 8.05228 6.5 7.5V4.5C6.5 3.94772 6.94772 3.5 7.5 3.5Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircle12.category = 'Sound & Music';

export default PauseCircle12;

import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM5.5 5.96484C5.50008 4.78681 6.78679 4.08324 7.77051 4.67773L7.86523 4.73926L10.748 6.77441C11.5947 7.37204 11.5947 8.62796 10.748 9.22559L7.86523 11.2607C6.87165 11.9621 5.50009 11.2513 5.5 10.0352V5.96484ZM7.5 9.07031L9.01562 8L7.5 6.92871V9.07031Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBold16.category = 'Sound & Music';

export default PlayCircleBold16;

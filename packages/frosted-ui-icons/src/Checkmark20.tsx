import * as React from 'react';
import { IconProps } from './types';

export const Checkmark20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.7119 6.22754C16.0004 5.93041 16.4753 5.92346 16.7725 6.21191C17.0695 6.50042 17.0765 6.97528 16.7881 7.27246L8.53809 15.7725C8.39828 15.9164 8.20654 15.9984 8.00586 16C7.85526 16.0011 7.70857 15.9571 7.58496 15.875L7.46973 15.7803L3.46973 11.7803C3.17683 11.4874 3.17683 11.0126 3.46973 10.7197C3.76262 10.4268 4.23738 10.4268 4.53027 10.7197L7.99121 14.1816L15.7119 6.22754Z"
        fill={color}
      />
    </svg>
  );
};

export default Checkmark20;

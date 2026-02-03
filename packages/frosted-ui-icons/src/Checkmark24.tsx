import * as React from 'react';
import { IconProps } from './types';

export const Checkmark24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.7139 6.22559C20.0035 5.92951 20.4783 5.92424 20.7744 6.21387C21.0704 6.50352 21.0757 6.97833 20.7861 7.27441L9.53613 18.7744C9.39605 18.9176 9.20422 18.9989 9.00391 19C8.85389 19.0008 8.7081 18.9568 8.58496 18.875L8.46973 18.7803L3.46973 13.7803C3.17683 13.4874 3.17683 13.0126 3.46973 12.7197C3.76262 12.4268 4.23738 12.4268 4.53027 12.7197L8.99316 17.1836L19.7139 6.22559Z"
        fill={color}
      />
    </svg>
  );
};

export default Checkmark24;

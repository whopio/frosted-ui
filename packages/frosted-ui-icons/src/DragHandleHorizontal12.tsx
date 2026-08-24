import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontal12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DragHandleHorizontal12"
      {...props}
    >
      <path
        d="M9 8c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm0-4c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zM5 8c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm0-4c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zM1 8c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm0-4c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1z"
        fill={color}
      />
    </svg>
  );
};

DragHandleHorizontal12.category = 'Interface General';

export default DragHandleHorizontal12;

import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontal20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DragHandleHorizontal20"
      {...props}
    >
      <path
        d="M14.5 13c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm0-6c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm-6 6c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm0-6c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5S8.5 7.828 8.5 7zm-6 6c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm0-6c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S4.828 8.5 4 8.5 2.5 7.828 2.5 7z"
        fill={color}
      />
    </svg>
  );
};

DragHandleHorizontal20.category = 'Interface General';

export default DragHandleHorizontal20;

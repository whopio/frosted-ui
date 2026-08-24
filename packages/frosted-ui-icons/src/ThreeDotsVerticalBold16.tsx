import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalBold16"
      {...props}
    >
      <path
        d="M6.5 13.25c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM6.5 8c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S8.828 9.5 8 9.5 6.5 8.828 6.5 8zm0-5.25c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold16.category = 'Interface General';

export default ThreeDotsVerticalBold16;

import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontalBold16"
      {...props}
    >
      <path
        d="M2.75 6.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM8 6.5c.828 0 1.5.672 1.5 1.5S8.828 9.5 8 9.5 6.5 8.828 6.5 8 7.172 6.5 8 6.5zm5.25 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold16.category = 'Interface General';

export default ThreeDotsHorizontalBold16;

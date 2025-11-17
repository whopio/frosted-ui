import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="8" cy="13" r="1" transform="rotate(180 8 13)" fill={color} />
      <circle cx="8" cy="8" r="1" transform="rotate(180 8 8)" fill={color} />
      <circle cx="8" cy="3" r="1" transform="rotate(180 8 3)" fill={color} />
    </svg>
  );
};

export default ThreeDotsVertical16;

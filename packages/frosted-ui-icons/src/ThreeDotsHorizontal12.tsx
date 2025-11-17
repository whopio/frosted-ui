import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="2" cy="6" r="1" transform="rotate(-90 2 6)" fill={color} />
      <circle cx="6" cy="6" r="1" transform="rotate(-90 6 6)" fill={color} />
      <circle cx="10" cy="6" r="1" transform="rotate(-90 10 6)" fill={color} />
    </svg>
  );
};

export default ThreeDotsHorizontal12;

import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <circle cx="3" cy="8" r="1" transform="rotate(-90 3 8)" fill={color} />
      <circle cx="8" cy="8" r="1" transform="rotate(-90 8 8)" fill={color} />
      <circle cx="13" cy="8" r="1" transform="rotate(-90 13 8)" fill={color} />
    </svg>
  );
};

export default ThreeDotsHorizontal16;

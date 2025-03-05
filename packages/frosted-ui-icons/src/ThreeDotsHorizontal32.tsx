import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle
        cx="25.25"
        cy="16.25"
        r="1.25"
        transform="rotate(-90 25.25 16.25)"
        fill={color}
      />
      <circle
        cx="16.25"
        cy="16.25"
        r="1.25"
        transform="rotate(-90 16.25 16.25)"
        fill={color}
      />
      <circle
        cx="7.25"
        cy="16.25"
        r="1.25"
        transform="rotate(-90 7.25 16.25)"
        fill={color}
      />
    </svg>
  );
};

export default ThreeDotsHorizontal32;

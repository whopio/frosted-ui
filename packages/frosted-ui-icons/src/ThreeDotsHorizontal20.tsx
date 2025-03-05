import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <circle cx="4" cy="10" r="1" transform="rotate(-90 4 10)" fill={color} />
      <circle
        cx="10"
        cy="10"
        r="1"
        transform="rotate(-90 10 10)"
        fill={color}
      />
      <circle
        cx="16"
        cy="10"
        r="1"
        transform="rotate(-90 16 10)"
        fill={color}
      />
    </svg>
  );
};

export default ThreeDotsHorizontal20;

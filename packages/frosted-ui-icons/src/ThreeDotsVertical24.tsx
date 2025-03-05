import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <circle
        cx="12.25"
        cy="20.25"
        r="1.25"
        transform="rotate(180 12.25 20.25)"
        fill={color}
      />
      <circle
        cx="12.25"
        cy="12.25"
        r="1.25"
        transform="rotate(180 12.25 12.25)"
        fill={color}
      />
      <circle
        cx="12.25"
        cy="4.25"
        r="1.25"
        transform="rotate(180 12.25 4.25)"
        fill={color}
      />
    </svg>
  );
};

export default ThreeDotsVertical24;

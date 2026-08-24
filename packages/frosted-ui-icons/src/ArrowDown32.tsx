import * as React from 'react';
import { IconProps } from './types';

export const ArrowDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDown32"
      {...props}
    >
      <path
        d="M27.47 18.78L16 30.25 4.532 18.78m11.47 11.47V1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDown32.category = 'Arrows';

export default ArrowDown32;

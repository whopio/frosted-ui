import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M16.0008 29.75L5.25073 19M16.0008 29.75L26.7507 19M16.0008 29.75V2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownFilled32.category = 'Arrows';

export default ArrowDownFilled32;

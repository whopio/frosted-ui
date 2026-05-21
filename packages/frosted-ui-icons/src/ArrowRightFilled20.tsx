import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M11.2498 16.5001L17.75 9.9999L11.2498 3.49976M17.75 9.9999H2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightFilled20.category = 'Arrows';

export default ArrowRightFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25024 9.9999L8.75049 3.49976M2.25024 9.9999L8.75049 16.5001M2.25024 9.9999H17.7502"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftFilled20.category = 'Arrows';

export default ArrowLeftFilled20;

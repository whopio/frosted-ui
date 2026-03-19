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
        d="M17.7502 9.9999L11.25 3.49976M17.7502 9.9999L11.25 16.5001M17.7502 9.9999H2.25024"
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

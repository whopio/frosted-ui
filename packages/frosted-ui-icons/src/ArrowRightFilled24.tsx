import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRightFilled24"
      {...props}
    >
      <path
        d="M14.001 19.75l7.75-7.75-7.75-7.75m7.75 7.75h-19.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightFilled24.category = 'Arrows';

export default ArrowRightFilled24;

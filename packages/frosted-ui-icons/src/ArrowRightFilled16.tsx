import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M13.75 7.99994L8.25006 2.50011M13.75 7.99994L8.25006 13.4999M13.75 7.99994L2.25 7.99994"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightFilled16.category = 'Arrows';

export default ArrowRightFilled16;

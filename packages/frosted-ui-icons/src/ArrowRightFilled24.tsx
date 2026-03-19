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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.7507 12L14.0007 4.25M21.7507 12L14.0007 19.7499M21.7507 12H2.25073"
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

import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25073 12L10.0007 4.25M2.25073 12L10.0007 19.7499M2.25073 12H21.7507"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftFilled24.category = 'Arrows';

export default ArrowLeftFilled24;

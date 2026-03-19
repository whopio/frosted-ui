import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.75 9.75V3.25M9.75 9.75H3.25M9.75 9.75L2.25 2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightFilled12.category = 'Arrows';

export default ArrowDownRightFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const ReplyBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11 10C11 7 10.5 4 6 4V1.94907C6 1.77592 5.79491 1.68458 5.66621 1.80041L1.33035 5.70268C1.1538 5.86158 1.1538 6.13842 1.33035 6.29732L5.66621 10.1996C5.79491 10.3154 6 10.2241 6 10.0509V8C8 8 9.25 8 11 10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBold12.category = 'Arrows';

export default ReplyBold12;

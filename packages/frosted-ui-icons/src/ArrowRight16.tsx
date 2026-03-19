import * as React from 'react';
import { IconProps } from './types';

export const ArrowRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.25 8.00006L9 2.75M14.25 8.00006L9 13.25M14.25 8.00006H1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight16.category = 'Arrows';

export default ArrowRight16;

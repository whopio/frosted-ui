import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75 8.00006L7 2.75M1.75 8.00006L7 13.25M1.75 8.00006H14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeft16.category = 'Arrows';

export default ArrowLeft16;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00006 1.75L2.75 7M8.00006 1.75L13.25 7M8.00006 1.75V14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUp16.category = 'Arrows';

export default ArrowUp16;

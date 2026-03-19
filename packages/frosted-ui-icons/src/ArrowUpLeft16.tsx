import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.74998 2.74999V11.25M2.74998 2.74999H11.25M2.74998 2.74999L13.25 13.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft16.category = 'Arrows';

export default ArrowUpLeft16;

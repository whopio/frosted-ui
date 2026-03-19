import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.74998 13.25V4.75002M2.74998 13.25H11.25M2.74998 13.25L13.25 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeft16.category = 'Arrows';

export default ArrowDownLeft16;

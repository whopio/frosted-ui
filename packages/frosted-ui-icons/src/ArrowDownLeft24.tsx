import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.74998 21.25L2.74999 8.75001M2.74998 21.25L15.25 21.25M2.74998 21.25L21.25 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeft24.category = 'Arrows';

export default ArrowDownLeft24;

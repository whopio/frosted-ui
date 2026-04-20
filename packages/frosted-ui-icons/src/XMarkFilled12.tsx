import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.00003 6.00001L1.25 10.75M6.00003 6.00001L1.25 1.25M6.00003 6.00001L10.75 1.25M6.00003 6.00001L10.75 10.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMarkFilled12.category = 'Interface General';

export default XMarkFilled12;

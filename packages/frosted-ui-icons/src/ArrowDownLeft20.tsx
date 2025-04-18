import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.1265 4.87369L4.87345 15.1267M4.87345 15.1267L5.05022 7.52534M4.87345 15.1267L12.4748 14.95"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownLeft20;

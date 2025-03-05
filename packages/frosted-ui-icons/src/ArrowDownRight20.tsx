import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight20 = ({
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
        d="M4.87344 4.87363L15.1265 15.1267M15.1265 15.1267L7.52509 14.9499M15.1265 15.1267L14.9497 7.52528"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownRight20;

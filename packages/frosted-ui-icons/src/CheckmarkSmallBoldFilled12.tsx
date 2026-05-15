import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.11653 3.36582C8.60464 2.878 9.39602 2.87796 9.88411 3.36582C10.3721 3.85389 10.372 4.64524 9.88411 5.13339L5.88411 9.13339C5.39597 9.62153 4.60469 9.62149 4.11653 9.13339L2.11653 7.13339C1.62852 6.64523 1.62842 5.85392 2.11653 5.36582C2.60466 4.87796 3.39602 4.87789 3.88411 5.36582L5.00032 6.48203L8.11653 3.36582Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled12.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled12;

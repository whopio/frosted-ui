import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.2508 0.999969C0.560665 1.00021 0.000835393 1.55974 0.000835393 2.24993V6.31231C0.000835393 7.52025 0.980385 8.4995 2.18827 8.49974H7.78575L7.41858 8.87668C6.93706 9.37076 6.94649 10.1623 7.44006 10.6442C7.93412 11.1259 8.7256 11.1164 9.20759 10.6227L11.645 8.1228C12.1183 7.63734 12.1183 6.86221 11.645 6.37676L9.20759 3.87683C8.7256 3.3832 7.93412 3.37364 7.44006 3.85535C6.94649 4.33727 6.93706 5.1288 7.41858 5.62288L7.78575 5.99982H2.50076V2.24993C2.50076 1.5596 1.94113 0.999969 1.2508 0.999969Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightFilled12.category = 'Arrows';

export default ArrowDownAngleRightFilled12;

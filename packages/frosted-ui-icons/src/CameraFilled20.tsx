import * as React from 'react';
import { IconProps } from './types';

export const CameraFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CameraFilled20"
      {...props}
    >
      <path
        d="M11.895 1c1.253 0 2.424.627 3.12 1.67l.432.648c.284.426.761.682 1.273.682 1.673 0 3.03 1.357 3.03 3.03v8.22c0 2.071-1.679 3.75-3.75 3.75H4C1.929 19 .25 17.321.25 15.25V7.03C.25 5.357 1.607 4 3.28 4c.512 0 .99-.256 1.273-.682l.432-.648C5.681 1.627 6.852 1 8.105 1h3.79zM10 6.5c-2.347 0-4.25 1.903-4.25 4.25S7.653 15 10 15s4.25-1.903 4.25-4.25S12.347 6.5 10 6.5zM10 8c1.519 0 2.75 1.231 2.75 2.75S11.519 13.5 10 13.5s-2.75-1.231-2.75-2.75S8.481 8 10 8z"
        fill={color}
      />
    </svg>
  );
};

CameraFilled20.category = 'Interface General';

export default CameraFilled20;

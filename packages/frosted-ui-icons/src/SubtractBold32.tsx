import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBold32"
      {...props}
    >
      <path
        d="M30 15C30.5523 15 31 15.4477 31 16C31 16.5523 30.5523 17 30 17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H30Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBold32.category = 'Interface General';

export default SubtractBold32;

import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold32"
      {...props}
    >
      <path
        d="M24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17H8C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15H24Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBold32.category = 'Interface General';

export default SubtractSmallBold32;

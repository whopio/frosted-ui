import * as React from 'react';
import { IconProps } from './types';

export const DotFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6Z"
        fill={color}
      />
    </svg>
  );
};

DotFilled12.category = 'Interface General';

export default DotFilled12;

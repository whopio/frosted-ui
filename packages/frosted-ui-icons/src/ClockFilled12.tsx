import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClockFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm-.25 3c-.414 0-.75.336-.75.75V6.5c0 .284.161.544.415.67l1.5.75c.37.186.82.035 1.006-.335.185-.37.034-.82-.336-1.006L6.5 6.036V3.75c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ClockFilled12.category = 'Interface General';

export default ClockFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.99998 6.00001L0.999995 11M5.99998 6.00001L0.999993 1.00001M5.99998 6.00001L11 1.00001M5.99998 6.00001L11 11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMarkBold12.category = 'Interface General';

export default XMarkBold12;

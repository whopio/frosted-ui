import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.5 2.5L8.00004 8M13.5 13.5L8.00004 8M8.00004 8L2.5 13.5M8.00004 8L13.5 2.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBoldFilled16.category = 'Interface General';

export default XMarkBoldFilled16;

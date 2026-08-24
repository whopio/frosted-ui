import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightBold32"
      {...props}
    >
      <path
        d="M10 3l12.526 12.526c.262.262.262.686 0 .948L10 29"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold32.category = 'Arrows';

export default ChevronRightBold32;

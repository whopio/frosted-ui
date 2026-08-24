import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightBoldFilled32"
      {...props}
    >
      <path
        d="M10 3.5l12.026 12.026c.262.262.262.686 0 .948L10 28.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled32.category = 'Arrows';

export default ChevronRightBoldFilled32;

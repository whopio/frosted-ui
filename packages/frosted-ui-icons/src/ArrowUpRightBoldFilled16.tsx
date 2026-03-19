import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.75 3.24999L12.75 11.75M12.75 3.24999L4.25 3.24999M12.75 3.24999L3.25 12.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBoldFilled16.category = 'Arrows';

export default ArrowUpRightBoldFilled16;

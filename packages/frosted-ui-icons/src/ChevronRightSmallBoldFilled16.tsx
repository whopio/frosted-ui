import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightSmallBoldFilled16"
      {...props}
    >
      <path
        d="M6.267 4.54l3.23 3.231c.13.13.13.341 0 .471l-3.23 3.231"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmallBoldFilled16.category = 'Arrows';

export default ChevronRightSmallBoldFilled16;

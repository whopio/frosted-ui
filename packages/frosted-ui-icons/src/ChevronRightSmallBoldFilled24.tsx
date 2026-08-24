import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightSmallBoldFilled24"
      {...props}
    >
      <path
        d="M9.375 6.75l4.896 4.896c.196.196.196.512 0 .708L9.375 17.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmallBoldFilled24.category = 'Arrows';

export default ChevronRightSmallBoldFilled24;

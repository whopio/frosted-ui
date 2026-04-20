import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.125 5.75L8.16954 9.70545C8.00683 9.86817 8.00683 10.132 8.16954 10.2947L12.125 14.2502"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftSmallBoldFilled20.category = 'Arrows';

export default ChevronLeftSmallBoldFilled20;

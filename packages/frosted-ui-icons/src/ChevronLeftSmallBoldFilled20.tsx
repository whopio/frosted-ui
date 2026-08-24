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
      data-fui-icon="ChevronLeftSmallBoldFilled20"
      {...props}
    >
      <path
        d="M12.125 5.75L8.17 9.705c-.163.163-.163.427 0 .59l3.955 3.955"
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

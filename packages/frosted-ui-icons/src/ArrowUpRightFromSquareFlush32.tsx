import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFlush32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.3333 5H9.26667C7.7732 5 7.02645 5 6.45603 5.29065C5.95425 5.54631 5.54631 5.95425 5.29065 6.45603C5 7.02645 5 7.7732 5 9.26667V22.7333C5 24.2268 5 24.9736 5.29065 25.544C5.54631 26.0457 5.95425 26.4537 6.45603 26.7093C7.02645 27 7.7732 27 9.26667 27H22.7333C24.2268 27 24.9736 27 25.544 26.7093C26.0457 26.4537 26.4537 26.0457 26.7093 25.544C27 24.9736 27 24.2268 27 22.7333V19.6667M18.3333 5H27M27 5V13.6667M27 5L14.6667 17.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquareFlush32;

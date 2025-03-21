import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare32 = ({
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
        d="M24.3333 18.6667V22.7333C24.3333 24.2268 24.3333 24.9736 24.0427 25.544C23.7871 26.0457 23.3791 26.4537 22.8773 26.7093C22.3069 27 21.5601 27 20.0667 27H9.26667C7.7732 27 7.02645 27 6.45603 26.7093C5.95425 26.4537 5.54631 26.0457 5.29065 25.544C5 24.9736 5 24.2268 5 22.7333V11.8333C5 10.4341 5 9.73451 5.25603 9.19319C5.51981 8.63547 5.9688 8.18648 6.52652 7.92269C7.06784 7.66667 7.76745 7.66667 9.16667 7.66667H12.3333M18.3333 5H27M27 5V13.6667M27 5L14.6667 17.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquare32;

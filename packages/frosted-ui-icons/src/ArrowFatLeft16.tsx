import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.47791 5.25H13.3953C13.8674 5.25 14.25 5.63264 14.25 6.10465V9.89535C14.25 10.3674 13.8674 10.75 13.3953 10.75H8.47791C8.35204 10.75 8.25 10.852 8.25 10.9779V13.2461C8.25 13.5399 7.90389 13.6968 7.68289 13.5033L1.98718 8.51432C1.67622 8.24194 1.67622 7.75806 1.98718 7.48568L7.68289 2.49674C7.90389 2.30316 8.25 2.4601 8.25 2.7539V5.02209C8.25 5.14796 8.35204 5.25 8.47791 5.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeft16.category = 'Arrows';

export default ArrowFatLeft16;

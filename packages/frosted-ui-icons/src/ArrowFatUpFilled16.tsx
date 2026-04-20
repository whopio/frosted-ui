import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.25 8.47791V13.3953C5.25 13.8674 5.63264 14.25 6.10465 14.25H9.89535C10.3674 14.25 10.75 13.8674 10.75 13.3953V8.47791C10.75 8.35204 10.852 8.25 10.9779 8.25H13.2461C13.5399 8.25 13.6968 7.90389 13.5033 7.68289L8.51432 1.98718C8.24194 1.67622 7.75806 1.67622 7.48568 1.98718L2.49674 7.68289C2.30316 7.90389 2.4601 8.25 2.7539 8.25H5.02209C5.14796 8.25 5.25 8.35204 5.25 8.47791Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpFilled16.category = 'Arrows';

export default ArrowFatUpFilled16;

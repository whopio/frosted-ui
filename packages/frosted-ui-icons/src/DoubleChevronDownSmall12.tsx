import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.07026 6.21972C8.36317 5.92706 8.83799 5.92691 9.1308 6.21972C9.42324 6.51257 9.42334 6.98748 9.1308 7.28027L6.70697 9.70312C6.31654 10.0935 5.68345 10.0934 5.29291 9.70312L2.87006 7.28027C2.57717 6.98738 2.57717 6.51262 2.87006 6.21972C3.16296 5.92697 3.63776 5.92688 3.93061 6.21972L5.99994 8.28906L8.07026 6.21972ZM8.07026 2.21972C8.36317 1.92706 8.83799 1.92691 9.1308 2.21972C9.42324 2.51257 9.42334 2.98748 9.1308 3.28027L6.70697 5.70312C6.31654 6.09353 5.68345 6.09335 5.29291 5.70312L2.87006 3.28027C2.57717 2.98738 2.57717 2.51262 2.87006 2.21972C3.16296 1.92697 3.63776 1.92688 3.93061 2.21972L5.99994 4.28906L8.07026 2.21972Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmall12.category = 'Arrows';

export default DoubleChevronDownSmall12;

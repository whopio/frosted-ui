import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.07026 5.77628C8.36317 6.06894 8.83799 6.0691 9.1308 5.77628C9.42324 5.48343 9.42334 5.00852 9.1308 4.71573L6.70697 2.29288C6.31654 1.90247 5.68345 1.90265 5.29291 2.29288L2.87006 4.71573C2.57717 5.00863 2.57717 5.48339 2.87006 5.77628C3.16296 6.06903 3.63776 6.06913 3.93061 5.77628L5.99994 3.70694L8.07026 5.77628ZM8.07026 9.77628C8.36317 10.0689 8.83799 10.0691 9.1308 9.77628C9.42324 9.48343 9.42334 9.00852 9.1308 8.71573L6.70697 6.29288C6.31654 5.90247 5.68345 5.90265 5.29291 6.29288L2.87006 8.71573C2.57717 9.00863 2.57717 9.48339 2.87006 9.77628C3.16296 10.069 3.63776 10.0691 3.93061 9.77628L5.99994 7.70694L8.07026 9.77628Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall12.category = 'Arrows';

export default DoubleChevronUpSmall12;

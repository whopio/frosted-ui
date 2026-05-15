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
        d="M8.07026 6.2196C8.36317 5.92694 8.83799 5.92678 9.1308 6.2196C9.42324 6.51245 9.42334 6.98736 9.1308 7.28015L6.70697 9.703C6.31654 10.0934 5.68345 10.0932 5.29291 9.703L2.87006 7.28015C2.57717 6.98725 2.57717 6.51249 2.87006 6.2196C3.16296 5.92685 3.63776 5.92675 3.93061 6.2196L5.99994 8.28894L8.07026 6.2196ZM8.07026 2.2196C8.36317 1.92694 8.83799 1.92678 9.1308 2.2196C9.42324 2.51245 9.42334 2.98736 9.1308 3.28015L6.70697 5.703C6.31654 6.09341 5.68345 6.09323 5.29291 5.703L2.87006 3.28015C2.57717 2.98725 2.57717 2.51249 2.87006 2.2196C3.16296 1.92685 3.63776 1.92675 3.93061 2.2196L5.99994 4.28894L8.07026 2.2196Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmall12.category = 'Arrows';

export default DoubleChevronDownSmall12;

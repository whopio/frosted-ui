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
        d="M8.07026 5.77631C8.36317 6.06897 8.83799 6.06913 9.1308 5.77631C9.42324 5.48346 9.42334 5.00855 9.1308 4.71576L6.70697 2.29291C6.31654 1.9025 5.68345 1.90268 5.29291 2.29291L2.87006 4.71576C2.57717 5.00866 2.57717 5.48342 2.87006 5.77631C3.16296 6.06906 3.63776 6.06916 3.93061 5.77631L5.99994 3.70697L8.07026 5.77631ZM8.07026 9.77631C8.36317 10.069 8.83799 10.0691 9.1308 9.77631C9.42324 9.48346 9.42334 9.00855 9.1308 8.71576L6.70697 6.29291C6.31654 5.9025 5.68345 5.90268 5.29291 6.29291L2.87006 8.71576C2.57717 9.00866 2.57717 9.48342 2.87006 9.77631C3.16296 10.0691 3.63776 10.0692 3.93061 9.77631L5.99994 7.70697L8.07026 9.77631Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall12.category = 'Arrows';

export default DoubleChevronUpSmall12;

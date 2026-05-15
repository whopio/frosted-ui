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
        d="M8.07026 5.77625C8.36317 6.06891 8.83799 6.06907 9.1308 5.77625C9.42324 5.4834 9.42334 5.00849 9.1308 4.7157L6.70697 2.29285C6.31654 1.90244 5.68345 1.90262 5.29291 2.29285L2.87006 4.7157C2.57717 5.00859 2.57717 5.48336 2.87006 5.77625C3.16296 6.069 3.63776 6.0691 3.93061 5.77625L5.99994 3.70691L8.07026 5.77625ZM8.07026 9.77625C8.36317 10.0689 8.83799 10.0691 9.1308 9.77625C9.42324 9.4834 9.42334 9.00849 9.1308 8.7157L6.70697 6.29285C6.31654 5.90244 5.68345 5.90262 5.29291 6.29285L2.87006 8.7157C2.57717 9.0086 2.57717 9.48336 2.87006 9.77625C3.16296 10.069 3.63776 10.0691 3.93061 9.77625L5.99994 7.70691L8.07026 9.77625Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall12.category = 'Arrows';

export default DoubleChevronUpSmall12;

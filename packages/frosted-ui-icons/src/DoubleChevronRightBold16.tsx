import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBold16"
      {...props}
    >
      <path
        d="M7.442 2.708c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0l5.743 5.743c.532.532.532 1.395 0 1.927l-5.743 5.743c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l5.292-5.292-5.292-5.293zm-6.149 0c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0l5.744 5.743c.532.532.532 1.395 0 1.927l-5.744 5.743c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.023 0-1.414l5.292-5.292-5.292-5.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold16.category = 'Arrows';

export default DoubleChevronRightBold16;

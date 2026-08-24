import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftBold16"
      {...props}
    >
      <path
        d="M8.557 2.708c.39-.39.39-1.023 0-1.414-.39-.39-1.024-.39-1.414 0L1.4 7.037c-.532.532-.532 1.395 0 1.927l5.743 5.743c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L3.265 8.001l5.292-5.293zm6.148 0c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0L7.548 7.037c-.532.532-.532 1.395 0 1.927l5.743 5.743c.39.39 1.024.39 1.414 0 .39-.39.39-1.023 0-1.414L9.413 8.001l5.292-5.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold16.category = 'Arrows';

export default DoubleChevronLeftBold16;

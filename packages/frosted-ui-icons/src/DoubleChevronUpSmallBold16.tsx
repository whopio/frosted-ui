import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallBold16"
      {...props}
    >
      <path
        d="M10.676 7.952c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L8.943 3.39c-.52-.52-1.365-.52-1.886 0L3.91 6.538c-.39.39-.39 1.023 0 1.414.39.39 1.023.39 1.414 0l2.675-2.676 2.677 2.676zm0 4.75c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L8.943 8.14c-.52-.52-1.365-.52-1.886 0L3.91 11.288c-.39.39-.39 1.024 0 1.414.39.39 1.023.39 1.414 0l2.675-2.676 2.677 2.676z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBold16.category = 'Arrows';

export default DoubleChevronUpSmallBold16;

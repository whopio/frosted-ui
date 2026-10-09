import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronBold16"
      {...props}
    >
      <path
        d="M11.544 10.043c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-4.25 4.25c-.39.39-1.024.39-1.414 0l-4.25-4.25c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L8 13.586l3.543-3.543zM7.293.293c.39-.39 1.023-.39 1.414 0l4.25 4.25c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L8 2.414 4.457 5.957c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l4.25-4.25z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronBold16.category = 'Arrows';

export default DoubleChevronBold16;

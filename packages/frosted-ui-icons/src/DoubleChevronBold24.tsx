import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronBold24"
      {...props}
    >
      <path
        d="M18.293 15.293c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-7 7c-.39.39-1.024.39-1.414 0l-7-7c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L12 21.586l6.293-6.293zm-7-15c.39-.39 1.024-.39 1.414 0l7 7c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L12 2.414 5.707 8.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l7-7z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronBold24.category = 'Arrows';

export default DoubleChevronBold24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBold24"
      {...props}
    >
      <path
        d="M16.293 11.543c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-4.646 4.647c-.586.585-1.535.585-2.121 0l-4.647-4.647c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0L12 15.836l4.293-4.293zm0-5.25c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-4.646 4.647c-.586.585-1.535.585-2.121 0L6.293 7.707c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0L12 10.586l4.293-4.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBold24.category = 'Arrows';

export default DoubleChevronDownSmallBold24;

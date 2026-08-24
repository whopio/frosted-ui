import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBold20"
      {...props}
    >
      <path
        d="M10.205 6.539c.39-.39.39-1.024 0-1.415-.39-.39-1.023-.39-1.414 0L4.917 8.996c-.553.553-.553 1.451 0 2.004l3.874 3.871c.39.39 1.024.39 1.414 0 .39-.39.39-1.023 0-1.414l-3.46-3.459 3.46-3.46zm5 0c.39-.39.39-1.024 0-1.415-.39-.39-1.023-.39-1.414 0L9.917 8.996c-.553.553-.553 1.451 0 2.004l3.874 3.871c.39.39 1.024.39 1.414 0 .39-.39.39-1.023 0-1.414l-3.46-3.459 3.46-3.46z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold20.category = 'Arrows';

export default DoubleChevronLeftSmallBold20;

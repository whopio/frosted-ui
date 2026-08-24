import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBold12"
      {...props}
    >
      <path
        d="M7.893 6.543c.391-.39 1.024-.39 1.415 0 .39.39.39 1.023 0 1.414L6.884 10.38c-.488.488-1.28.488-1.768 0L2.693 7.957c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L6 8.435l1.893-1.892zm0-5c.391-.39 1.024-.39 1.415 0 .39.39.39 1.023 0 1.414L6.884 5.38c-.488.488-1.28.488-1.768 0L2.693 2.957c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L6 3.435l1.893-1.892z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBold12.category = 'Arrows';

export default DoubleChevronDownSmallBold12;

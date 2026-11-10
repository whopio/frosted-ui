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
        d="M7.894 6.543c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414L6.884 10.38c-.488.488-1.28.488-1.768 0L2.693 7.957c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L6 8.436l1.894-1.893zm0-5c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414L6.884 5.38c-.488.488-1.28.488-1.768 0L2.693 2.957c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L6 3.436l1.894-1.893z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownSmallBold12.category = 'Arrows';

export default DoubleChevronDownSmallBold12;

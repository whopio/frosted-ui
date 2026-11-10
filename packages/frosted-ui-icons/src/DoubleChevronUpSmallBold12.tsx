import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallBold12"
      {...props}
    >
      <path
        d="M7.894 5.453c.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414L6.884 1.616c-.488-.488-1.28-.488-1.768 0L2.693 4.039c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L6 3.56l1.894 1.893zm0 5c.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414L6.884 6.616c-.488-.488-1.28-.488-1.768 0L2.693 9.039c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L6 8.56l1.894 1.893z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallBold12.category = 'Arrows';

export default DoubleChevronUpSmallBold12;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownBold20"
      {...props}
    >
      <path
        d="M17.293 8.443c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-7.661 7.662c-.578.577-1.514.577-2.092 0L1.293 9.857c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0L10 15.736l7.293-7.293zm0-6.146c.39-.39 1.024-.39 1.414 0 .39.39.39 1.023 0 1.414l-7.661 7.661c-.578.578-1.514.578-2.092 0L1.293 3.711c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L10 9.59l7.293-7.293z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownBold20.category = 'Arrows';

export default DoubleChevronDownBold20;

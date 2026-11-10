import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBold20"
      {...props}
    >
      <path
        d="M8.465 2.685c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.391 1.414 0l7.662 7.66c.577.578.577 1.515 0 2.092l-7.662 7.662c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.415l7.293-7.292-7.293-7.293zm-6.146 0c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.391 1.414 0l7.661 7.66c.577.578.578 1.515 0 2.092l-7.661 7.662c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.415l7.293-7.292-7.293-7.293z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightBold20.category = 'Arrows';

export default DoubleChevronRightBold20;

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
        d="M17.293 8.443c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-7.661 7.661c-.578.578-1.515.578-2.092 0l-7.661-7.66c-.39-.391-.39-1.024 0-1.415.39-.39 1.023-.39 1.414 0L10 15.736l7.293-7.293zm0-6.146c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414l-7.661 7.66c-.578.578-1.515.579-2.092 0l-7.661-7.66c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L10 9.59l7.293-7.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold20.category = 'Arrows';

export default DoubleChevronDownBold20;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmallFilled32"
      {...props}
    >
      <path
        d="M15.102 10.31c-.487-.488-.485-1.28.004-1.767.49-.487 1.28-.485 1.767.004l6.086 6.112c.745.748.745 1.958 0 2.706l-6.086 6.112c-.487.49-1.278.49-1.767.004-.49-.487-.491-1.279-.004-1.768l5.676-5.7-5.676-5.702zm-6.256 0c-.487-.488-.485-1.28.004-1.767.49-.487 1.28-.485 1.768.004l6.085 6.112c.745.748.745 1.958 0 2.706l-6.085 6.112c-.488.49-1.279.49-1.768.004-.49-.487-.491-1.279-.004-1.768l5.676-5.7-5.676-5.702z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled32.category = 'Arrows';

export default DoubleChevronRightSmallFilled32;

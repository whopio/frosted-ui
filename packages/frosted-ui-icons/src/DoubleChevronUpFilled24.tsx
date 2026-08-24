import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpFilled24"
      {...props}
    >
      <path
        d="M20.866 14.137c.488.488 1.28.489 1.768 0 .488-.488.488-1.28 0-1.767l-9.329-9.328c-.722-.722-1.893-.723-2.615 0L1.366 12.37c-.488.488-.488 1.28 0 1.767.488.488 1.28.488 1.768 0l8.864-8.867 8.868 8.867zm0 7c.488.488 1.28.488 1.768 0s.488-1.28 0-1.767l-9.329-9.328c-.722-.722-1.893-.722-2.615 0L1.366 19.37c-.488.488-.488 1.28 0 1.767.488.488 1.28.488 1.768 0l8.864-8.867 8.868 8.867z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpFilled24.category = 'Arrows';

export default DoubleChevronUpFilled24;

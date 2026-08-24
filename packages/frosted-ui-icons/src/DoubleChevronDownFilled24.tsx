import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownFilled24"
      {...props}
    >
      <path
        d="M20.866 9.866c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-9.329 9.328c-.722.722-1.893.722-2.615 0l-9.324-9.328c-.488-.489-.488-1.28 0-1.768s1.28-.488 1.768 0l8.864 8.867 8.868-8.867zm0-7c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-9.329 9.328c-.722.722-1.893.722-2.615 0L1.366 4.634c-.488-.489-.488-1.28 0-1.768s1.28-.488 1.768 0l8.864 8.867 8.868-8.867z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownFilled24.category = 'Arrows';

export default DoubleChevronDownFilled24;

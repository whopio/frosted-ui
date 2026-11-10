import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownFilled20"
      {...props}
    >
      <path
        d="M16.87 8.866c.489-.488 1.28-.488 1.768 0 .488.489.488 1.28 0 1.768l-7.415 7.415c-.675.675-1.77.674-2.445 0l-7.411-7.415c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.767 0l6.867 6.87 6.87-6.87zm0-7c.489-.488 1.28-.488 1.768 0 .488.489.488 1.28 0 1.768l-7.415 7.415c-.675.675-1.77.674-2.445 0L1.367 3.633c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.767 0l6.867 6.87 6.87-6.87z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownFilled20.category = 'Arrows';

export default DoubleChevronDownFilled20;

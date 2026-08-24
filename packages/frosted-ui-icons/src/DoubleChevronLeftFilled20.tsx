import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftFilled20"
      {...props}
    >
      <path
        d="M11.163 3.16c.488-.489.488-1.28 0-1.768s-1.28-.488-1.767 0L1.98 8.807c-.675.675-.675 1.77 0 2.445l7.415 7.411c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.768L4.294 10.03l6.87-6.87zm7 0c.488-.489.488-1.28 0-1.768s-1.28-.488-1.767 0L8.98 8.807c-.675.675-.675 1.77 0 2.445l7.415 7.411c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.768l-6.869-6.866 6.87-6.87z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftFilled20.category = 'Arrows';

export default DoubleChevronLeftFilled20;

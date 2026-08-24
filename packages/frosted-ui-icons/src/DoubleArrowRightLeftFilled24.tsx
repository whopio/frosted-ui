import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftFilled24"
      {...props}
    >
      <path
        d="M6.116 12.365c.488-.487 1.28-.487 1.768 0 .488.488.488 1.28 0 1.769L5.269 16.75l16.481-.001c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25l-16.482.001 2.616 2.616c.488.488.488 1.28 0 1.768s-1.28.488-1.768 0l-4.75-4.75c-.488-.488-.488-1.28 0-1.768l4.75-4.75zm10-11.999c.488-.488 1.28-.488 1.768 0l4.75 4.751c.488.488.488 1.28 0 1.768l-4.75 4.75c-.488.488-1.28.487-1.768 0-.488-.488-.488-1.28 0-1.768l2.616-2.616L2.25 7.25C1.56 7.25 1 6.69 1 6s.56-1.25 1.25-1.25l16.482.001-2.616-2.617c-.488-.488-.488-1.28 0-1.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftFilled24.category = 'Arrows';

export default DoubleArrowRightLeftFilled24;

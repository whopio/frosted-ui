import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRightFilled24"
      {...props}
    >
      <path
        d="M17.884 12.366c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l2.615 2.616H2.25C1.56 16.75 1 17.31 1 18s.56 1.25 1.25 1.25h16.482l-2.616 2.616c-.488.489-.488 1.28 0 1.768s1.28.488 1.768 0l4.75-4.75c.488-.488.488-1.28 0-1.768l-4.75-4.75zm-10-12c-.488-.488-1.28-.488-1.768 0l-4.75 4.75c-.488.489-.488 1.28 0 1.768l4.75 4.75c.488.488 1.28.488 1.768 0s.488-1.28 0-1.768L5.268 7.25H21.75C22.44 7.25 23 6.69 23 6s-.56-1.25-1.25-1.25H5.268l2.616-2.617c.488-.488.488-1.28 0-1.768z"
        fill={color}
      />
    </svg>
  );
};

DoubleArrowLeftRightFilled24.category = 'Arrows';

export default DoubleArrowLeftRightFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownFilled24"
      {...props}
    >
      <path
        d="M12.366 17.884c-.488-.488-.488-1.28 0-1.768s1.28-.487 1.768 0l2.616 2.616V2.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v16.483l2.617-2.617c.488-.488 1.28-.487 1.767 0 .488.489.488 1.28 0 1.768l-4.75 4.75c-.488.488-1.28.488-1.767 0l-4.751-4.75zm-12-10c-.488-.488-.488-1.28 0-1.768l4.75-4.75c.489-.487 1.28-.487 1.768 0l4.75 4.75c.488.489.488 1.28 0 1.768s-1.28.488-1.767 0L7.25 5.268V21.75C7.25 22.44 6.69 23 6 23s-1.25-.56-1.25-1.25V5.268L2.133 7.884c-.488.488-1.28.488-1.767 0z"
        fill={color}
      />
    </svg>
  );
};

DoubleArrowUpDownFilled24.category = 'Arrows';

export default DoubleArrowUpDownFilled24;

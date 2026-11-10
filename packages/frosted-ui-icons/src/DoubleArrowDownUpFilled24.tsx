import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUpFilled24"
      {...props}
    >
      <path
        d="M12.366 6.116c-.488.488-.488 1.28 0 1.768s1.28.488 1.768 0l2.617-2.615-.001 16.48c0 .69.56 1.25 1.25 1.25s1.25-.559 1.25-1.25V5.269l2.617 2.616c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.768l-4.75-4.75c-.488-.488-1.279-.488-1.767 0l-4.751 4.75zm-12 10c-.488.488-.488 1.28 0 1.768l4.751 4.75c.488.487 1.28.488 1.768 0l4.75-4.75c.488-.488.487-1.28 0-1.768-.489-.488-1.28-.488-1.768 0l-2.616 2.616L7.25 2.25C7.25 1.56 6.69 1 6 1s-1.25.56-1.25 1.25v16.482l-2.616-2.616c-.488-.488-1.28-.488-1.768 0z"
        fill={color}
      />
    </svg>
  );
};

DoubleArrowDownUpFilled24.category = 'Arrows';

export default DoubleArrowDownUpFilled24;

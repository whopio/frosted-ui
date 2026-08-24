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
        d="M12.366 6.116c-.488.488-.488 1.28 0 1.768s1.28.488 1.768 0l2.616-2.615v16.48c0 .69.56 1.25 1.25 1.25s1.249-.559 1.25-1.25V5.269l2.616 2.616c.488.488 1.28.488 1.768 0s.488-1.28 0-1.768l-4.75-4.75c-.488-.488-1.28-.488-1.768 0l-4.75 4.75zm-12 10c-.488.488-.488 1.28 0 1.768l4.75 4.75c.489.488 1.28.487 1.768 0l4.75-4.75c.488-.488.488-1.28 0-1.768s-1.28-.488-1.767 0L7.25 18.732V2.25C7.25 1.56 6.69 1 6 1s-1.25.56-1.25 1.25v16.482l-2.617-2.616c-.488-.488-1.28-.488-1.767 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUpFilled24.category = 'Arrows';

export default DoubleArrowDownUpFilled24;

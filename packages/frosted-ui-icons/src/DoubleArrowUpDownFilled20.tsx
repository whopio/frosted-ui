import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownFilled20"
      {...props}
    >
      <path
        d="M10.367 14.884c-.488-.488-.489-1.28 0-1.768.488-.488 1.279-.487 1.767 0l1.616 1.617V2.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v12.483l1.616-1.617c.489-.488 1.28-.487 1.768 0 .488.489.488 1.28 0 1.768l-3.75 3.75c-.488.488-1.28.488-1.768 0l-3.75-3.75zm-10-8c-.488-.488-.489-1.28 0-1.768l3.75-3.75C4.35 1.132 4.669 1 5 1c.332 0 .65.132.884.366l3.75 3.75c.488.489.488 1.28 0 1.768s-1.28.488-1.767 0L6.25 5.268V17.75C6.25 18.44 5.69 19 5 19s-1.25-.56-1.25-1.25V5.268L2.134 6.884c-.488.488-1.28.488-1.767 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDownFilled20.category = 'Arrows';

export default DoubleArrowUpDownFilled20;

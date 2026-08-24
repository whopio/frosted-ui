import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftFilled20"
      {...props}
    >
      <path
        d="M5.116 10.366c.488-.488 1.28-.488 1.768 0 .488.489.488 1.28 0 1.768L5.268 13.75H17.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5.268l1.616 1.616c.488.489.488 1.28 0 1.768s-1.28.488-1.768 0l-3.75-3.75c-.488-.488-.488-1.28 0-1.768l3.75-3.75zm8-10c.488-.488 1.28-.488 1.768 0l3.75 3.75c.234.235.366.553.366.884 0 .332-.132.65-.366.884l-3.75 3.75c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l1.616-1.616H2.25C1.56 6.25 1 5.69 1 5s.56-1.25 1.25-1.25h12.482l-1.616-1.616c-.488-.488-.488-1.28 0-1.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftFilled20.category = 'Arrows';

export default DoubleArrowRightLeftFilled20;

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
        d="M17.884 12.365c-.488-.487-1.28-.487-1.768 0-.488.488-.488 1.28 0 1.769l2.615 2.616-16.481-.001c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25l16.482.001-2.616 2.616c-.488.488-.488 1.28 0 1.768s1.28.488 1.768 0l4.75-4.75c.488-.488.488-1.28 0-1.768l-4.75-4.75zM7.884.366c-.488-.488-1.28-.488-1.768 0l-4.75 4.751c-.487.488-.488 1.28 0 1.768l4.75 4.75c.488.488 1.28.487 1.768 0 .488-.488.488-1.28 0-1.768L5.268 7.251 21.75 7.25C22.44 7.25 23 6.69 23 6s-.56-1.25-1.25-1.25l-16.482.001 2.616-2.617c.488-.488.488-1.28 0-1.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightFilled24.category = 'Arrows';

export default DoubleArrowLeftRightFilled24;

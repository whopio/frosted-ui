import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftFilled20"
      {...props}
    >
      <path
        d="M12.5 19c3.59 0 6.5-2.91 6.5-6.5S16.09 6 12.5 6H5.268l2.866-2.866c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-5 5C1.132 6.601 1 6.92 1 7.25c0 .332.132.65.366.884l5 5c.488.488 1.28.488 1.768 0s.488-1.28 0-1.768L5.268 8.5H12.5c2.21 0 4 1.791 4 4 0 2.21-1.79 4-4 4h-1.75c-.69 0-1.25.56-1.25 1.25S10.06 19 10.75 19h1.75z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftFilled20.category = 'Arrows';

export default RoundedArrowAngleLeftFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftFilled16"
      {...props}
    >
      <path
        d="M10 15c2.761 0 5-2.239 5-5 0-2.762-2.239-5-5-5H5.268l1.866-1.866c.488-.489.488-1.28 0-1.768s-1.28-.488-1.768 0l-4 4C1.132 5.6 1 5.918 1 6.25c0 .331.132.65.366.884l4 4c.488.488 1.28.488 1.768 0 .488-.489.488-1.28 0-1.768L5.268 7.5H10c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H8.753c-.69 0-1.25.56-1.25 1.25S8.063 15 8.753 15H10z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftFilled16.category = 'Arrows';

export default RoundedArrowAngleLeftFilled16;

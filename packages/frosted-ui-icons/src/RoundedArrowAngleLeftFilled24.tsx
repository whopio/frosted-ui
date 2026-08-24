import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftFilled24"
      {...props}
    >
      <path
        d="M15 23c4.418 0 8-3.582 8-8s-3.582-8-8-8H5.267l3.866-3.866c.488-.489.488-1.28 0-1.768s-1.28-.488-1.767 0l-6 6c-.489.488-.488 1.28 0 1.768l6 6c.488.488 1.279.488 1.767 0 .488-.489.488-1.28 0-1.768L5.268 9.5h9.731c3.038 0 5.5 2.462 5.5 5.5 0 3.037-2.462 5.5-5.5 5.5h-2.09c-.69 0-1.25.56-1.25 1.25S12.22 23 12.91 23H15z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftFilled24.category = 'Arrows';

export default RoundedArrowAngleLeftFilled24;

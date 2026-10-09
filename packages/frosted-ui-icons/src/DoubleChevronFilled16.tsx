import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronFilled16"
      {...props}
    >
      <path
        d="M11.116 9.866c.488-.488 1.28-.488 1.768 0 .488.489.488 1.28 0 1.768l-4 4c-.488.488-1.28.488-1.768 0l-4-4c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L8 12.983l3.116-3.117zm-4-9.5c.488-.488 1.28-.488 1.768 0l4 4c.488.489.488 1.28 0 1.768s-1.28.488-1.768 0L8 3.018 4.884 6.134c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l4-4z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronFilled16.category = 'Arrows';

export default DoubleChevronFilled16;

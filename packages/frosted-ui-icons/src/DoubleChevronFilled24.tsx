import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronFilled24"
      {...props}
    >
      <path
        d="M17.616 15.367c.488-.489 1.28-.489 1.767 0 .489.488.489 1.279 0 1.767l-6.5 6.5c-.488.488-1.28.488-1.767 0l-6.5-6.5c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.767 0L12 20.983l5.617-5.617zm-6.5-15c.489-.489 1.28-.489 1.768 0l6.5 6.5c.488.488.488 1.279 0 1.767s-1.28.488-1.767 0L12 3.018 6.385 8.634c-.488.488-1.28.488-1.767 0-.488-.488-.488-1.28 0-1.768l6.5-6.5z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronFilled24.category = 'Arrows';

export default DoubleChevronFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronFilled32"
      {...props}
    >
      <path
        d="M23.616 20.366c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-8.5 8.5c-.488.488-1.28.488-1.768 0l-8.5-8.5c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L16 27.982l7.616-7.616zM16 1c.331 0 .65.132.884.366l8.5 8.5c.488.488.488 1.28 0 1.768s-1.28.488-1.768 0L16 4.018l-7.616 7.616c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l8.5-8.5C15.351 1.132 15.668 1 16 1z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronFilled32.category = 'Arrows';

export default DoubleChevronFilled32;

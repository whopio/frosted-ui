import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftFilled16"
      {...props}
    >
      <path
        d="M8.438 3.43c.486-.49.482-1.281-.008-1.767S7.15 1.18 6.663 1.67L1.167 7.213c-.626.633-.621 1.654.011 2.28l5.492 5.445c.49.486 1.282.482 1.768-.008s.482-1.281-.008-1.767L3.57 8.343 8.438 3.43zm6.496.003c.488-.488.488-1.28 0-1.767-.488-.488-1.28-.488-1.768 0L7.671 7.16c-.63.63-.63 1.65 0 2.28l5.495 5.493c.489.488 1.28.488 1.768 0s.488-1.28 0-1.768l-4.867-4.865 4.867-4.868z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftFilled16.category = 'Arrows';

export default DoubleChevronLeftFilled16;

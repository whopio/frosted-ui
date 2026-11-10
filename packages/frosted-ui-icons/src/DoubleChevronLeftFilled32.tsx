import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftFilled32"
      {...props}
    >
      <path
        d="M19.092 3.133c.488-.488.488-1.28 0-1.767-.488-.488-1.28-.488-1.767 0L4.157 14.534c-.813.812-.813 2.13 0 2.942L17.325 30.64c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.767L6.222 16.005l12.87-12.872zm9 0c.488-.488.488-1.28 0-1.767-.488-.488-1.28-.488-1.767 0L13.157 14.534c-.813.812-.813 2.13 0 2.942L26.325 30.64c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.767l-12.87-12.868 12.87-12.872z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftFilled32.category = 'Arrows';

export default DoubleChevronLeftFilled32;
